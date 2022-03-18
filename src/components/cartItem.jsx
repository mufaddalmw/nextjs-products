import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from "../features/Cart/cartSlice";


function CartItem({element}) {
  // stars logic
  const stars = Math.round(element.rating.rate) || 0;
  let starsCount = [];
  for (let index = 0; index < stars; index++) {    
    starsCount.push(index);
  }
  
  // redux code
  const dispatch = useDispatch();
  

  return (  
    <>
      <div className="py-6 px-3" key={element.id}>
        <div className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden h-full relative border-gray-100 border-solid border-2">
          <Image
            src={element.image}
            alt="Picture of the product"
            className="w-1/3"
            width={125}
            height={150}
          />
          
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-2xl">{element.title}</h1>            
            <div className="flex item-center mt-2">
              {
                starsCount.map(index => (
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24" key={index}>
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                  </svg>
                ))
              }
            </div>
            <div className="flex item-center justify-between mt-3">
              <h1 className="text-gray-700 font-bold text-xl">AED {element.price}</h1>
              <button className="w-6 h-6 absolute right-3 top-3" title="Remove from Cart" onClick={() => dispatch(removeFromCart(element))}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 19a1 1 0 01-2 0V9a1 1 0 012 0v10zm4 0a1 1 0 01-2 0V9a1 1 0 012 0v10zm4 0a1 1 0 01-2 0V9a1 1 0 012 0v10zm5-17v2H2V2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2H22zm-3 4v16H5V6H3v18h18V6h-2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
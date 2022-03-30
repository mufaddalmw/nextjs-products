import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../features/Cart/cartSlice";
import Toast from "../components/toast";
import { showToast, hideToast } from "../features/Cart/toastSlice";


function ProductItem({element}) {
  const [toast, settoast] = useState(false);
  // stars logic
  const stars = Math.round(element.rating.rate) || 0;
  let starsCount = [];
  for (let index = 0; index < stars; index++) {    
    starsCount.push(index);
  }
  
  // redux code
  const dispatch = useDispatch();

  // addedToCart
  const addedToCart = (item) => {
    
    settoast((state) => {
      return !state;
    });

    setTimeout(() => {
      settoast((state) => {
        return !state;
      });
    }, 3000);

    // dispatch event
    dispatch(addToCart(item));
    dispatch(showToast(true));
    
  }
  

  return (  
    <>
      <div className="py-6 px-3" key={element.id}>
        <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden h-full">
          <div className="w-1/3 bg-cover bg-center" style={{backgroundImage: `url('${element.image}')`}}>
          </div> 
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-2xl">{element.title}</h1>
            <p className="mt-2 text-gray-600 text-sm">{element.description}</p>
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
              {
                !toast && <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" onClick={() => addedToCart(element)}>Add to Cart</button>
              }
              {
                toast && <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Added to Cart</button>
              }
            </div>
          </div>
        </div>
      </div>

      {
        toast && <Toast />
      }
    </>
  );
}

export default ProductItem;
import { useState } from "react";


function ProductItem({element}) {
  const [toast, settoast] = useState(false);
  const stars = Math.round(element.rating.rate) || 0;

  // addedToCart
  const addedToCart = (item) => {
    console.log(item);
    settoast((state) => {
      return !state;
    });

    setTimeout(() => {
      settoast((state) => {
        return !state;
      });
    }, 3000);
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
              {/* starts */}
              {/* <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
              </svg>
              <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
              </svg>
              <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
              </svg>
              <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
              </svg> */}
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
        toast && (
          <div className="fixed top-4 right-4 transition text-white bg-green-500 hover:bg-green-600 rounded-md px-5 py-4 cursor-pointer z-50">
              <div className="flex items-center space-x-2">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="m5 13 4 4L19 7"
                />
              </svg>

                  <p className="font-bold ">Item Added Successfully!</p>
              </div>
          </div>
        )
      }
    </>
  );
}

export default ProductItem;
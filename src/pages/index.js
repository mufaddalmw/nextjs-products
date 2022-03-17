
import { useState } from "react"
import { useSelector } from "react-redux";
import ProductItem from "../components/item";


export default function Home({ data }) {
  
  // redux code
  const currentCart = useSelector((state) => state.cart)
  const cartCount = (currentCart && currentCart.length) || 0;
  return (
    <>
      <header className="flex justify-end p-3">
        <div className="relative p-3">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z"/></svg>
          {cartCount && <span className="w-5 h-5 rounded-full bg-red-500 text-white absolute right-0 top-0 text-xs flex items-center justify-center">{cartCount}</span>}
        </div>
      </header>

      <div className="flex flex-wrap">
        {
          data.map(element => (
            <ProductItem key={element.id} element={element} />
          ))
        }
      </div>
      
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://fakestoreapi.com/products?limit=8`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
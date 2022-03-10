
import { useState } from "react"
import ProductItem from "../components/item";



export default function Home({ data }) {
  
  
  return (
    <>
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
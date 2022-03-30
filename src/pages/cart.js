import { useSelector } from "react-redux"
import Link from "next/link";
import CartItem from "../components/cartItem";


export default function Cart() { 
  const currentCart = useSelector((state) => state.cart);
  
  return (
    <>
      <header className="flex justify-end p-3">
        <Link href="/">
          <a>Return to shopping page</a>
        </Link>
      </header>
      
      <div className="flex flex-wrap container mx-auto flex-col">
        {
          currentCart.map(element => (
            <CartItem key={element.id} element={element} />
          ))
        }
        {
          currentCart.length < 1 && (
            <h1 className="text-2xl text-center">No item added in cart</h1>
          )
        }
      </div>
    </>
  )
}
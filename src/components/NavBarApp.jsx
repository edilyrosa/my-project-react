import { FaShoppingCart  } from "react-icons/fa";
import * as React from 'react';
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext' //ojito
import { useAuth } from "../context/AuthContext";

export default function NavBarApp() {
  const {cart} = useCart()
  const {user, logout} =  useAuth()
    return (
        <header className="bg-white shadow-lg text-blue-600 w-full fixed z-10 top-0 py-4">
      
        <div className="flex flex-row justify-between items-center">
         
         <div className="flex gap-2 items-center">
            <span className="font-extrabold italic tracking-widest p-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              SHOPPING CART
            </span>
            <FaShoppingCart className="text-blue-600 text-4xl" />
         </div>
        
          
          <nav >
            <ul className="flex flex-row gap-4 p-4 font-bold text-[8px] sm:text-xs md:text-sm lg:text-base">
                  <li> <Link to="/" className="hover:underline"> Home </Link> </li>
                  <li> <Link to="/productos" className="hover:underline"> Productos </Link> </li>
                  {
                    user 
                    ? 
                    <>
                    <span>Hola, {user.userEmail}</span>
                    <li> <Link to="/carrito" className="hover:underline"> Tu Carrito({cart.length})  </Link> </li>
                    <li> <Link to="/checkout" className="hover:underline"> Checkout  </Link> </li>
                    <button onClick={logout}>Cerrar Sesion</button>
                    </>
                    :
                    <>
                    <li> <Link to="/login" className="hover:underline"> Login </Link> </li>
                    <li> <Link to="/registro" className="hover:underline"> Register </Link> </li>
                    </>
                  }

              </ul>
          </nav>
          
        </div>
  
      </header>
    )
}
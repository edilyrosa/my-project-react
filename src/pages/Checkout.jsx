
import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa";
import Lista from '../components/ListaPractica';
import Button from '@mui/material/Button';
import { useCart } from '../context/CartContext';
export default function Checkout(){
  
  const { clearCart} = useCart()
  const navigate = useNavigate();
//  const clearCart = () => {
//     alert("Carrito vaciado");
//   };

  const handlePayment = () => {
    alert("Compra realizada con éxito 🎉");
    clearCart();
    navigate("/");
  };
   
    return (

     
             <div className="container mx-auto p-4 pt-40">
                     <h1 className="text-5xl">Soy Checkout</h1>
                     <Lista 
                        showActions={false} // ← Ocultar acciones
                        bigSize={false} // ← Cambiar tamaño de imagen
                      />
            <Button 
              onClick={handlePayment} size="medium" variant='contained'
              sx={{
                  backgroundColor: 'rgb(50,200,50)',
                  width: '100%',
                }}
            >
                <FaCreditCard className="text-blue-100 text-2xl pr-2" />
                Proceder al pago
            </Button>

            <Button 
             onClick={() => navigate("/carrito")} size="medium" variant='contained'
              sx={{
                  backgroundColor: 'rgb(200,211,211)',
                  width: '100%',
                  marginTop:'10px'
                }}
            >
                <FaCreditCard className="text-blue-100 text-2xl pr-2" />
                Volver al carrito
            </Button>


            </div>
        
          
          
        
    )
}
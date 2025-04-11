
import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa";
import Lista from '../components/Lista';
import Button from '@mui/material/Button';
import { useCart } from '../context/CartContext';
export default function Checkout(){
  
  const { clearCart, getCartTotal } = useCart();

  const navigate = useNavigate();
  const handlePayment = () => {
    alert("Compra realizada con éxito 🎉");
    clearCart();
    navigate("/");
  };
   
    return (

             <div className="container mx-auto p-4 pt-40">
                     <h1 className="text-5xl">Soy Checkout</h1>
  
                   <div className='flex flex-col md:flex-row gap-8'>
                     <div className='md:w-2/3'>
                      <Lista 
                              showActions={false} // ← Ocultar acciones
                              bigSize={false} // ← Cambiar tamaño de imagen
                            />
                     </div>

                     <div className='md:w-1/3' > 
                        <div className='rounded-lg shadow-md p-5'>

                          <h2 className='text-xl font-semibold mb-4'>Resumen de pago</h2> 
                          <div className='flex justify-between mb-2'>
                            <span className='text-lg'>SubTotal:</span>
                            <span className='text-lg'>$ {getCartTotal().toFixed(2)}</span>
                          </div>
                          <div className='flex justify-between mb-2'>
                            <span className='text-lg'>Impuestos:</span>
                            <span className='text-lg'>$0.00</span>
                          </div>
                          <hr></hr>
                          <div className='flex justify-between mt-2'>
                            <span className='text-lg font-bold'>Total a pagar</span>
                            <span className='text-lg font-bold'>$ {getCartTotal().toFixed(2)}</span>
                          </div>
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

                      </div>
                    
                   </div>
   
            </div>    
        
    )
}
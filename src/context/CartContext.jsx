import { createContext, useContext, useState, useEffect } from "react"
import { useAuth } from "./AuthContext";

const CartContext = createContext()
export function CartProvider({children}) {
    const [cart, setCart] = useState([])
    const {user, setUser} = useAuth()

    useEffect(()=>{
       if(user) setCart(user.cart || []) 
        else setCart([])
    }, [user])


    const updateCartInDb = async (updatedCart) =>{
        if(!user) return
        const updateUser = {...user, cart:updatedCart}
        setUser(updateUser)//!Setteo el contexto.
        localStorage.setItem('user', JSON.stringify(updateUser))//!setteando el LS
        try {
            const resUpdate = await fetch(`http://localhost:3000/users/${user.id}`,{ //setteando la API
                method: 'PATCH',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({cart:updateUser.cart})
            })
            if(!resUpdate.ok) throw new Error('no se pudo actualizar el carrito en la API')
                console.log('carrito fue actualizado exitozamente en la API');
                
        } catch (error) {
            console.log(error.message );
            alert(`${error.message}`)
        }

    }

    const addToCart = (product) => {
        if(!user){
            alert('debe inciar sesion antes de comprar')
            return
        }

        const updatedCart = [...cart]
        const existingItem = updatedCart.find((i) => i.id === product.id ) 

        if(existingItem) existingItem.quantity +=1; //Existe ya el pro en cart
        else  updatedCart.push({...product, quantity:1}) //No existe
        setCart(updatedCart)
        updateCartInDb(updatedCart)

        // setCart(prevCart => { 
        //     const existingItem = prevCart.find(item => item.id === product.id); 
            
        // if (existingItem) { 
        //         return prevCart.map(item => 
        //         item.id === product.id 
        //         ? { ...item, quantity: item.quantity + 1 } 
        //         : item
        //         );
        //     }
    
        //     return [...prevCart, { ...product, quantity: 1 }];
    
        // });
    };
    
    const removeFromCart = (id) => {
            if(!user){
                alert('debe inciar sesion para eliminar producto')
                return
            }

            const updatedCart = cart.filter(item => item.id !== id)
            setCart(updatedCart);
            updateCartInDb(updatedCart)
    };

    const clearCart = () => {
            setCart([]);
            updateCartInDb([])
    };

    const updateQuantity = (id, quantity) => {
            if(!user) return;
            const updatedCart = cart.map((i) => i.id === id ? {...i, quantity: Math.max(1, quantity)} : i) 

            setCart(updatedCart);
            updateCartInDb(updatedCart)
            // setCart(prevCart => prevCart.map(item => 
            //     item.id === id 
            // ? { ...item, quantity: Math.max(1, quantity) } 
            // : item 
            // ));
    };


     const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.precio * (item.quantity)), 0); 
    };
    
    return (
        <CartContext.Provider 
            value={{cart, addToCart, removeFromCart, clearCart, updateQuantity, getCartTotal}}>
            {children}
        </CartContext.Provider>
        );
}

export const useCart = () => useContext(CartContext);
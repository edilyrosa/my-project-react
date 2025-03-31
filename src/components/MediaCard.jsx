import { FaShoppingCart } from "react-icons/fa"; // Importar icono del carrito para el btn "Comprar"
import { Link } from "react-router-dom"; //para redireccion a esa vista al evento onClick del btn
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useCart} from '../context/CartContext'

export default function MediaCard({minWidthCard, heightImg, producto, btnLookDatail}) {
 const {addToCart} = useCart()
  
  //TODO: addToCart sera proveida por el contexto, por lo que dejo de ser PROP y es handleFunc.
  
  //const addToCart = (elProducto) => { alert(`El Producto "${elProducto.nombre}" agregado al carrito`)}
  //? Notar que requiere parametro, al momento de llamarla hacerlo en una Arrow Func -> onClick={() => addToCart(producto)}
  //Usar AF cuando necesitas pasar parámetros a la función manejadora, como "producto". La AF asegura que esto suceda solo al hacer clic
  
  
  //? Parametro event + otros -> onClick={(e) => addToCart(e, producto)}
  // Usa AF para pasar parametros adicionales junto con el objeto event, debes pasar ambos explícitamente. 
  //!   const addToCart = (e, elProducto) => { 
  //   alert(`El Producto "${elProducto.nombre}" agregado al carrito`)
  //   console.log("el boton", e.target);
  // }

  //TODO: Agregar el estilo de cada card
    return (
      <Card sx={{ minWidth: minWidthCard || 300 }} 
        className="p-4 m-4 w-full max-w-[350px] min-w-[25%] min-h-[50vh] hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
      >
        
        <CardMedia
          sx={{ height: heightImg || 140 }}
          image={producto.imagen}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.nombre}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {producto.descripcion}
          </Typography>
        </CardContent>
        
        <CardContent>
      		<div className="flex items-center">
              	<svg className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              	<svg className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              	<svg className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              	<svg className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>

              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                5.0
              </span>
				</div>
      	</CardContent>

        
        <CardActions>
          <Button size="small"
            variant='contained'
            color='primary'
            onClick={() => addToCart(producto)}>Comprar</Button>
          
      
          {btnLookDatail && 
            <Link to={`/producto/${producto.id}` }> 
              <Button size="small" variant='outlined'>
                <i className="text-blue-500 hover:underline m-2 block">Ver Detalles</i> 
              </Button>
            </Link>
          }

        </CardActions>

      </Card>
    );
  }
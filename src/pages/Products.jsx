import { useState, useEffect } from "react"
import MediaCard from "../components/MediaCard"
import { getproductos } from "../services/api";
//TODO: las importaciones
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Products(){
   
    const [productos, setProductos] = useState([]) //Var usada para pintar
    const [productosOriginales, setProductosOriginales] = useState([]) //Var que tiene  TODOS LOS PRO DE LA API
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (searchTerm) => {
        if(searchTerm === '') setProductos(productosOriginales)
            else{
        const productosFiltrados = productosOriginales.filter(producto => {
           return producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
            producto.precio.toString().includes(searchTerm)
        }
        )
                setProductos(productosFiltrados)
        }

    }
   
//  const myInput = document.getElementById("fullWidth")
//  myInput.addEventListener('onChange', (e)=>{
//     console.log(e.target.value);
//  })

   
//     useEffect(() => {
//     async function fetchData() {
//         const response = await fetch(`http://localhost:3000/productos`)
//         try{
//             if (!response.ok) throw new Error('Network response was not ok')
//             const data = await response.json()
//             setProductos(data)
//         }catch(err){
//             console.error('Error fetching data:', err)
//         }
//     }
//     fetchData() //!LLAMARLA
//    }, [])


  
useEffect(() => {
    async function fetchData() {
        try{
        const data = await getproductos()
        setProductos(data) 
        setProductosOriginales(data)
        }catch(err){
            console.error('Error fetching data:', err)
        }
    }
    fetchData() //!LLAMARLA
   }, [])

    // const productos1 = [
    //   { "id": 1, "nombre": "Laptop Gamer", "precio": 1500, "descripcion": "Laptop potente", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAeo-venJIrrE5Y_kMBEu3Wc3-B8CyfsfcA&s" },
    //   { "id": 2, "nombre": "Auriculares Bluetooth", "precio": 200, "descripcion": "Auriculares con cancelación de ruido", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBRAjBjJYY4Lbz1DYHN4WZh_xJikcKCuY1g&s" },
    // ]

    return (
        <div className="container mx-auto p-4 pt-40">

        {/* //TODO: el input search*/}

           
        <div className="flex gap-2 items-center justify-center my-4">
              <Box sx={{ width: 500, maxWidth: '100%' }}>
                  <TextField 
                  fullWidth 
                  label="Buscar Productos" 
                  id="fullWidth" 
               
                  onChange={ (e) => {
                      setSearchTerm(e.target.value)
                      handleSearch(e.target.value)
                    console.log('DIGITANDO', e.target.value);
                        
                    
                    }}
                  
                  
                  />
              </Box>
            </div>



        <h1 className="text-4xl font-bold mb-4 text-center text-blue-500">Nuestros Productos</h1>
        <div className='p-4 flex flex-col lg:flex-row gap-[2%] justify-center items-center flex-wrap'>
         
                {productos.map((producto) => (
                        <MediaCard 
                            key={producto.id}
                            producto={producto} 
                            minWidthCard={350}
                            heightImg={140}
                            btnLookDatail={true}
                            
                        />
                ))}
                
     </div>
     </div>
    )
}
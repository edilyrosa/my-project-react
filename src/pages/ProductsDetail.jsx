import MediaCard from "../components/MediaCard"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import { getproductoById} from "../services/api";
export default function Products(){

    const [producto, setProducto] = useState({})
    const {id} =  useParams() 

    useEffect(() => {
    async function fetchData() {
        try{
        const data = await getproductoById(id)
        setProducto(data)
        }catch(err){
            console.error('Error fetching data:', err)
        }
    }
    fetchData() //!LLAMARLA
   }, [])

    return (
      <div className="container mx-auto p-4 pt-40">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-500">Nuestros Productos</h1>
      <div className='p-4 flex flex-col lg:flex-row gap-[2%] justify-center items-center flex-wrap'>
         
                  <MediaCard 
                      key={producto.id}
                      producto={producto} 
                      minWidthCard={500}
                      heightImg={300}
                      btnLookDatail={false}
                  />
      
      </div>
</div>
    )
}
import MediaCard from "../components/MediaCard"

export default function Products(){

    const producto =  { "id": 1, "nombre": "Laptop Gamer", "precio": 1500, "descripcion": "Laptop potente", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAeo-venJIrrE5Y_kMBEu3Wc3-B8CyfsfcA&s" }

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
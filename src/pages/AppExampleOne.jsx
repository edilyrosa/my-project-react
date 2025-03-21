function AppExampleOne () {

    let nameUser = 'edily';
    let sabores = ['uva', 'melon', 'mantecado']
    
    return (
        <>
        <h2> Hola soy AppExampleOne hijo de App.jsx </h2>
        <h3 className="bg-blue-600 text-3xl"> Hola el valor de la var nameUser es {nameUser}</h3>
        <hr/>
        <h3 className="bg-blue-600 text-3xl"> lista de sabores sabores</h3>
        <ul> 
            {sabores.map((ele,index)=> <li>{index+1}. {ele}</li>)} 
        </ul>
        </>
    )
}
export default AppExampleOne;
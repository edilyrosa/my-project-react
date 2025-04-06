import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
//import { register } from '../context/CartContext' //!debe ser del AuthContext
//import { useAuth } from "../context/AuthContext";

export default function Register() {
    const [userName, setUserName] = useState('edily')
    const [password, setPassword] = useState('')
   // const navigate = useNavigate()

const handleSubmit =  (e) => {
    e.preventDefault();
    //TODO: const result = register(userName, password) 
    // if(result.success) navigate('/productos')
    // else alert(result.message)

    alert('form enviado')
}


    return(
        <div className=" w-[500px] mt-[200px] flex flex-col items-center justify-center mx-auto">

            <h2 className="text-2xl font-semibold mb-4">Registro</h2>

            <form
                onSubmit={handleSubmit}
                className=" w-full space-y-4 p-6 flex flex-col bg-white rounded-md shadow-md"
            >

                <input
                    type="text"
                    placeholder="UserName"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contrasena"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-md"
                >
                    Registrame
                </button>

            </form>

            <div className="mt-4 text-sm">
            <p>
                ¿Ya tienes una cuenta? {' '}
                <Link to='/login' className="text-blue-600 hover:underline">
                Inicia sesión aquí
                </Link> 
            </p>
            </div>


        </div>
    )
    
}
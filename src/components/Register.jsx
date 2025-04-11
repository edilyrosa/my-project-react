import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"; //TODO

export default function Register() {
    //const [userName, setUserName] = useState('edily')
    const [userEmail, setUserEmail] = useState('') //TODO
    const [password, setPassword] = useState('')
    const navigate = useNavigate() //TODO
    const {register} = useAuth() //TODO

    const handleSubmit =  async (e) => {
        e.preventDefault();
        const result = await register(userEmail, password) //TODO
        if(result.success) {
            alert(`Registro exitoso de ${result.user.userEmail} y ${result.user.id}`)
            navigate('/productos')
        }
        else alert(result.message)
    }


    return(
        <div className=" w-[500px] mt-[200px] flex flex-col items-center justify-center mx-auto">

            <h2 className="text-2xl font-semibold mb-4">Registro</h2>

            <form
                onSubmit={handleSubmit}
                className=" w-full space-y-4 p-6 flex flex-col bg-white rounded-md shadow-md"
            >

                <input
                    type="email"
                    placeholder="userEmail"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
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
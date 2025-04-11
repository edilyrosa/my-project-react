import { createContext, useState,  useEffect, useContext } from "react"
import { userRegister, userLoging } from "../services/auth"

const AuthContext = createContext()
export default function AuthProvider({children}) {

    const [user, setUser] = useState(null)

    //TODO: Un efecto secundario, que al montar este componente verifique si hay un usuario en el LS 
    useEffect(() => {
        const storeUser = localStorage.getItem('user')
        if(storeUser){
            const userParsed = JSON.parse(storeUser)
            setUser(userParsed)
            console.log('usuario cargado desde el LS', userParsed);
        }
    }, [])


    const register = async (userEmail, password) => {
        try{
            const newUser = await userRegister(userEmail, password)
            if(newUser){
                setUser(newUser)
                localStorage.setItem('user',JSON.stringify(newUser))
                console.log('Usuario fue registrado', newUser);
                return{success:true, user:newUser}
            }
        }catch(error){
            return{success:false, message:error.message}
        }
    }

    const login = async (userEmail, password) => {
        try{
            const logUser = await userLoging(userEmail, password)
            if(logUser){
                setUser(logUser)
                localStorage.setItem('user',JSON.stringify(logUser))
                console.log('Usuario fue logeado con exito ', logUser);
                return{success:true, user:logUser}
            }
        }catch(error){
            return{success:false, message:error.message}
        }
    }

    const logout = () =>{
        setUser(null)
        localStorage.removeItem('user')
        console.log('Usuario desloggeado');
    }


    return(
        <AuthContext.Provider value={{user, setUser, register, login, logout, isAuthenticated:!!user }}>
            {children}
        </AuthContext.Provider>
    )
    
}

export const useAuth = () =>{
    const context = useContext(AuthContext)
    if(!context) throw new Error('El AuthContext debe ser usado, envolviendo App o siendo proveedor de sus componentes que lo requieran')
    return context
}

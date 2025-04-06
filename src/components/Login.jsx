import { useState } from "react";
//import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

   // const result = await login(username, password); // Realiza el login con el username y password
    //!login() Busca en la db al usuario que esta intentado hacer login, y retorna un OBJ ->
    //!return { success: true, user: loggedInUser }
    //!return { success: false, message: "Usuario o contraseña incorrectos." };
    
    // if (result.success) {
    //   navigate("/productos");
    // } else {
    //   alert(result.message); // Si no es exitoso, muestra el mensaje de error
    // }

    alert('usuario hizo Loing')
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg w-80">
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        
        <label className="block mb-2">
          Usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>

        <label className="block mb-4">
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

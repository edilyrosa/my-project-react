import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userEmail, setUserEmail] = useState('') 
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  //!Func async que obtiene el resultado (true || false) y redirige navegacion y alert().
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(userEmail, password);
    
    if (result.success) {
      alert(`Loing exitoso de ${result.user.userEmail}, id=${result.user.id}`);
      navigate("/productos");
    } else {
      alert(result.message); // Si no es exitoso, muestra el mensaje de error desde la API
    }

  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg w-80">
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        
        <label className="block mb-2">
          Usuario:
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
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

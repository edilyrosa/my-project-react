import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 
import Home from "./Home";
import Products from "./Products";
import ProductsDetail from "./ProductsDetail";
import Checkout from "./Checkout";
import NotFound from "./NotFound";
import ShoppingCart  from "./ShoppingCart";
import NavBarApp from "../components/NavBarApp";
import Register from "../components/Register";
import Login from "../components/Login";
	
const ProtectedRoute = ({ele}) => {
	const {isAuthenticated} = useAuth()
	return isAuthenticated ? ele : <Navigate to='/login'/>
} 

		export default function AppRouter() {
  			return (
    				<BrowserRouter>
      				<NavBarApp/>
      						<Routes>
        						<Route path="/" element={<Home />} />
        						<Route path="/productos" element={<Products />} />
       							<Route path="/producto/:id" element={<ProductsDetail />} />


        						<Route 
									path="/carrito" 
									element={<ProtectedRoute ele={<ShoppingCart />} />} />


        						<Route 
									path="/checkout" 
									element={<ProtectedRoute ele={<Checkout />} />} />


        						<Route path="/registro" element={<Register />} />
        						<Route path="/login" element={<Login />} />
        						<Route path="*" element={<NotFound />} />
      						</Routes>
    				</BrowserRouter>
  			);
		}

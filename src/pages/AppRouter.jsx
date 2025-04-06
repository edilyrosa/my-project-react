import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import ProductsDetail from "./ProductsDetail";
import Checkout from "./Checkout";
import NotFound from "./NotFound";
import ShoppingCart  from "./ShoppingCart";
import NavBarApp from "../components/NavBarApp";
import Register from "../components/Register";
import Login from "../components/Login";
		

//import de Home, Products, ProductsDetail, ShoppingCart, Checkout, NotFound: 
		export default function AppRouter() {
  			return (
    				<BrowserRouter>
      				<NavBarApp/>
      						<Routes>
        						<Route path="/" element={<Home />} />
        						<Route path="/productos" element={<Products />} />
       							<Route path="/producto/:id" element={<ProductsDetail />} />
        						<Route path="/carrito" element={<ShoppingCart />} />
        						<Route path="/checkout" element={<Checkout />} />
        						<Route path="/registro" element={<Register />} />
        						<Route path="/login" element={<Login />} />
        						<Route path="*" element={<NotFound />} />
      						</Routes>
    				</BrowserRouter>
  			);
		}

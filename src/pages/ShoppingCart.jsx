import Lista from "../components/Lista";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { FaCreditCard } from "react-icons/fa";


export default function ShoppingCart(){
   
       return (
               <div className="py-40 ">
                     <h1 className="text-5xl text-green-400">Soy ShoppingCart</h1>
                     <Lista />
    <div className="bg-gray-50 px-6 pb-10">
              
              
              <Link to="/checkout" className="block w-full">
                <Button size="large"variant='contained'
                  sx={{
                    backgroundColor: 'rgb(50,200,50)',
                    width: '50%',
                    marginLeft: '25%',
                  }}
                >
                  <FaCreditCard className="text-blue-100 text-2xl pr-2" />
                  Ir a Pagar
                </Button>
              </Link>
            </div>
               </div>
       )
   }
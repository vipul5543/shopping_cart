import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { motion } from "framer-motion";



const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
  return (setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) ))
  } , [cart]);

  return (
    <div >
  {
    cart.length > 0  ? 
    (<motion.div   initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="Cart flex gap-28 max-w-5xl mx-auto mt-12 ">


      <div className="flex flex-col gap-y-16 w-6/12">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col gap-y-60 w-6/12  ">

        <div className="flex flex-col pt-2 " >
          <div className="text-emerald-600 text-base font-bold" >YOUR CART</div>
          <div className="text-emerald-700 text-3xl font-bold">SUMMARY</div>
          <p className="mt-4 text-gray-600 font-semibold text-base text-left">
           Total Items:<span className="text-gray-700"> {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col   ">
          <p className=" text-gray-600 font-semibold text-base mb-2">Total Amount: <span className="text-gray-700">${totalAmount}</span></p>
          <button className="bg-green-700 w-7/12 text-white border rounded-md py-1 font-semibold">
            Checkout Now
          </button>
        </div>

      </div>


    </motion.div>) : 
    (<motion.div  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex  flex-col justify-center items-center h-screen">
      <h1 className="text-gray-600 font-semibold text-base">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-700 w-72 text-white border rounded-md py-1 font-semibold">
          Shop Now
        </button>
      </Link>
    </motion.div>)
  }
    </div>
  );
};

export default Cart;
  
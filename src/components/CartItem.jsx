
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <motion.div whileHover={{scale:1.1}}  transition={{duration:0.3}}  className=" CartItem flex  gap-12 w-full border-b-4 pb-8 ">

    

        <div>
          <img src={item.image} width={150} height={150} />
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-base text-left  mt-1 ">{item.title}</h1>
          <h1 className="my-4  text-gray-400 font-normal text-[12px] text-left">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div className=" w-full flex justify-between">
            <p className="text-emerald-500 font-bold">${item.price}</p>
            <motion.div style={{cursor:'pointer'}}
            onClick={removeFromCart}   className="mr-2 cursor-pointer">
             <MdDeleteForever className="w-5 h-5"/>
            </motion.div>
          </div>

        </div>


     

    </motion.div>
  );
};

export default CartItem;

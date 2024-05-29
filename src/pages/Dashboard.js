import { NavLink, Outlet } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { IoBag } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";
import { setCurrTab,setPrevTab } from "../slices/tabSlice";

const Dashboard = () => {

    const user = useSelector(store => store.user);
    const { prevTab,currTab } = useSelector(store => store.tabInfo);
    const dispatch = useDispatch();
    const linkVariants = {
        hidden: { opacity: 0, y: (currTab-prevTab>=0)?-20:20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: (currTab-prevTab>=0)?20:-20 },
    }; 

    const sideTabs =[{name:"Profile",icon:<FaUserCircle size={25} className="mx-4 relative z-10"/>,to:'/dashboard/my-profile'}];
    if(user.accountType==="Customer"){
        sideTabs.push({name:"Orders",icon:<IoBag size={25} className="mx-4 relative z-10"/>,to:'/dashboard/orders'});
        sideTabs.push({name:"Cart",icon:<FaCartShopping size={25} className="mx-4 relative z-10"/>,to:'/dashboard/cart'});
        sideTabs.push({name:"Favourites",icon:<FaHeart size={25} className="mx-4 relative z-10"/>,to:'/dashboard/favourites'});
        sideTabs.push({name:"Settings",icon:<IoSettingsSharp size={25} className="mx-4 relative z-10"/>,to:'/dashboard/settings'});
    }
    else if(user.accountType==="Owner"){

    }

    const handleSideTabClick = (index)=>{
        localStorage.setItem("prevTab",JSON.stringify(currTab));
        dispatch(setPrevTab(currTab));
        localStorage.setItem("currTab",JSON.stringify(index));
        dispatch(setCurrTab(index));
    }

    return (
        <div className="relative flex w-full min-h-screen bg-gradient-to-r from-black to-[#222831] text-white">
            <div className="fixed pt-40 pl-10 w-[15%] min-h-screen flex flex-col space-y-5">
                {/* Content for the left section */}
                {sideTabs.map((tab,index)=> <motion.div className="relative" key={tab.name} initial="hidden" animate="visible" exit="exit" variants={linkVariants} onClick={()=>{handleSideTabClick(index)}}>
                    <NavLink to={tab.to} className={({isActive})=>`flex items-center hover:scale-105 transition-transform ease-out
                    ${isActive?'text-black py-3':'py-3'}`}>
                        {({isActive})=><>
                        {isActive && <motion.div initial="hidden" animate="visible" exit="exit" variants={linkVariants} className="absolute inset-0 bg-[#76ABAE] rounded-lg z-0 transot" transition={{ duration: 0.1 }}/>}
                        {tab.icon}<span className="relative z-10">{tab.name}</span>
                        </>}
                    </NavLink>
                </motion.div>)}
                <button className="flex items-center hover:scale-105 transition-transform ease-out py-3">
                   <IoIosLogOut size={25} className="mx-4"/> <span>Logout</span>
                </button>
            </div>
            <div className="pl-[20%] min-h-screen pt-[10%] w-full">
                {/* Content for the right section */}
                <Outlet/>
            </div>
        </div>
    )
}

export default Dashboard
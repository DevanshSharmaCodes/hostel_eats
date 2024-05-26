import axios from "axios";
import toast from "react-hot-toast"
import { endpoints } from "./apis";
import { addUser } from "../slices/userSlice";

const { SIGNUP_API,LOGIN_API } = endpoints;

export async function signup (signUpData,navigate,dispatch){
    const toastId = toast.loading("Loading...");
    try{
        const response = await axios.post(SIGNUP_API,signUpData);
        console.log("SIGNUP API RESPONSE............", response);
        toast.success("Signup Successful");
        navigate("/login");
    }
    catch(error){
        console.log("Error During SignUp: ",error);
        toast.error("Signup Failed");
        navigate("/signup")
    }
    toast.dismiss(toastId);
}

export async function login(email,password,navigate,dispatch){
    const toastId = toast.loading("Loading...");
    try{
        const response = await axios.post(LOGIN_API,{email,password});
        console.log("LOGIN API RESPONSE..............",response);
        toast.success("Login Successful");
        dispatch(addUser(response.data.existingUser));
        navigate('/');
    }
    catch(error){
        console.log("Error During Login: ",error);
        toast.error("Login Failed");
        navigate('/login');
    }
    toast.dismiss(toastId);
}
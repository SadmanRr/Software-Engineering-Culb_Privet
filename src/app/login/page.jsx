"use client"
import axios from "../../components/axios/axios";
import Layout from "@/components/customLayout/Layout";
 
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

const Login = () => {
  const [user,setUser] = useState({});
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const [cookies, setCookie,removeCookie] = useCookies(['token']);
   const router = useRouter()
  const handleLogin =(e)=>{
     e.preventDefault()
    try {
      axios.post("/user/login",{email,password})
      .then(res=>{
      //  console.log(res);
      router.refresh()
       alert("ok")
         router.push("/")
        setCookie('token',res.data.token, { path: '/' })
      
       
      }).catch(err=>{
       console.log(err);
      })
    } catch (error) {
      console.log(error.message);
    }
  }
  
    return (
      <Layout>
<div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your email"
                onChange={e=>{
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your password"
                onChange={e=>{
                  setPassword(e.target.value)
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </button>
            <span>already have no an account? <Link href="/register" className="hover:underline hover:text-red">register</Link></span>
          </form>
        </div>
        
        
      </div>
      </Layout>
      
    );
  };
  
  export default Login
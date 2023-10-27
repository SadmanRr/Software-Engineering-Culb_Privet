"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { FaBeer, FaFacebook, FaInstagram, FaSkype, FaTwitter } from 'react-icons/fa';
const Layout = ({children}) => {
     const [cookies, setCookie] = useCookies(['token']);
     const [token,setToken] = useState("")
      useEffect(()=>{
        if(window!=undefined){
          const tokend = cookies['token'];
          setToken(tokend)
        }
      },[])
      const [data,setData] = useState([])
      const message = [
        {
        q:"what is your name",
        a:"my name is malek"
      },

        {
        q:"wh",
        a:"my name is sadman"
      },
        {
        q:"1",
        a:"my name is sariar votora"
      },
        {
        q:"2",
        a:"my name is sadman votora"
      },
       
    ]
      const [mes,setMes] = useState("")
       const [toggle,setToggle] = useState(false)
      const handleSubmit = e =>{
       
        if(message.some(item=>item.q==mes)){
          const filter = message.filter(item=>item.q==mes)
          console.log(filter);
          setData(prev=>[...prev,...filter])
        }
        else{
          setData(prev=>[...prev,{q:"default",a:"not found"}])
        }
      }
     
      useEffect(()=>{
        if(!toggle){
          setData([])
        }
      },[toggle])
    return (
        <div>
             <nav class="flex items-center justify-between p-4 bg-gray-800 text-white">

<div class="flex items-center">
  <div class="social-icon flex space-x-2 items-center">
    
    <img src="/logo.jpg" alt="Logo" class="h-12 w-12" />
     <h6>Software Engineering Club</h6>
  </div>
  <div class="social-icon">
    <i class="fab fa-twitter"></i>
  </div>
  <div class="social-icon">
    <i class="fab fa-instagram"></i>
  </div>
</div>


<div class="flex justify-center">
  <Link href="/" className="nav-link mx-2">Home</Link>
  <Link href="/certificate" className="nav-link mx-2">Certificate</Link>
  <Link href="/events" className="nav-link mx-2">Event</Link>
{ !token && <Link href="/login" className="nav-link mx-2">Login   </Link>}
  
</div>

 
</nav>
            {children}

            <footer className='grid grid-cols-3 mt-20 mb-20'>
                 <div className='flex flex-col justify-center items-center'>
                    <img src='/fvrsir.jpg' className='w-10 h-10'/>
                    <h1 className='text-2xl'>software eginering club</h1>
                 </div>
                 <div className='text-gray-500'>
                    <h1 className='text-3xl capitalize my-5 text-center text-black'>
                        About DIU SEC
                    </h1>
                    <p className='text-gray-500 text-xl mb-10'>DIU SEC is the most primitive and extensive club of our University. We work together to explore every field of Computer Science. Join us to know more.</p>
                    <p>Copyright © 2023 DIU SEC | All Rights Reserved</p>
                 </div>
                 <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-center text-4xl text-gray-500'>
                        find us on
                    </h1>
                   <div className='flex space-x-3'>
                   
                    <a href='http://www.google.com' target='_blank'>
                    <FaFacebook /> 
                    </a>
                    <a href='http://www.google.com' target='_blank'>
                    <FaFacebook /> 
                    </a>
                    <a href='http://www.google.com' target='_blank'>
                    <FaFacebook /> 
                    </a>
                    <a href='http://www.google.com' target='_blank'>
                    <FaFacebook /> 
                    </a>
                  
                   <FaInstagram />
                    <FaSkype />
                     <FaTwitter />
                   
                   </div>
                 </div>
              { !toggle &&  <button className='bg-red-900 text-white px-5 py-3 fixed bottom-4' onClick={()=>setToggle(true)}>chatboot</button>}
             
               {toggle && <div className='fixed bottom-1 h-96  w-72 overflow-y-auto   border-1 bg-gray-300 rounded-md px-3 py-2 '>
               { toggle &&  <button className='bg-red-900 text-white px-5 py-3 fixed left-56 ' onClick={()=>setToggle(false)}>x</button>}
                   {
                    data.map((item,index)=><div key={index} className=' z-50'>
          <h1>{item.q}</h1>
          <h1>{item.a}</h1>
          </div>)
                   }
               <div className='fixed bottom-0'>
               <input  onChange={(e)=>setMes(e.target.value)}  className=' border-4 border-bg-red-700   w-40 py-2 px-2'/>
                   <button onClick={()=>handleSubmit()} className='bg-green-600 px-4 py-2 rounded-md mx-2 font-bold'>submit </button>
               </div>
                </div>}
            </footer>
        </div>
    );
};

export default Layout;
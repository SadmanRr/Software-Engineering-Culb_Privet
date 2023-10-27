"use client"
import Layout from '@/components/customLayout/Layout';
import React, { useEffect, useState } from 'react';
import axios from "../../components/axios/axios";
const Home = () => {
    const [event,setEvent] = useState([])
    useEffect(()=>{
        try {
            axios.get("/event" )
            .then(res=>{
                console.log(res.data.result);
             setEvent(res.data.result)
            }).catch(err=>{
             console.log(err);
            })
          } catch (error) {
            console.log(error.message);
          }
    },[])
    return (
        <Layout>
    <div className='container mx-auto  '>
           { event.map((item,index)=><div className='flex gap-10 relative border my-4' key={index}>
                <div className='w-1/4'>
                    <img src={item?.img[0]} alt="loading..." className='w-full h-full' />
                </div>
                <div className='w-3/4'>
                    <h1 className='text-3xl text-blue-400 my-1'>{item?.name}</h1>
                    <span className='text-lg'>{item?.date}</span>
                    <p className='text-xl'> {item.details}</p>
                </div>
                
                <span className='absolute right-4 top-1 bg-sky-400 px-2 py-1 rounded-md'>finsed</span>
            </div>)}
        </div>
        </Layout>
       
    );
};

export default Home;
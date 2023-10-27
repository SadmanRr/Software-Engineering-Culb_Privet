"use client"
import Layout from '@/components/customLayout/Layout';
import   { useEffect, useState } from 'react';
import axios from '../../components/axios/axios';
import { toast } from 'react-toastify';

const Home = () => {
    const [event, setEvent] = useState([])
   const [id,setId] = useState("")
    useEffect(() => {
        try {
            axios.get(`/certificate`)
                .then(res => {
                    console.log(res.data.result);
                    setEvent(res.data.result)
                }).catch(err => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error.message);
        }
    }, [id])
    const handleClick = e=>{
        console.log("hdfd",e);
    const isTrue = event.some(item=>item.id==id)
        if(isTrue){
          toast.success("well done, your certificate is valid")
        }
        else{
            toast.error("sorry your not in")
        }
    }
    return (
        <Layout>
            <div className='flex justify-center flex-col items-center h-screen'>
                <div className='w-1/2'>
                    <input className='w-full border rounded-md text-gray-500 shadow-md py-4 px-2' placeholder='Enter Certificate No. ' onChange={(e)=>{
                        console.log(e.target.value);
                        setId(e.target.value)
                    }}  />
                </div>
                <button onClick={()=>handleClick()} className='text-xl text-gray-500'>Search certificate by certificate ID</button>
            </div>
        </Layout>
    );
};

export default Home;
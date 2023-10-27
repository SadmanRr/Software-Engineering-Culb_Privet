"use client"
import Layout from '@/components/customLayout/Layout';
import axios from '../../components/axios/axios';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const Home = () => {
    const [event, setEvent] = useState({})
    const id = useParams()


    useEffect(() => {
        try {
            axios.get(`/wing/${id.wing}`)
                .then(res => {
                    console.log(res.data.result);
                    setEvent(res.data.result)
                }).catch(err => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error.message);
        }
    }, [])
    return (
        <Layout>
            <div>
                <div className='relative shadow-md flex flex-col items-center justify-center ' >

                    <img src={event?.img} alt='loading' className='w-32 h-32 rounded-full ' />
                    <h1 className='my-5 text-black font-bold text-2xl'> {event.name}</h1>
                    <p className='mb-20 px-10'>{event.details}</p>

                </div>
            </div>
        </Layout>

    );
};

export default Home;
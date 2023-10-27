import Link from 'next/link';
import axios from '../../components/axios/axios';
import React, { useEffect, useState } from 'react';

const Wings = () => {
  const [event,setEvent] = useState([])
  useEffect(()=>{
      try {
          axios.get("/wing" )
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
        <div className='container mx-auto mt-4'>
            <h1 className='text-center  py-3 px-2 text-2xl my-5'>Our wings</h1>
            <div className='grid grid-cols-4 gap-x-10  justify-center place-content-center my-5  gap-y-5'>
                {
                    event.map(({name,details,img,_id}, index) => <div className='relative shadow-md flex flex-col items-center justify-center ' key={index}>

                        <img src={img} alt='loading' className='w-32 h-32 rounded-full ' />
                        <h1 className='my-5 text-black font-bold text-2xl'> {name}</h1>
                        <p className='mb-20 px-10'>{details}</p>
                        <Link href={`/${_id}`} className='bg-blue-700 rounded-md text-white mb-5 py-2 px-5 absolute -bottom-1 '>Show more </Link>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Wings;
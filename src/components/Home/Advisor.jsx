import React, { useState } from 'react';

const Advisor = () => {
    const [ad, setAd] = useState("")
    return (
        <div>
            <div className='flex justify-center '>
                {/* <img src='' alt='loading' className='my-10' /> */}
                <div className='text-center '>
                    <button className='w-44 mx-5 border bg-blue-700 rounded-md hover:text-black text-white hover:bg-blue-400 px-3 py-2' onClick={() => {
                        setAd("ad")
                    }}>advisor</button>
                    <button  className='w-44 mx-5 border bg-blue-700 rounded-md hover:text-black text-white hover:bg-blue-400 px-3 py-2' onClick={() => {
                        setAd("ex")
                    }}>excutive comitte</button>
                </div>
            </div>
            {
                ad === "ad" && <div>
                    <h1 className='text-blue-700 text-2xl my-10 text-center'>Software engineering club</h1>
                    <div className='flex justify-center my-5 '>
                        {[1, 2].map((item, index) => <div className='flex flex-col justify-center mx-4' key={index}>
                            <div className='  '>
                                <img src='/fvrsir.jpg' className='w-28 h-28 rounded-full' />
                            </div>
                            <div className='text-center'>
                                <h1 className='font-bold text-xl'>abdul sattar </h1>
                                <h3 className='text-lg'>ceo of sec</h3>
                            </div>
                        </div>)}


                    </div>
                    <div className='flex  justify-center '>
                        {[1, 2, 5, 4].map((item, index) => <div className='flex flex-col justify-center mx-4' key={index}>
                            <div className='  '>
                                <img src='/fvrsir.jpg' className='w-28 h-28 rounded-full' />
                            </div>
                            <div className='text-center'>
                                <h1 className='font-bold text-xl'>abdul sattar </h1>
                                <h3 className='text-lg'>ceo of sec</h3>
                            </div>
                        </div>)}
                    </div>
                </div>
            }
            {
                ad === "ex" && <div>
                    <h1 className='text-blue-700 text-2xl my-10 text-center'>Software engineering club</h1>
                    <div className='flex justify-center my-5 '>
                        {[1, 2].map((item, index) => <div className='flex flex-col justify-center mx-4' key={index}>
                            <div className='  '>
                                <img src='/fvrsir.jpg' className='w-28 h-28 rounded-full' />
                            </div>
                            <div className='text-center'>
                                <h1 className='font-bold text-xl'>abdul sattar </h1>
                                <h3 className='text-lg'>ceo of exucative</h3>
                            </div>
                        </div>)}


                    </div>
                    <div className='flex  justify-center '>
                        {[1, 2, 5, 4].map((item, index) => <div className='flex flex-col justify-center mx-4' key={index}>
                            <div className='  '>
                                <img src='/fvrsir.jpg' className='w-28 h-28 rounded-full' />
                            </div>
                            <div className='text-center'>
                                <h1 className='font-bold text-xl'>abdul sattar </h1>
                                <h3 className='text-lg'>ceo of sec</h3>
                            </div>
                        </div>)}
                    </div>
                </div>
            }

        </div>
    );
};

export default Advisor;
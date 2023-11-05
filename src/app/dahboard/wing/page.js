"use client"
import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios/axios';
import Layout from '../dashLay/Layout';

const Home = () => {
  const [formData, setFormData] = useState({
    name: 'Gopalvog',
    price: 'descripe',
    
  });
  const [imageFile, setImageFile] = useState(null);
  const [event,setEvent] = useState([])

  async function getEvent(){
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
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('details', formData.price);
      
      data.append('productImg', imageFile);
       console.log(formData);
      // Replace 'your-api-endpoint' with the actual API endpoint where you want to send the data.
      const response = await axios.post('/wing', data);
      // Handle the response (e.g., show a success message or redirect to another page).
      console.log('Data sent successfully:', response.data);
      if(response.status==200){
        alert("success")
        getEvent()
      }
    } catch (error) {
      // Handle errors (e.g., show an error message).
      console.error('Error sending data:', error.message);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  useEffect(()=>{
    getEvent()
  },[])
  const handleDelete = (id)=>{
    try {
      axios.delete(`/wing/${id}` )
      .then(res=>{
          console.log(res.data.result);
       getEvent()
      }).catch(err=>{
       console.log(err);
      })
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Layout>
    <div className="container mx-auto bg-gray-100 min-h-screen p-4  flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Update Wings</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">details:</label>
            <textarea
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm"
            />
          </div>
          
         
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
       
      </div>
      <div className=' '>
            <h1 className='text-center  py-3 px-2 text-2xl my-5'>Our wings</h1>
            <div className='grid grid-cols-4 gap-x-10  justify-center place-content-center my-5  gap-y-5'>
                {
                    event.map(({name,details,img,_id}, index) => <div className='py-5 relative shadow-md flex flex-col items-center justify-center ' key={index}>

                        <img src={img} alt='loading' className='w-32 h-32 rounded-full ' />
                        <h1 className='my-5 text-black font-bold text-2xl'> {name}</h1>
                        <p className='mb-20 px-10'>{details}</p>
                        <button className='text-white bg-red-600 px-5 py-2 rounded-md ' onClick={()=>{handleDelete(_id) }}>delete</button>
                       
                    </div>)
                }
            </div>
        </div>
    </div>
    </Layout>
  );
};

export default Home;

"use client"
import React, { useState } from 'react';
import axios from '../../../components/axios/axios';
import Layout from '../dashLay/Layout';

const Home = () => {
  const [formData, setFormData] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace 'your-api-endpoint' with the actual API endpoint where you want to send the data.
      const response = await axios.post('/notice', {name:formData});
      // Handle the response (e.g., show a success message or redirect to another page).
      console.log('Data sent successfully:', response.data);
      if(response.status==200){
        alert("success")
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

  return (
    <Layout>
    <div className="bg-gray-100 min-h-screen p-4 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Update Notice</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              name="name"
              onChange={e=>setFormData(e.target.value)}
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
    </div>
    </Layout>
  );
};

export default Home;

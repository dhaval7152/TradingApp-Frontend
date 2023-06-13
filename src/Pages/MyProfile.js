import React, { useState ,useContext,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../Context/dataContext";
import Accessdenied from "./Accessdenied";

const ProfilePage = () => {
  const navigate=useNavigate();
  const data = useContext(DataContext);
  const {host,username,checkLoggedIn,userData} =data;
  
  const [userNme, setuserNme] = useState("");
  const [name, setName] = useState("");
  const [upi, setUPI] = useState("");
  
 
  useEffect(() => {
    // checkLoggedIn()
    const data=window.localStorage.getItem('username')
    setuserNme(data)
    viewProfile({username:data})
  }, [])
  

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();
    updateProfile({username,name,upi})
  };

  const viewProfile=async(data)=>{
    try {
      const response = await fetch(`${host}/viewProfile`,{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),

      });
      
      const res = await response.json();
      setuserNme(res.username)
      setName(res.name)
      setUPI(res.upi)
    } catch (error) {
      console.error(error);
    }

  }
  const updateProfile=async(data)=>{
    console.log("htitii updateProfile",data);
    
    try {
      const response = await fetch(`${host}/updateProfile`,{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),

      });
      
      const res = await response.json();

      setuserNme(res.username)
      alert("Profile Updated")
    } catch (error) {
      console.error(error);
    }

  }
  
  return (
    <>
    {
      userData.user ?
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block font-semibold mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={userNme} 
            disabled
            className="w-full px-4 py-2 rounded border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="upiId" className="block font-semibold mb-1">
            UPI ID
          </label>
          <input
            type="text"
            id="upiId"
            value={upi} 
            onChange={(e) => setUPI(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300"
          />
        </div>
        <button
          type="submit"
          // className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          className="bg-gradient-to-r from-indigo-500 via-sky-400 to-sky-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Update
        </button>
      </form>
    </div>
    :
    <Accessdenied/>
  }
    </>

  );
};

export default ProfilePage;

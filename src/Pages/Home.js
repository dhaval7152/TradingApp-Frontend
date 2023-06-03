import React, { useState, useEffect,useContext } from "react";
import DataContext from '../Context/dataContext';
import { useNavigate ,Link} from "react-router-dom";

export default function Sample() {
    const data=useContext(DataContext);
    const{url,checkLoggedIn,username}=data;
    useEffect(() => {
        checkLoggedIn()
    }, [])
  const navigate = useNavigate();

return(
    <>
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col justify-center items-center">
      <header className="text-white text-4xl font-bold mb-8">
        <span className="inline-block animate-bounce">Welcome</span> to the Crypto Trading App
      </header>
      <img
        src="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg"
        alt="Crypto Trading"
        className="w-64 h-64 rounded-full shadow-lg animate-pulse"
      />
      <p className="text-white text-lg mt-8">
        Start trading cryptocurrencies now!{' '}
        <span className="inline-block animate-pulse text-yellow-300">Fast and secure transactions.</span>
      </p>
      <button onClick={()=>navigate("/register")} className="bg-white text-purple-500 px-4 py-2 mt-4 rounded-full shadow-lg hover:bg-purple-500 hover:text-white transform transition-transform duration-500 hover:scale-110">
        Get Started
      </button>
    </div>
    </>
     
)

}
import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  document.title = "Home";

  const data = useContext(DataContext);
  const { url, checkLoggedIn, username, userData} = data;
  const navigate = useNavigate();
  // const checkAuth = () => {
  //   {
  //     userData.user ? navigate("/") : navigate("/");
  //   }
  // };
  // checkAuth();

  useEffect(() => {
    window.localStorage.setItem('username',username)
    checkLoggedIn();

  }, [username]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col justify-center items-center">
        <header className="text-white text-4xl font-bold mb-8">
          <span className="inline-block animate-bounce">Welcome</span> to 
          TradePro
        </header>
        <img
          src="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg"
          alt="Crypto Trading"
          className="w-64 h-64 rounded-full shadow-lg animate-pulse"
        />
        <p className="text-white text-lg mt-8">
          Start trading cryptocurrencies now!{" "}
          <span className="inline-block animate-pulse text-yellow-300">
            Fast and secure transactions.
          </span>
        </p>
        <button
        
            onClick={() => userData.user ? navigate('/viewStocks') : navigate("/register")}
          className="bg-white text-purple-500 px-4 py-2 mt-4 rounded-full shadow-lg hover:bg-purple-500 hover:text-white transform transition-transform duration-500 hover:scale-110"
        >
          Get Started
        </button>
      </div>
    </>
  );
}

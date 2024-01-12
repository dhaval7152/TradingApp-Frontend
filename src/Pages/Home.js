import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import { useNavigate, Link } from "react-router-dom";


export default function Home() {
  document.title = "Home";

  const data = useContext(DataContext);
  const { url, checkLoggedIn, username, userData } = data;
  const navigate = useNavigate();
  // const checkAuth = () => {
  //   {
  //     userData.user ? navigate("/") : navigate("/");
  //   }
  // };
  // checkAuth();

  useEffect(() => {
    window.localStorage.setItem("username", username);
    checkLoggedIn();
  }, [username]);

  return (
    <>
      {/* <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col justify-center items-center">
        <header className="text-white text-4xl font-bold mb-8">
          <span className="inline-block animate-bounce">Welcome</span> to 
          <span className="inline-block"> TradePro</span> 
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
      </div> */}
      <div className="All bg-[#010001]">
        <div class="main flex px-10 py-10 h-fit justify-between ">
          <div class="text ml-18 px-8 mt-10">
            <div class="text-2xl  text-white font-mono ">Buy Sell Earn</div>
            <div class="text-white text-5xl font-extrabold w-[35rem]">
              <p>Faster, better, stronger than your average crypto exchange</p>
            </div>
            <div class="pt-1">
              <p class="py-2 text-white  w-[29rem] font-initial">
                New to crypto? No problem. Buy crypto for as little as $1 in a
                tap, and grow your skills as you go.
              </p>
            </div>
            <div>
              <div className="btns mt-2">
                <button
                  class="bg-gradient-to-tr from-purple-600 via-violet-600 to-indigo-600 rounded-md py-3 px-7 ml-1 text-center text-white"
                  onClick={() =>
                    userData.user
                      ? navigate("/viewStocks")
                      : navigate("/register")
                  }
                >
                  Buy Now
                </button>
                <button
                  class="bg-white rounded-md  border-2 border-indigo-300 py-3 px-6 ml-4 text-center text-black hover:bg-gray-100 hover:font-semibold"
                  onClick={() =>
                    userData.user
                      ? navigate("/viewStocks")
                      : navigate("/register")
                  }
                >
                  Explore More
                </button>
              </div>
            </div>
          </div>
          <div class="image">
            <img class="w-[25rem]" src="homelogo.png" alt="Home image" />
          </div>
        </div>
        <div className="box flex flex-col items-center justify-center w-fit h-[25rem] border-2 border-gray-400 text-gray-200 rounded-3xl  m-auto p-10  ">
          {/* <div className="from-slate-900 to-yellow flex  mx-auto  justify-center  w-1/2 text-4xl  text-center font-bold">
            Access to the most popular cryptocurrencies and more
          </div> */}
          <div className="bg-gradient-to-r from-gray-700 to-slate-300 text-transparent bg-clip-text  flex  mx-auto  justify-center  w-1/2 text-4xl  text-center font-bold animate-pulse">
            Access to the most popular cryptocurrencies and more
          </div>
          <div className="flex flex-row justify-center items-center mt-5 space-x-8">
            <img className="w-12" src="BTC.svg" alt="" />
            <img className="w-12" src="ETH.svg" alt="" />
            <img className="w-12" src="XRP.svg" alt="" />
            <img className="w-12" src="ADA.svg" alt="" />
            <img className="w-12" src="SHIB.svg" alt="" />
          </div>
          <button
            onClick={() =>
              userData.user ? navigate("/viewStocks") : navigate("/register")
            }
            className="rounded-full bg-gray-400 hover:font-bold hover:bg-slate-600 font-semibold  p-2 mt-4"
          >
            See more
          </button>
        </div>
      </div>
    </>
  );
}

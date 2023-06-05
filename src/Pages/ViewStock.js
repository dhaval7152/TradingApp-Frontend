import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import { Link, useNavigate } from "react-router-dom";
import Accessdenied from "./Accessdenied";

export default function ViewStocks() {
  document.title = "view Stocks";
  const data = useContext(DataContext);
  const {host,setCoin,checkLoggedIn,userData} =data;
  const navigate=useNavigate();
  

  const [coins, setcoins] = useState([])


  const handleSend=(coin)=>{
    setCoin(coin)
    navigate("/order")
  }
  useEffect(() => {
    viewStockApi()
    checkLoggedIn()
  }, [])
  
  const viewStockApi=async()=>{
      try {
        const response = await fetch(`${host}/viewStocks`,{
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setcoins(data);
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <>

    {userData.user ?
     <div className="main m-14">
<div className="container mx-auto">
  <h1 className="text-4xl font-bold text-center my-8">Crypto Dashboard</h1>
  <div className="grid grid-cols-3 gap-4">
    {coins.map((coin, index) => (
      <div
        key={index}
        className="rounded-lg shadow  p-6 flex flex-col justify-between bg-gradient-to-br from-blue-500 to-purple-500"
      >
        <h2 className="text-xl  font-bold mb-2 text-white">{coin.CoinkName}</h2>
        <h4 className="text-gray-200 mb-4">{coin.CoinkName}</h4>
        <p className="text-gray-200 text-lg mb-4">${coin.price}</p>
        <div className="flex justify-center">
          {/* <button  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-11">
            Buy
          </button> */}
          
          <button
            onClick={()=>handleSend(coin)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
          >Buy </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={()=>handleSend(coin)}
            >
            Sell
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
</div>: <Accessdenied/>}
    

      {/* <div class="flex items-center justify-center flex-col bg-[#E5E5E5] min-h-screen">
        <div class="bg-[#F4F5FA] p-10 rounded-xl w-[70rem]">
          <div class="flex flex-col justify-center items-center text-center">
            <div class="max-w-sm font-bold font-sans">Markets Overview</div>
            <div class="font-light max-w-lg mt-5 text-sm">
              All price information is in USD
            </div>
          </div>

          <div class="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
            <div class="bg-[#FFFBEC] rounded-xl">
              <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                <div class="mt-3 font-semibold text-lg">Bitcoin</div>
                <div class="text-sm font-light">#btc</div>
                <div class="my-4">
                  <span class="font-light text-sm">$28000</span>
                </div>

                <div className="flex">
                  <button class="bg-[#F4F5FA] px-4 py-3 rounded-full hover:bg-[#6bd24b]  border border-[#F0F0F6] shadow-xl mt-4"
                  onClick={()=>navigate("/order")}>
                    
                    Buy
                  </button>
                  <button class="bg-[#F4F5FA] px-4 py-3 rounded-full hover:bg-[#e85050] border border-[#F0F0F6] shadow-xl mt-4"
                  onClick={()=>navigate("/order")}
                  >
                    sell
                  </button>
                </div>
              </div>
            </div>

            <div class="bg-[#F9ECFF] rounded-xl">
              <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                <div class="mt-3 font-semibold text-lg">Ethereum</div>
                <div class="text-sm font-light w-60 md:w-auto">
                  ETH
                </div>
                <div class="my-4">
                  <span class="font-light text-sm">$1854</span>
                </div>

                <div className="flex">
                  <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  hover:bg-[#6bd24b] border border-[#F0F0F6] shadow-xl mt-4"
                  onClick={()=>navigate("/order")}
                  >
                    Buy
                  </button>
                  <button class="bg-[#F4F5FA] px-4 py-3 rounded-full hover:bg-[#e85050] border border-[#F0F0F6] shadow-xl mt-4"
                  onClick={()=>navigate("/order")}>
                    sell
                  </button>
                </div>
              </div>
            </div>

            <div class="bg-[#ECEEFF] rounded-xl">
              <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                <div class="mt-3 font-semibold text-lg">BNB</div>
                <div class="text-sm font-light w-60 md:w-auto">
                  bnb
                </div>
                <div class="my-4">
                  <span class="font-light text-sm">$304</span>
                </div>

                <div className="flex">
                  <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border hover:bg-[#6bd24b] border-[#F0F0F6] shadow-xl mt-4"
                  
                  onClick={()=>navigate("/order")}>
                    Buy
                  </button>
                  <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border hover:bg-[#e85050] border-[#F0F0F6] shadow-xl mt-4"
                  onClick={()=>navigate("/order")}>
                    sell
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <button class="mt-12 bg-slate-900 text-white px-4 rounded-full py-3">
              See all 
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

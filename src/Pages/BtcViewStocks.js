import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import { Link, useNavigate } from "react-router-dom";
import Accessdenied from "./Accessdenied";
import { BitcoinIcon } from '@bitcoin-design/bitcoin-icons-react/filled'

export default function BtcViewStocks() {
  document.title = "view Stocks";
  const data = useContext(DataContext);
  const {host,setCoin,coin,checkLoggedIn,userData,buyCoin} =data;
  // const {host,setCoin,coin,checkLoggedIn,userData,coins,setcoins} =data;
  const navigate=useNavigate();
  
  const [coins, setcoins] = useState([])

  const handleSend=(coin)=>{
    setCoin(coin)
    // window.localStorage.setItem('coin',"coin")
    window.localStorage.setItem('coinsyml',coin.coinsyml)

    navigate("/btcOrder")
  }
  const handleLimit=(coin)=>{
    setCoin(coin)
    // window.localStorage.setItem('coin',"coin")
    window.localStorage.setItem('coinsyml',coin.coinsyml)

    navigate("/LimitOrder")
  }
  

  useEffect(() => {
    viewStockApi()
    console.log("ViewStock useEffect calling");
    console.log("buyCoin",buyCoin)

  }, [])

//   useEffect(() => {
    
//     viewStockApi()
//     console.log("VIewStock callimg");

//   // }, [])
// }, [coins]) //useEffect Rendering More

  
  const viewStockApi=async()=>{
      try {
        const response = await fetch(`${host}/viewStocks`,{
          method: "GET",
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
  <h1 className="text-xl font-bold text-center my-8">{buyCoin.coinsyml} Dashboard</h1>
  <div className="grid grid-cols-3 gap-4">
    {coins.map((coin, index) => (
      <div
        key={index}
        className="rounded-lg shadow  p-6 flex flex-col justify-between bg-gradient-to-br from-blue-500 to-purple-500"
      >
        <h2 className="text-xl  font-bold mb-2 text-white">{coin.CoinkName}</h2>
        <h4 className="text-gray-200 mb-4">{coin.CoinkName}</h4>
        <div className="flex flex-row">
        
       {buyCoin.coinsyml==="btc" ? 
          
       <BitcoinIcon style={{height: "20px", width: "30px", color: '#F7931A' }} />
       : <p></p>
      }

      <p className="text-white -m-1 mb-5">{1 / (buyCoin.price / coin.price) }</p>
          
        </div>
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
          <button className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 ml-2 rounded"
            onClick={()=>{handleLimit(coin); navigate('/LimitOrder')}}
            >
            Limit Order
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
</div>: <Accessdenied/>}
    

    
    </>
  );
}

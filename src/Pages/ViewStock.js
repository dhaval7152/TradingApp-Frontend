import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import { Link, redirect, useNavigate } from "react-router-dom";
import Accessdenied from "./Accessdenied";

export default function ViewStocks() {
  document.title = "view Stocks";
  const data = useContext(DataContext);
  const { host, setCoin, coin, userData, setbuyCoin } = data;
  const navigate = useNavigate();

  const [coins, setcoins] = useState([]);

  const handleSend = (coin) => {
    setCoin(coin);
    window.localStorage.setItem("coinsyml", coin.coinsyml);
    navigate("/order");
  };
  const handleLimit = (coin) => {
    setCoin(coin);
    window.localStorage.setItem("coinsyml", coin.coinsyml);

    navigate("/LimitOrder");
  };
  const handleViewOrder = (coinName, price) => {
    setbuyCoin({ coinsyml: coinName, price: price });
    navigate("/BtcViewStocks");
  };

  useEffect(() => {
    viewStockApi();
    console.log("ViewStock useEffect calling");
  }, []);

  //   useEffect(() => {

  //     viewStockApi()
  //     console.log("VIewStock callimg");

  //   // }, [])
  // }, [coins]) //useEffect Rendering More

  const viewStockApi = async () => {
    try {
      const response = await fetch(`${host}/viewStocks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
      {userData.user ? (
        <div className="main m-14 ">
          <div className="container mx-auto ">
            <h1 className="text-4xl font-bold text-center my-8  ">
              <span className="bg-gradient-to-r from-yellow-600 to-pink-900 text-transparent bg-clip-text">
                Crypto Dashboard
              </span>
            </h1>

            <div className="flex space-x-14  justify-center text-2xl">
              <table className="space-x-14 text-gray-300">
                <th className="text-blue-400">
                  <button onClick={() => handleViewOrder("btc", 28000)}>
                    {" "}
                    <span className="bg-gradient-to-r from-yellow-600 to-blue-900 text-transparent bg-clip-text">
                      Btc
                    </span>
                  </button>
                </th>
                <th className="pl-4 text-blue-400">
                  <button onClick={() => handleViewOrder("Eth", 1874)}>
                    {" "}
                    <span className="bg-gradient-to-r from-green-600 to-blue-400 text-transparent bg-clip-text">
                      Eth
                    </span>
                  </button>
                </th>
                <th className="pl-4 text-blue-400">
                  <button onClick={() => handleViewOrder("Bnb", 300.5)}>
                    {" "}
                    Bnb
                  </button>
                </th>
              </table>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {coins.map((coin, index) => (
                <div
                  key={index}
                  className="rounded-lg shadow  p-6 flex flex-col justify-between bg-gradient-to-br from-blue-500 to-purple-500"
                >
                  <h2 className="text-xl  font-bold mb-2 text-white">
                    {coin.CoinkName}
                  </h2>
                  <h4 className="text-gray-200 mb-4">{coin.CoinkName}</h4>
                  <p className="text-gray-200 text-lg mb-4">${coin.price}</p>
                  <div className="flex justify-center">
                    {/* <button  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-11">
            Buy
          </button> */}

                    <button
                      onClick={() => handleSend(coin)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
                    >
                      Buy{" "}
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                      onClick={() => handleSend(coin)}
                    >
                      Sell
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 ml-2 rounded"
                      onClick={() => {
                        handleLimit(coin);
                        navigate("/LimitOrder");
                      }}
                    >
                      Limit Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Accessdenied />
      )}
    </>
  );
}

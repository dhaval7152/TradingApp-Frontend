import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import { useNavigate } from "react-router-dom";
import Accessdenied from "./Accessdenied";

export default function Portfolio() {
  document.title = "Portfolio";
  let cp;
  let dif;
  let percentage;
  const data = useContext(DataContext);
  const { host, username, checkLoggedIn, userData } = data;

  const navigate = useNavigate();
  const [usr, setusr] = useState("");
  const [coins, setcoins] = useState([]);

  const [portfolio, setportfolio] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem("username");
    setusr(data);
    viewStockApi();
    viewPortfolioApi({ username: data });
  }, [username]);

  // console.log(portfolio);

  const viewPortfolioApi = async (data) => {
    try {
      const response = await fetch(`${host}/viewPortfolio`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status === "failed") {
        throw new Error("Failed to fetch data");
      }
      const res = await response.json();
      if (res.status === "failed") {
        setportfolio([]);
      } else {
        setportfolio(res);
      }
    } catch (error) {
      console.error(error);
    }
  };
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
        <div className="flex justify-center">
          {console.log(coins)}
          <div className="bg-gradient-to-b from-blue-500 to-black py-4 px-6 rounded-lg w-full max-w-5xl mt-10">
            <h2 className="text-xl font-bold mb-4 text-center text-white">
              Portfolio
            </h2>
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-200 via-white to-blue  text-black">
                  <th className="py-2 px-4">Coin</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Buy Price</th>
                  <th className="py-2 px-4">Purchase Total</th>
                  <th className="py-2 px-4">Current Price</th>
                  <th className="py-2 px-4 ">
                    Profit/Loss(cp * qunt) - buyvalue
                  </th>
                </tr>
              </thead>
              <tbody>
                {portfolio.length === 0 ? (
                  <>
                    <tr>
                      <td
                        colSpan="6"
                        className="py-2 text-xl px-4 text-center text-white bg-slate-600"
                      >
                        No data
                      </td>
                    </tr>
                    {/* <td className="py-2 px-4 text-white">NO data</td>
        <td className="py-2 px-4 text-white">NO data</td>
        <td className="py-2 px-4 text-white">NO data</td>
        <td className="py-2 px-4 text-white">NO data</td>
        <td className="py-2 px-4 text-white">NO data</td>
        <td className="py-2 px-4 text-white">NO data</td> */}
                  </>
                ) : (
                  <>
                    {portfolio.map((item, index) => (
                      <tr
                        key={index}
                        className={
                          item.Quantity === 0 ? "bg-red-200" : "bg-blue-100"
                        }
                      >
                        {coins.map((coin) => {
                          if (coin.coinsyml == item.coinsyml) {
                            console.log(coin.price);
                            cp = coin.price;
                          }
                          dif = (
                            cp * item.Quantity -
                            item.buyPrice * item.Quantity
                          ).toFixed(2);
                          percentage = (
                            cp * item.Quantity -
                            item.buyPrice * item.Quantity * 1
                          ).toFixed(2);
                        })}


                        <td className="py-2 px-4 font-semibold">{item.coinsyml}</td>
                        <td className="py-2 px-4">{item.Quantity}</td>
                        <td className="py-2 px-4">{item.buyPrice}</td>
                        <td className="py-2 px-4">
                          {item.buyPrice * item.Quantity}
                        </td>

                        {/* <td className="py-2 px-4">${item.value}</td> */}
                        <td className="py-2 px-4">{cp}</td>
                        {/* {coins.map((coin)=>{
                          if(coin.coinsyml==item.coinsyml){
                            console.log(coin.price);
                            cp=coin.price

                          } 
                          dif=(cp * item.Quantity - item.buyPrice * item.Quantity).toFixed(2) 
                      percentage=((cp * item.Quantity )- (item.buyPrice * item.Quantity) * 1).toFixed(2) 

                          
                          
                          
                        })} */}
                        {/* <td className="py-2 px-4" id="profitLoss" >{(item.buyPrice * item.Quantity) - cp*item.Quantity } (cp * qunt) - buyvalue</td> */}
                        <td
                          className={`py-2 px-4  font-semibold ${
                            dif > 0 ? "text-green-500" : "text-red-700"
                          }`}
                          id="profitLoss"
                        >
                          {/* {dif=(cp * item.Quantity - item.buyPrice * item.Quantity).toFixed(2) 
                          } */}
                          {dif}({percentage}%)
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Accessdenied />
      )}
    </>
  );
}

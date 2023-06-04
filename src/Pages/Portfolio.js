import React, { useState, useEffect,useContext } from "react";
import DataContext from '../Context/dataContext';

export default function Portfolio() {
    const data = [
        {
          coinName: "Bitcoin",
          quantity: 2.5,
          buyPrice: 50000,
          purchaseTotal: 125000,
          currentPrice: 55000,
          profitLoss: 2500,
        },
        {
          coinName: "Ethereum",
          quantity: 10,
          buyPrice: 3000,
          purchaseTotal: 30000,
          currentPrice: 3500,
          profitLoss: 500,
        },
        {
          coinName: "Ethereum",
          quantity: 10,
          buyPrice: 3000,
          purchaseTotal: 30000,
          currentPrice: 3500,
          profitLoss: 500,
        },
        {
          coinName: "Ethereum",
          quantity: 10,
          buyPrice: 3000,
          purchaseTotal: 30000,
          currentPrice: 3500,
          profitLoss: 500,
        },
        // Add more data objects as needed
      ];
    
return(
    <div className="flex justify-center">
    <div className="bg-gradient-to-b from-blue-500 to-black py-4 px-6 rounded-lg w-full max-w-5xl mt-10">
      <h2 className="text-xl font-bold mb-4 text-center text-white">Portfolio</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-blue-200 via-white to-black text-gray-900" >
            <th className="py-2 px-4">Coin Name</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Buy Price</th>
            <th className="py-2 px-4">Purchase Total</th>
            <th className="py-2 px-4">Current Price</th>
            <th className="py-2 px-4 text-gray-400">Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-blue-100" : "bg-blue-50"}>
              <td className="py-2 px-4">{item.coinName}</td>
              <td className="py-2 px-4">{item.quantity}</td>
              <td className="py-2 px-4">{item.buyPrice}</td>
              <td className="py-2 px-4">{item.purchaseTotal}</td>
              <td className="py-2 px-4">{item.currentPrice}</td>
              <td className="py-2 px-4">{item.profitLoss}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)  

}
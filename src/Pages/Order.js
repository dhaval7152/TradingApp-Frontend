import React, { useState, useEffect,useContext } from "react";
import DataContext from '../Context/dataContext';

export default function Order() {
    const data=useContext(DataContext);
return(
        <div className="card flex justify-center  ">
            <div className="card-menu border-2 border-gray-400 p-14 mt-10 rounded-xl space-y-4">
                <h1>props.Bitcoin</h1>
                <h1>props.$28000</h1>
                <input type="number" className="bg-gray-100 rounded p-1 text-center" placeholder="Enter Amount"/>
                <div className="flex space-x-3">
                <button className="bg-blue-400 rounded p-1 mt-2">Buy</button>
                <button className="bg-yellow-400 rounded p-1 mt-2">Sell</button>
                </div>
            </div>
        </div>

    )

}
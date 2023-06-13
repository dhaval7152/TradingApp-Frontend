import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import { Link, useNavigate } from "react-router-dom";
export default function Admin() {
  const data = useContext(DataContext);
  const { host,username } = data;


  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");


  const [Stock, setStock] = useState({
      coinsyml:"NaN",
      CoinkName:"NaN",
      price:0,
      Quantity:0
})

  const handleOnchange = (e) => {
    setStock({...Stock,[e.target.name]:e.target.value})
  };
  const handleSubmit=()=>{
    addStock(Stock)
  }

  const addStock = async (data) => {
    console.log("🚀 --------------------------🚀")
    console.log("🚀 ~ addStock ~ data:", data)
    console.log("🚀 --------------------------🚀")
    const response = await fetch(`${host}/listStock`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if(res.status==="fail"){
      seterror(res.message)
      setTimeout(() => {
        seterror("")
      }, 5000);
    }
    else{
      setsuccess(res.message)
      setTimeout(() => {
        setsuccess("")

      }, 3000);
    }


    console.log("🚀 ------------------------🚀")
    console.log("🚀 ~ addStock ~ res:", res)
    console.log("🚀 ------------------------🚀")
    
  };

  return (
    
    <>
      <div class="w-full h-[75%] overflow-scroll  bg-gradient-to-r from-blue-100 via-blue-100 to-pink-100 p-4 flex items-center justify-center">
        <div class="bg-white py-6 px-10 sm:max-w-md w-full rounded-lg">
          <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
            List Stock
    
          <h1 className="text-red-200 text-lg text-center">{error}</h1>
          <h1 className="text-green-300 text-lg text-center">{success}</h1>
          </div>
          <div class="">
            <div>
              <input
                type="text"
                name="coinsyml"
                id="coinsyml"
                onChange={handleOnchange}
                class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
                placeholder="Enter Coin Symbol "
              />
            </div>
            <div>
              <input
                type="email"
                name="CoinkName"
                id="CoinkName"
                onChange={handleOnchange}
                class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
                placeholder="Enter Coin Name"
              />
            </div>
            <div>
              <input
                type="number"
                name="price"
                id="price"
                onChange={handleOnchange}
                min={0}
                class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
                placeholder="Enter Coin Price "
              />
            </div>
            <div>
              <input
                type="number"
                name="Quantity"
                id="Quantity"
                onChange={handleOnchange}
                min={0}
                class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
                placeholder="Enter Quantity "
              />
            </div>

            <div class="flex justify-center my-1">
              <button class=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold "
              onClick={handleSubmit}>
                Add Stock
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

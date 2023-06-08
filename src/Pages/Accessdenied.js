import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import { useNavigate } from "react-router-dom";
import warninImg from "../Pages/warning.png";
export default function Accessdenied() {
  const data = useContext(DataContext);
  const navigate = useNavigate();

  return (

    <>
      <div className=" bg-[#5781e3] w-screen h-screen flex flex-row">
        <div className=" flex w-1/2 items-center justify-center flex-col">
          <div className="text-white font-poppins text-3xl px-20 font-semibold">
            Please Login/Register
          </div>
          <div className="text-white font-poppins mt-3 text-md font-light">
            to access this page
          </div>
          <div className="text-white font-poppins text-md font-light">
            Something Went Wrong :)
          </div>
          <button onClick={()=>navigate("/register")} className="px-10 rounded-lg bg-blue-600 hover:bg-blue-500 hover:text-white cursor-pointer w-1/3 py-3 items-center justify-center mt-4 text-slate-200 font-bold">
            SignUp
          </button>
        </div>
        <div className="flex w-1/2 items-center justify-center">
          <img src={warninImg} className=" h-1/2" />
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import { useNavigate } from "react-router-dom";

export default function ViewStocks() {
  document.title = "view Stocks";
  const data = useContext(DataContext);
  const navigate=useNavigate();
  return (
    <>
      <div class="flex items-center justify-center flex-col bg-[#E5E5E5] min-h-screen">
        {/* <!-- main card --> */}
        <div class="bg-[#F4F5FA] p-10 rounded-xl w-[70rem]">
          {/* <!-- headers content--> */}
          <div class="flex flex-col justify-center items-center text-center">
            <div class="max-w-sm font-bold font-sans">Markets Overview</div>
            <div class="font-light max-w-lg mt-5 text-sm">
              All price information is in USD
            </div>
          </div>

          {/* <!-- subscriptions --> */}
          <div class="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
            <div class="bg-[#FFFBEC] rounded-xl">
              <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ice_logo.svg/138px-Ice_logo.svg.png?20191213230535" class="w-8"/> */}
                <div class="mt-3 font-semibold text-lg">Bitcoin</div>
                <div class="text-sm font-light">#btc</div>
                <div class="my-4">
                  <span class="font-light text-sm">$28000</span>
                </div>

                <div className="flex">
                  <button class="bg-[#F4F5FA] px-4 py-3 rounded-full hover:bg-[#6bd24b]  border border-[#F0F0F6] shadow-xl mt-4">
                    Buy
                  </button>
                  <button class="bg-[#F4F5FA] px-4 py-3 rounded-full hover:bg-[#e85050] border border-[#F0F0F6] shadow-xl mt-4">
                    sell
                  </button>
                </div>
              </div>
            </div>

            <div class="bg-[#F9ECFF] rounded-xl">
              <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                {/* <img src="https://www.dstny.se/app/uploads/telia_pp_rgb.png.webp" class="w-12"/> */}
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
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Telenor_Logo.svg/1600px-Telenor_Logo.svg.png" class="w-12"/> */}
                <div class="mt-3 font-semibold text-lg">BNB</div>
                <div class="text-sm font-light w-60 md:w-auto">
                  bnb
                </div>
                <div class="my-4">
                  <span class="font-light text-sm">$304</span>
                </div>

                <div className="flex">
                  <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border hover:bg-[#6bd24b] border-[#F0F0F6] shadow-xl mt-4">
                    Buy
                  </button>
                  <button class="bg-[#F4F5FA] px-4 py-3 rounded-full  border hover:bg-[#e85050] border-[#F0F0F6] shadow-xl mt-4">
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
      </div>
    </>
  );
}

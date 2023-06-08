import React, { useContext, useState } from "react";
import { FaWallet } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";
import DataContext from "../Context/dataContext";

function Navbar() {
  const navigate = useNavigate();
  const data = useContext(DataContext);
  const { url, checkLoggedIn, username } = data;
  console.log(username);

  const handleLogOut = () => {
    const storage = localStorage.getItem("auth-token");
    if (storage) {
      localStorage.removeItem("auth-token");
      localStorage.removeItem("username");
    }
    window.location.reload();
    navigate("/login");
  };
  return (
    <>
      <nav className="flex  bg-blue-200 z-50 w-full h-fit justify-between items-center py-4 navbar backdrop-filter backdrop-blur-lg bg-opacity-40">
        <div className="flex w-fit flex-row ml-10 cursor-pointer select-none">
          <h3
            onClick={() => navigate("/")}
            className=" flex items-center justify-center ps-2 font-bold text-2xl font-poppins bg-clip-text text-transparent bg-gradient-to-r from-[#286cd2] to-[#bcbc55]"
          >
            TradePro
          </h3>
        </div>
        <div className="flex flex-row">
          <ul className="list-none sm:flex flex-1 hidden justify-end items-center space-x-6">
            <Link
              to="/"
              className="font-poppins font-normal cursor-pointer text-[16px] text-slate-400 hover:text-white "
            >
              {" "}
              Home
            </Link>

            <Link
              to="/viewStocks"
              className="font-poppins font-normal cursor-pointer text-[16px] text-slate-400 hover:text-white"
            >
              {" "}
              Markets
            </Link>

            <div class="relative inline-block group">
              <button class="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                <span>Menu</span>
                <svg class="fill-current h-4 w-4 ml-2" viewBox="0 0 20 20">
                  <path d="M6 8l4 4 4-4z" />
                </svg>
              </button>

              <ul class="w-64 text-center absolute hidden text-gray-700 pt-1 group-hover:block">
                <li>
                  <Link
                    to={"/viewStocks"}
                    class="rounded-t  bg-gray-300 hover:bg-slate-300 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Market Overview
                  </Link>
                </li>
                <li>
                  {/* <Link
                    to="/LimitOrder"

                    class="bg-white  hover:bg-slate-300 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Limit Order
                  </Link> */}
                </li>
                {/* <li>
                  <Link
                   to="/viewStocks"

                    class="rounded-b bg-white  hover:bg-slate-300 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Sell
                  </Link>
                </li> */}
              </ul>
            </div>
            <button
              onClick={() => navigate("/Wallet")}
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              <FaWallet className="mr-2" />
              Wallet
            </button>

            <Link
              to="#"
              className="font-poppins font-normal cursor-pointer text-[16px] text-slate-400 hover:text-white"
            >
              {" "}
            </Link>

            {username == "User" ? (
              <Link
                to="/login"
                className={`${
                  username == "User" ? "visible" : "invisible"
                } font-poppins font-normal cursor-pointer text-[16px] text-slate-400 hover:text-white`}
              >
                {" "}
                Sign In
              </Link>
            ) : (
              <button
                onClick={() => handleLogOut()}
                className="text-white font-poppins p-2 w-[40px] ml-5 mr-10 rounded-lg bg-gradient-to-r from-[#e48686] via-[#de445d] to-[#f53252] hover:from-[#7590d3] hover:via-[#0095e4] hover:to-[#708bcd]"
              >
                <AiOutlineLogout className="mr-2" />
              </button>
            )}
          </ul>
          {username == "User" ? (
            <button
              onClick={() => navigate("/register")}
              className="text-white font-poppins h-[41px] w-[80px] mt-1 ml-5 mr-10 rounded-lg bg-gradient-to-r from-[#4d70da] via-[#0082c8] to-[#7195ef] hover:from-[#7590d3] hover:via-[#0095e4] hover:to-[#708bcd]"
            >
              {username == "User" ? "Sign Up" : username}
            </button>
          ) : (
            <button
              className="text-white font-poppins h-[41px] w-fit p-2 mt-1 ml-5 mr-10 rounded-lg bg-gradient-to-r from-[#4d70da] via-[#0082c8] to-[#7195ef] hover:from-[#7590d3] hover:via-[#0095e4] hover:to-[#708bcd]"
            >
              {username}
            </button>
          )}

          <div class="relative inline-block group pr-8 py-2">
            <button class="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              <FaUserCircle className="text-white h-4 w-4" />
              <svg class="fill-current h-4 w-4 ml-2" viewBox="0 0 20 20">
                <path d="M6 8l4 4 4-4z" />
              </svg>
            </button>

            <ul class="bg-gray-300 text-center absolute hidden text-gray-700 pt-1 group-hover:block">
              <li>
                <Link
                  to={"/updateProfile"}
                  class="rounded-t   hover:bg-slate-300  block whitespace-no-wrap"
                  href="#"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  to={"/portfolio"}
                  class="bg-white  hover:bg-slate-300 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  class="rounded-b bg-white  hover:bg-slate-300 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                ></Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="flex flex-1 sm:hidden justify-end items-center">
          <div
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? (
              <IoMdClose className="text-white" />
            ) : (
              <HiOutlineMenuAlt2 className="text-white" />
            )}
          </div>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 rounded-xl sidebar min-w-[140px]`}
          >
            <ul className="list-none flex flex-1 flex-col justify-end items-center">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                    index === nav.length - 1 ? "mb-0" : "mb-4"
                  } `}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </nav>
    </>
  );
}

export default Navbar;

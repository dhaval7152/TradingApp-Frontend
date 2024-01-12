import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import { Link, useNavigate } from "react-router-dom";
import env from "../env";

export default function Register() {
  const data = useContext(DataContext);
  const {host, Register, setRegister,signup,checkLoggedIn,userData} = data;
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const checkAuth = () => {
  //   {
  //     userData.user ? navigate("/") : navigate("/register");
  //   }
  // };
  useEffect(() => {
    // checkLoggedIn();
    // checkAuth();
  }, []);

  const handleOnchange=(e)=>{
    setRegister({...Register,[e.target.name]:e.target.value});
  }
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    signup()
    registerApi(Register.username,Register.password,Register.email)
    // console.log(Register.username,Register.email,Register.password);

  }


  const registerApi=async(username,password,email)=>{
    console.log("calling registerApi");
      const response = await fetch(`${host}/registerUser`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        // Provide all values to registerUser
        body: JSON.stringify({username,email, password}),
      });
      const res=await response.json()
      if (res.status === "fail") {
        // setUsernameError(res.message);
        // console.log(res.message);
        setPasswordError(res.message);

      } else {
        alert("Account Created!")
      }

      if(res.username){
        navigate('/login')
      }
      
      
    };


  return (
    <>

      <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div
          class="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
        >
          <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
            Join us Now
          </div>
          <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
            Enter your credentials to get access account
          </div>

          <div class="mt-10">
          <p className="text-sm  text-red-300">{passwordError}</p>

            <form>
              <div class="flex flex-col mb-5">
                <label
                  for="email"
                  class="mb-1 text-xs tracking-wide text-gray-600"
                >
                  Username:
                </label>
                <div class="relative">
                  <div
                    class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  >
                    <i class="fas fa-user text-blue-500"></i>
                  </div>

                  <input
              type="text"
              id="username"
              name="username"
              onChange={handleOnchange}
              placeholder="Email or Username"
              class="text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400"
              />
               
                </div>
              </div>
              <div class="flex flex-col mb-5">
                <label
                  for="email"
                  class="mb-1 text-xs tracking-wide text-gray-600"
                >
                  E-Mail Address:
                </label>
                <div class="relative">
                  <div
                    class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  >
                    <i class="fas fa-at text-blue-500"></i>
                  </div>


                  <input
              type="email"
              id="email"
              name="email"
              onChange={handleOnchange}
              placeholder="Enter your email"
              class="text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400"
            />

                 
                </div>
              </div>
              <div class="flex flex-col mb-6">
                <label
                  for="password"
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password:
                </label>
                <div class="relative">
                  <div
                    class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  >
                    <span>
                      <i class="fas fa-lock text-blue-500"></i>
                    </span>
                  </div>

                  <input
              type="password"
              id="password"
              name="password"
              onChange={handleOnchange}
              placeholder="Enter your Password"
              // onKeyUp={handleOnSubmit}
              class="text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400"
            />
                 
                </div>

              </div>

              <div class="flex w-full">
                <button
                  type="submit"
                  onClick={handleOnSubmit}
                  class="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                >
                  <span class="mr-2 uppercase">Sign Up</span>
                  <span>
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex justify-center items-center mt-6">
          <a
            href="#"
            target="_blank"
            class="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
          >
            <span class="ml-2">
              You have an account?
              <Link href="#" class="text-xs ml-2 text-blue-500 font-semibold" to={"/login"}>
                Login here
              </Link>
            </span>
          </a>
        </div>
      </div>

    </>
  );
}

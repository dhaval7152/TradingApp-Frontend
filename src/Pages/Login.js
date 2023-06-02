import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import { Link } from "react-router-dom";

export default function Login() {
  const data = useContext(DataContext);
  return (
    <>
      <main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section class="flex w-[30rem] flex-col space-y-10">
          <div class="text-center text-4xl font-medium">Log In</div>

          <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Email or Username"
              class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              placeholder="Password"
              class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <button class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
            LOG IN
          </button>

          <a
            href="#"
            class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
          >
            FORGOT PASSWORD?
          </a>

          <p class="text-center font-medium text-lg">
            No account?
            <Link
              to="/register"
              class="font-medium text-indigo-500 underline-offset-4 hover:underline"
            >
              Create One
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}

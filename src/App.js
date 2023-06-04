import "./App.css";
import { useEffect } from "react";
import DataState from "./Context/dataState";
import env from "./env";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ViewStock   from "./Pages/ViewStock";
import Order from "./Pages/Order";
import Wallet from "./Pages/Wallet";
import Portfolio from "./Pages/Portfolio";
import MyProfile from "./Pages/MyProfile";
function App() {
  
  
  return (
    <>

      <DataState>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
          <Routes>
            <Route path="/register" element={<Register/>} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Login/>} />
          </Routes>
          <Routes>
            <Route path="/viewStocks" element={<ViewStock/>} />
          </Routes>
          <Routes>
            <Route path="/order" element={<Order/>} />
          </Routes>
          <Routes>
            <Route path="/Wallet" element={<Wallet/>} />
          </Routes>
          <Routes>
            <Route path="/portfolio" element={<Portfolio/>} />
          </Routes>
          <Routes>
            <Route path="/updateProfile" element={<MyProfile/>} />
          </Routes>
        </BrowserRouter>
      </DataState>
    </>
  );
}

export default App;

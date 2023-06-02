// import "./App.css";
import DataState from "./Context/dataState";
import env from "./env";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ViewStocks from "./Pages/ViewStock";
import Order from "./Pages/Order";
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
            <Route path="/viewStocks" element={<ViewStocks/>} />
          </Routes>
          <Routes>
            <Route path="/order" element={<Order/>} />
          </Routes>
        </BrowserRouter>
      </DataState>
    </>
  );
}

export default App;

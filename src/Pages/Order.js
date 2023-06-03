import { useState, useContext,useEffect } from "react";
import DataContext from "../Context/dataContext";

const BuySellPage = () => {
  const data = useContext(DataContext);
  const { host, coin,username } = data;


    console.log(username);
  
  const [usdtAmount, setUsdtAmount] = useState("");
  const [quntity, setQuntity] = useState(0)

  const calculateQuantity = () => {
    // Improve this bcz it only set values when coin buy click
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    buyStockApi({username,coinsyml:coin.coinsyml,Amount:usdtAmount})
    // console.log({username,coinsyml:coin.coinsyml,usdtAmount});
  };

  const handleBuy = (e) => {
      e.preventDefault();
    console.log("🚀 -------------------------------------🚀")
    console.log("🚀 ~ handleBuy ~ handleBuy:", handleBuy)
    console.log("🚀 -------------------------------------🚀")
    buyStockApi({username,coinsyml:coin.coinsyml,Amount:usdtAmount})
    // console.log({username,coinsyml:coin.coinsyml,usdtAmount});
  };
  const handleSell = (e) => {
    console.log("🚀 ----------------------------------------🚀")
    console.log("🚀 ~ handleSell ~ handleSell:", handleSell)
    console.log("🚀 ----------------------------------------🚀")
    e.preventDefault();
    sellStockApi({username,coinsyml:coin.coinsyml,Amount:usdtAmount})
  };

  const handleAmountChange = (e) => {
    setUsdtAmount(e.target.value);
    setQuntity(e.target.value / coin.price )
  };

  const buyStockApi=async(data)=>{
    console.log("calling loginApi");
      const response = await fetch(`${host}/buyStock`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        // Provide all values to registerUser
        body: JSON.stringify(data),
      });
      const res=await response.json();
      console.log("🚀 -------------------🚀")
      console.log("🚀 ~ buy ~ res:", res)
      console.log("🚀 -------------------🚀")
     

    //   if (res.status === "fail") {
    //     setUsernameError(res.message);
    //     setPasswordError(res.message);

    //   } else {
    //     setUserData(res);
    //     localStorage.setItem("auth-token", res.token);
    //     navigate("/");
    //   }
    };
  const sellStockApi=async(data)=>{
    console.log("calling loginApi");
      const response = await fetch(`${host}/sellStock`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        // Provide all values to registerUser
        body: JSON.stringify(data),
      });
      const res=await response.json();
      console.log("🚀 -------------------🚀")
      console.log("🚀 ~ buy ~ res:", res)
      console.log("🚀 -------------------🚀")
     

      if (res.status === "failed") {
        alert(res.message)
        // setUsernameError(res.message);
        // setPasswordError(res.message);

      } else {
        alert("sold")
        // setUserData(res);
        // localStorage.setItem("auth-token", res.token);
        // navigate("/");
      }
    };

  if (!coin) {
    return <div>No coin details found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{coin.CoinkName} Details</h2>
      
      <form  className="max-w-md mx-auto">
        <label htmlFor="usdtAmount" className="block mb-2">
          USDT Amount:
        </label>
        <input
          type="number"
          id="usdtAmount"
          value={usdtAmount}
          onChange={handleAmountChange}
          className="border border-gray-300 rounded p-2 mb-4 w-full"
        />
        <p className="mb-4">Quantity: {quntity}</p>
        <button
          type="submit"
          onClick={handleBuy}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Buy
        </button>
        <button
          type="submit"
          onClick={handleSell}
          className="ml-10 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Sell
        </button>
      </form>
    </div>
  );
};

export default BuySellPage;

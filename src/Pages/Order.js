import { useState, useContext, useEffect } from "react";
import DataContext from "../Context/dataContext";
import Accessdenied from "./Accessdenied";

const BuySellPage = () => {
  const data = useContext(DataContext);
  const { host, coin, username, userData } = data;
  const [coinSYML, setcoinSYML] = useState("");
  const [balance, setBalance] = useState(0);
  const [newFunds, setNewFunds] = useState(0);

  const [usdtAmount, setUsdtAmount] = useState("");
  const [quntity, setQuntity] = useState(0);
  const [error, seterror] = useState("");
  const [success, setsuccess] = useState("");
  const [count, setCount] = useState("");

  useEffect(() => {
    const data = window.localStorage.getItem("username");
    getUserBalAPi({ username: data });

    // checkLoggedIn()
    // window.localStorage.setItem('coin',JSON.stringify(coin))
    const coindata = window.localStorage.getItem("coinsyml");
    setcoinSYML(coindata);
    console.log("Rendering", coin);

    console.log("Rendering Order useEffect", count);
    // }, [coin]);
  }, [count]);

  const calculateQuantity = () => {
    // Improve this bcz it only set values when coin buy click
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSuggestionClick = (percentage) => {
    setNewFunds(balance * (percentage / 100));
    setUsdtAmount(balance * (percentage / 100))
    console.log(balance * (percentage / 100));
  };

  const handleBuy = (e) => {
    e.preventDefault();
    console.log("🚀 -------------------------------------🚀");
    console.log("🚀 ~ handleBuy ~ handleBuy:", handleBuy);
    console.log("🚀 -------------------------------------🚀");
    buyStockApi({ username, coinsyml: coin.coinsyml, Amount: usdtAmount });
    console.log({ username, coinsyml: coin.coinsyml, usdtAmount });
    setCount("Buy");
  };
  const handleSell = (e) => {
    console.log("🚀 ----------------------------------------🚀");
    console.log("🚀 ~ handleSell ~ handleSell:", handleSell);
    console.log("🚀 ----------------------------------------🚀");
    e.preventDefault();
    sellStockApi({ username, coinsyml: coin.coinsyml, Amount: usdtAmount });
    setCount("Sell");
  };

  const handleAmountChange = (e) => {
    setUsdtAmount(e.target.value);
    setQuntity(e.target.value / coin.price);
  };

  const buyStockApi = async (data) => {
    console.log("calling buyStockApi");
    const response = await fetch(`${host}/buyStock`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Provide all values to registerUser
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log("🚀 -------------------🚀");
    console.log("🚀 ~ buyStockApi ~ res:", res);
    console.log("🚀 -------------------🚀");

    if (res.status === "failed") {
      seterror(res.message);
    } 
    else if(res.status==="success") {
      seterror("");
      setsuccess(res.message);
      setTimeout(() => {
        setsuccess("");
      }, 3000);
      // alert("BUyed")
      // setUserData(res);
      // localStorage.setItem("auth-token", res.token);
      // navigate("/");
    }
  };
  const sellStockApi = async (data) => {
    console.log("sellStockApi", data);
    console.log("calling loginApi");
    const response = await fetch(`${host}/sellStock`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Provide all values to registerUser
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log("🚀 -------------------🚀");
    console.log("🚀 ~ sellStockApi ~ res:", res);
    console.log("🚀 -------------------🚀");

    if (res.status === "failed") {
      seterror(res.message);
      // alert(res.message)
    } else {
      seterror("");
      setsuccess(res.message);
      setTimeout(() => {
        setsuccess("");
      }, 3000);
      // alert("sold");
    }
  };

  const getUserBalAPi = async (data) => {
    console.log("🚀 ~ getUserBalAPi ~ getUserBalAPi:");
    try {
      const response = await fetch(`${host}/getUserBalance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status === "failed") {
        alert(response.message);
      }
      const res = await response.json();
      console.log("🚀 -------------------------------🚀");
      console.log("🚀 ~ getUserBalAPi ~ data:", res);
      console.log("🚀 -------------------------------🚀");
      setBalance(res.balance);
    } catch (error) {
      console.error(error);
    }
  };

  if (coinSYML == null) {
    return <h1 class="text-red-700 text-4xl">No coin details found.</h1>;
  }

  return (
    <>
      {userData.user ? (
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">{coinSYML} Details</h2>

          <h3 className="text-red-700 font-bold text-center">{error}</h3>
          <h3 className="text-green-700 font-bold text-center">{success}</h3>
          <form className="max-w-md mx-auto">
            <label htmlFor="usdtAmount" className="block mb-2">
              USDT Amount:
            </label>
            <input
              type="number"
              id="usdtAmount"
              value={usdtAmount}
              min={0}
              onChange={handleAmountChange}
              className="border border-gray-300 rounded p-2 mb-4 w-full"
            />
            <h4>Available Balance:{balance}</h4>
            <p className="mb-4">Quantity: {quntity}</p>
            <div className="flex justify-between w-full mb-3">
              <button
                onClick={() => handleSuggestionClick(25)}
                type="button"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2"
              >
                25%
              </button>
              <button
                onClick={() => handleSuggestionClick(50)}
                type="button"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2"
              >
                50%
              </button>
              <button
                onClick={() => handleSuggestionClick(100)}
                type="button"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
              >
                100%
              </button>
            </div>
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
      ) : (
        <Accessdenied />
      )}
    </>
  );
};

export default BuySellPage;

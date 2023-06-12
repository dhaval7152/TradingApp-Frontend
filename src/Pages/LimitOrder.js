import { useState, useContext, useEffect } from "react";
import DataContext from "../Context/dataContext";
import Accessdenied from "./Accessdenied";

const LimitOrder = () => {
  const data = useContext(DataContext);
  const { host, coin, userData, username } = data;
  const [coinSYML, setcoinSYML] = useState("");

  const [usdtAmount, setUsdtAmount] = useState("");
  const [Quantity, setQuntity] = useState(0);
  const [error, seterror] = useState("");
  // const [username, setUsername] = useState("")
  const [price, setPrice] = useState(0);

  const [order, setOrder] = useState({
    price: 0,
    Quantity: 0,
    usdtAmount: 0,
  });

  const [Ask, setAsk] = useState([]);
  const [Bid, setBid] = useState([]);
  const [count, setCount] = useState("");

  const [success, setsuccess] = useState("");

  useEffect(() => {
    const coindata = window.localStorage.getItem("coinsyml");
    const username = window.localStorage.getItem("username");
    setcoinSYML(coindata);
    askBid({ coinsyml: coindata });
    viewAsk({ coinsyml: coindata }); //empty data return check
    viewBid({ coinsyml: coindata });

    console.log("viewAsk useEffect", { coinsyml: coindata });
    console.log("viewBid useEffect", { coinsyml: coindata });

    console.log("🚀 ~Re-rendring useEffect", count);
    // setUsername(username)
    // }, [coin,Ask,Bid]);
  }, [count]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBuy = (e) => {
    e.preventDefault();

    insertBid({
      username: username,
      orderType: "Bid",
      coinsyml: coinSYML,
      price: order.price,
      Quantity: order.Quantity,
    });
    setCount("hit Buy");
  };
  const handleSell = (e) => {
    e.preventDefault();

    insertAsk({
      username: username,
      orderType: "Ask",
      coinsyml: coinSYML,
      price: order.price,
      Quantity: order.Quantity,
    });
    setCount("hit Sell");
  };

  const askBid = async (data) => {
    console.log("react askbid:", data);
    viewAsk({ coinsyml: coinSYML }); //empty data return check
    viewBid({ coinsyml: coinSYML });

    setCount("hit askBid"); //useEffect hit

    const response = await fetch(`${host}/askBid`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    viewAsk({ coinsyml: coinSYML }); //empty data return check
    viewBid({ coinsyml: coinSYML });
    console.log("viewAsk askBid", { coinsyml: coinSYML });
    console.log("viewBid askBid", { coinsyml: coinSYML });

    console.log("🚀 askBid----------------------🚀");
    console.log("🚀 ~ askBid ~ res:", res);
    console.log("🚀 askBid----------------------🚀");

    if (res.status === "fail") {
      if (res.message === "Ask And Bid data not Found") {
        console.log("Ask And Bid data not Found");
      } else {
        seterror(res.message);
      }
      setTimeout(() => {
        seterror("");
      }, 5000);
    } else if (res.status === "success") {
      setsuccess("Order Completed");
      setTimeout(() => {
        setsuccess("");
      }, 3500);
    }

    // updatePrice(price.newPrice)
    console.log("calling Askbid");
  };

  const handleOnchange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const insertBid = async (data) => {
    const response = await fetch(`${host}/limitOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();

    console.log("🚀 ~ insertBid ~ res:", res);
  };
  const insertAsk = async (data) => {
    const response = await fetch(`${host}/limitOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if (res.status === "fail") {
      seterror(res.message);
    }
  };

  const viewAsk = async (data) => {
    // will take coin name with params

    try {
      const response = await fetch(`${host}/viewAsk`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const res = await response.json();
      console.log(res);
      setAsk(res);
    } catch (error) {
      console.error(error);
    }
  };
  const viewBid = async (data) => {
    // will take coin name with params

    try {
      const response = await fetch(`${host}/viewBid`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const res = await response.json();
      setBid(res);
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
        <div className="flex flex-col bg-blue-100">
          <div className="flex flex-row justify-center items-center">
            <div className="container mx-auto p-4">
              <h2 className="text-2xl font-bold mb-4 text-center">
                {coinSYML} Limit Order
              </h2>
              <h3 className="text-red-500 font-bold text-center ">{error}</h3>
             
              <h3 className="text-green-700 font-bold text-center">
                {success}
              </h3>
              <form className="max-w-md mx-auto">
                <label htmlFor="usdtAmount" className="block mb-2">
                  Buy/Sell Price:
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  min={0}
                  onChange={handleOnchange}
                  className="border border-gray-300 rounded p-2 mb-4 w-full"
                />
                <label htmlFor="usdtAmount" className="block mb-2">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="Quantity"
                  name="Quantity"
                  min={0}
                  onChange={handleOnchange}
                  className="border border-gray-300 rounded p-2 mb-4 w-full"
                />
                {/* <label htmlFor="usdtAmount" className="block mb-2">
          USDT Amount:
          </label>
          <input
            type="number"
            id="usdtAmount"
            name="usdtAmount"
            onChange={handleOnchange}
            className="border border-gray-300 rounded p-2 mb-4 w-full"
          /> */}
                <button
                  onClick={handleBuy}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  Buy
                </button>
                <button
                  onClick={handleSell}
                  className="ml-10 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Sell
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center space-x-32">
            <div className="Ask flex flex-col p-4 mt-2 rounded-lg h-60 overflow-auto bg-gradient-to-b from-red-400 to-red-600  w-1/7 max-w-5xl ">
              <table >
                <thead>
                  <th>User</th>
                  <th>Price</th>
                  <th>Amount</th>
                </thead>
                <tbody className="text-lg border-t-2 border-gray-50">
                  {Ask.map((item) => (
                    <>
                      <tr key={item.price} className="border-t-2 mb-2">
                        <td class="pr-6">{item.username}</td>
                        <td>{item.price}</td>
                        <td>{item.Quantity}</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="Bid flex flex-col bg-green-500 p-4 mt-2 rounded-lg h-60 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300">
              <table className="">
                <thead>
                  <th>User </th>
                  <th>Price</th>
                  <th>Amount</th>
                </thead>
                <tbody className="text-lg border border-gray-100">
                  {Bid.map((item) => (
                    <>
                      <tr
                        key={item.price}
                        className="border-b-2  border-slate-300"
                      >
                        <td class="pr-6">{item.username} </td>
                        <td>{item.price}</td>
                        <td>{item.Quantity}</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <Accessdenied />
      )}
    </>
  );
};

export default LimitOrder;

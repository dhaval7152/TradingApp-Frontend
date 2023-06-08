import { useState, useContext, useEffect } from "react";
import DataContext from "../Context/dataContext";
import Accessdenied from "./Accessdenied";

const LimitOrder = () => {
  const data = useContext(DataContext);
  const { host, coin, userrData, username } = data;
  const [coinSYML, setcoinSYML] = useState("");

  const [usdtAmount, setUsdtAmount] = useState("");
  const [Quantity, setQuntity] = useState(0);
  // const [username, setUsername] = useState("")
  const [price, setPrice] = useState(0);

  const [order, setOrder] = useState({
    price: 0,
    Quantity: 0,
    usdtAmount: 0,
  });

  const [Ask, setAsk] = useState([]);
  const [Bid, setBid] = useState([]);

  useEffect(() => {
    // checkLoggedIn()
    // window.localStorage.setItem('coin',JSON.stringify(coin))
    const coindata = window.localStorage.getItem("coinsyml");
    const username = window.localStorage.getItem("username");
    setcoinSYML(coindata);
    viewAsk()
    viewBid()
    // setUsername(username)
  }, [coin,Ask,Bid]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBuy = (e) => {
    e.preventDefault();
    console.log("🚀 -------------------------------------🚀");
    console.log("🚀 ~ handleBuy ~ handleBuy:", handleBuy);
    console.log("🚀 -------------------------------------🚀");
    console.log(order);
    insertBid({
      orderType: "Bid",
      coinsyml: coinSYML,
      price: order.price,
      Quantity: order.Quantity,
    });
  };
  const handleSell = (e) => {
    e.preventDefault();
    console.log("🚀 ----------------------------------------🚀");
    console.log("🚀 ~ handleSell ~ handleSell:", handleSell);
    console.log("🚀 ----------------------------------------🚀");
    console.log(order);
    insertAsk({
      orderType: "Ask",
      coinsyml: coinSYML,
      price: order.price,
      Quantity: order.Quantity,
    });
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
    const price = await response.json();
    console.log("🚀 -----------------------------🚀");
    console.log("🚀 ~ insertBid ~ price:", price);
    console.log("🚀 -----------------------------🚀");
  };
  const insertAsk = async (data) => {
    const response = await fetch(`${host}/limitOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const price = await response.json();
    console.log("🚀 -----------------------------🚀");
    console.log("🚀 ~ insertAsk ~ price:", price);
    console.log("🚀 -----------------------------🚀");
  };

  const viewAsk=async(data)=>{
    try {
      const response = await fetch(`${host}/viewAsk`,{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setAsk(data);

    } catch (error) {
      console.error(error);
    }
  };
  const viewBid=async(data)=>{
    try {
      const response = await fetch(`${host}/viewBid`,{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setBid(data);

    } catch (error) {
      console.error(error);
    }
  };


  if (coinSYML == null) {
    return <h1 class="text-red-700 text-4xl">No coin details found.</h1>;
  }

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col bg-red-400 p-4 mt-2 rounded-lg h-fit">
         
         <table>
          <thead>
            <th>Price</th>
            <th>Amount</th>
          </thead>
          <tbody className="text-lg">
            {
            Ask.map((item)=>(
              <>
              <tr>
              <td>{item.price}</td>
              <td>{item.Quantity}</td>
              </tr>
              </>
            ))}
          </tbody>
         </table>
        </div>
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {coinSYML} Details
          </h2>

          <form className="max-w-md mx-auto">
            <label htmlFor="usdtAmount" className="block mb-2">
              Buy/Sell Price:
            </label>
            <input
              type="number"
              id="usdtAmount"
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
        <div className="flex flex-col bg-green-400 p-4 mt-2 rounded-lg h-fit">
         
         <table>
          <thead>
            <th>Price</th>
            <th>Amount</th>
          </thead>
          <tbody className="text-lg">
            {
            Bid.map((item)=>(
              <>
              <tr>
              <td>{item.price}</td>
              <td>{item.Quantity}</td>
              </tr>
              </>
            ))}
          </tbody>
         
         </table>
        </div>
      </div>
    </>
  );
};

export default LimitOrder;

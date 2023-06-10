import { useState, useContext, useEffect } from "react";
import DataContext from "../Context/dataContext";
import { useNavigate } from "react-router-dom";
import Accessdenied from "./Accessdenied";

const WalletPage = () => {
  const data = useContext(DataContext);
  const { host, username, userData } = data;
 
  const [usr, setusr] = useState("")
  const [balance, setBalance] = useState(0);
  const [newFunds, setNewFunds] = useState(0);
  const [upi, setUPI] = useState("");

  
  const navigate = useNavigate();


  useEffect(() => {
    const data=window.localStorage.getItem('username')
    setusr(data)
    getUserBalAPi({username:usr})
    console.log("Wallet useEffect");
  }, [balance,upi,newFunds,usr]);


  const handleAddFunds = () => {
    depositApi({ username, amount: newFunds });
    // console.log({username,newFunds});
    // console.log(typeof newFunds);
  };

  const handleWithdrawFunds = () => {
    withdrawApi({ username, amount: newFunds });
  };

  const handleSuggestionClick = (amount) => {
    setNewFunds(amount);
  };

  const depositApi = async (data) => {
    console.log("calling depositApi");
    const response = await fetch(`${host}/deposit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log("🚀 -------------------------🚀");
    console.log("🚀 ~ depostApi ~ res:", res);
    console.log("🚀 -------------------------🚀");

    if (res.status === "failed") {
      alert(res.message);

      // setUsernameError(res.message);
      // setPasswordError(res.message);
    } else {
      alert(res.status);
      setBalance(balance +newFunds)

      // setUserData(res);
      // localStorage.setItem("auth-token", res.token);
      // navigate("/");
    }
  };
  const withdrawApi = async (data) => {
    console.log("calling withdrawApi");
    const response = await fetch(`${host}/withdraw`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log("🚀 -------------------------🚀");
    console.log("🚀 ~ depostApi ~ res:", res);
    console.log("🚀 -------------------------🚀");

    if (res.status === "failed") {
      alert(res.message);

      // setUsernameError(res.message);
      // setPasswordError(res.message);
    } else {
      alert(res.status);
      setBalance(balance  - newFunds)

      // setUserData(res);
      // localStorage.setItem("auth-token", res.token);
      // navigate("/");
    }
  };

  const getUserBalAPi=async(data)=>{

    console.log("🚀 ~ getUserBalAPi ~ getUserBalAPi:")
      try {
        const response = await fetch(`${host}/getUserBalance`,{
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),

        });
        if (response.status=="failed") {
          alert(response.message)
        }
        const res = await response.json();
        console.log("🚀 -------------------------------🚀")
        console.log("🚀 ~ getUserBalAPi ~ data:", res)
        console.log("🚀 -------------------------------🚀")
        setBalance(res.balance);
        setUPI(res.upi)
        
      } catch (error) {
        console.error(error);
      }

  }

  return (
    <>
      {userData.user ?
      <div className="flex flex-col items-center mt-10 h-screen">
        <h2 className="text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Add/Withdraw Funds
          </span>
        </h2>
        <p className="text-lg mb-4">UPI ID: {upi} </p>

        <div className="balance">
          <h1>
            <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
              Available Balance:${balance}
            </span>
          </h1>
        </div>
        <div className="w-64 md:w-96 flex flex-col items-center mb-4">
          <input
            type="number"
            value={newFunds}
            min={0}
            // onChange={(e) => setNewFunds(parseFloat(e.target.value))}
            onChange={(e) => setNewFunds(parseInt(e.target.value))}
            className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between w-full">
            <button
              onClick={() => handleSuggestionClick(100)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2"
            >
              $100
            </button>
            <button
              onClick={() => handleSuggestionClick(200)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2"
            >
              $200
            </button>
            <button
              onClick={() => handleSuggestionClick(500)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
            >
              $500
            </button>
          </div>
        </div>
        <div className="flex">
          <button
            onClick={handleAddFunds}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-md mr-2"
          >
            Add Funds
          </button>
          <button
            onClick={handleWithdrawFunds}
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-2 rounded-md"
          >
            Withdraw Funds
          </button>
        </div>
        
      </div>

      :
      <Accessdenied/>
      
      }
    </>

  );
};

export default WalletPage;

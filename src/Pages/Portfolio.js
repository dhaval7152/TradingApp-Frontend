import React, { useState, useEffect,useContext } from "react";
import DataContext from '../Context/dataContext';
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
    const data = useContext(DataContext);
    const {host,username,checkLoggedIn,userData} =data;

  const navigate=useNavigate();
    const [usr, setusr] = useState("")
    const [portfolio, setportfolio] = useState([
     
    ])
   
    // useEffect(() => {
    //   viewPortfolioApi({username})
    //   console.log("hitting viewPortfolioApi ");
    //   checkLoggedIn()

    // }, [])

    useEffect(() => {
      checkLoggedIn()
      const data=window.localStorage.getItem('username')
      setusr(data)
      // viewPortfolioApi({username})
      viewPortfolioApi({username:data})

    }, [username]);

    console.log(portfolio);
   

    const viewPortfolioApi=async(data)=>{
        try {
          const response = await fetch(`${host}/viewPortfolio`,{
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
             body: JSON.stringify(data),

          });
          if (response.status==="failed") {
            throw new Error("Failed to fetch data");

          }
          const res = await response.json();
          if(res.status==="failed"){
            setportfolio([]);
          }
          else{
            setportfolio(res);
          }

        } catch (error) {
          console.error(error);
        }
      };
    
    
return(
    <div className="flex justify-center">
    <div className="bg-gradient-to-b from-blue-500 to-black py-4 px-6 rounded-lg w-full max-w-5xl mt-10">
      <h2 className="text-xl font-bold mb-4 text-center text-white">Portfolio</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-blue-200 via-white to-black text-gray-900" >
            <th className="py-2 px-4">Coin Name</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Buy Price</th>
            <th className="py-2 px-4">Purchase Total</th>
            <th className="py-2 px-4">Current Price</th>
            <th className="py-2 px-4 text-gray-400">Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          {/* {console.log(portfolio.length)} */}
          {/* {console.log("this",portfolio)} */}
          {portfolio.length === 0 ?  
          <>
        <td className="py-2 px-4 text-white">NO data</td>
        <td className="py-2 px-4 text-white">NO data</td>
        <td className="py-2 px-4 text-white">NO data</td>
        <td className="py-2 px-4 text-white">NO data</td>
        <td className="py-2 px-4 text-white">NO data</td>
        <td className="py-2 px-4 text-white">NO data</td>
          </>
        :
        <>
        {portfolio.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-blue-100" : "bg-blue-50"}>
            <td className="py-2 px-4">{item.coinsyml}</td>
            <td className="py-2 px-4">{item.Quantity}</td>
            <td className="py-2 px-4">{item.buyPrice}</td>
            <td className="py-2 px-4">{item.value}</td>
            <td className="py-2 px-4">{item.currentPrice}</td>
            <td className="py-2 px-4">{item.profitLoss}</td>
            </tr>
            ))}
        </>  
        }

           {/* {
            !portfolio.length >  0 ? <h1>No stocks</h1> :
            <>
          {portfolio.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-blue-100" : "bg-blue-50"}>
            <td className="py-2 px-4">{item.coinsyml}</td>
            <td className="py-2 px-4">{item.Quantity}</td>
            <td className="py-2 px-4">{item.buyPrice}</td>
            <td className="py-2 px-4">{item.value}</td>
            <td className="py-2 px-4">{item.currentPrice}</td>
            <td className="py-2 px-4">{item.profitLoss}</td>
            </tr>
            ))}
              </>
          }    */}
        </tbody>
      </table>
    </div>
  </div>
)  

}
import { useState } from 'react';

const WalletPage = () => {
  const [balance, setBalance] = useState(1000);
  const [newFunds, setNewFunds] = useState(0);

  const handleAddFunds = () => {
    if (newFunds > 0) {
      setBalance(balance + newFunds);
      setNewFunds(0);
    }
  };

  const handleWithdrawFunds = () => {
    if (newFunds > 0 && newFunds <= balance) {
      setBalance(balance - newFunds);
      setNewFunds(0);
    }
  };

  const handleSuggestionClick = (amount) => {
    setNewFunds(amount);
  };

  return (
    <div className="flex flex-col items-center mt-10 h-screen">
      <h2 className="text-3xl font-bold mb-4">
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Add/Withdraw Funds
        </span>
      </h2>
      <p className="text-lg mb-4">UPI ID: example@upi</p>
      <div className="w-64 md:w-96 flex flex-col items-center mb-4">
        <input
          type="number"
          value={newFunds}
          onChange={(e) => setNewFunds(parseFloat(e.target.value))}
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
      {newFunds > 0 && (
        <p className="text-green-500 mt-4">
          Funds added/withdrawn successfully! New balance: ${balance}
        </p>
      )}
    </div>
  );
};

export default WalletPage;

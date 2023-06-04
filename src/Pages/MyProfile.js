import React, { useState } from "react";

const ProfilePage = () => {
  const [name, setName] = useState("John Doe");
  const [newName, setNewName] = useState("");

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the update logic here
    // ...
    console.log("Updating Name:", newName);
    setName(newName);
    setNewName("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block font-semibold mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            value="johndoe" // Example value, non-editable
            disabled
            className="w-full px-4 py-2 rounded border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="upiId" className="block font-semibold mb-1">
            UPI ID
          </label>
          <input
            type="text"
            id="upiId"
            value="example@upi" // Example value, non-editable
            disabled
            className="w-full px-4 py-2 rounded border border-gray-300"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;

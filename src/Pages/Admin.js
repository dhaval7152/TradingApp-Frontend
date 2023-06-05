import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/dataContext";
import { Link, useNavigate } from "react-router-dom";
export default function Admin() {
  const data = useContext(DataContext);
  return (
    <>
      <h1>Welcome admin</h1>
    </>
  );
}

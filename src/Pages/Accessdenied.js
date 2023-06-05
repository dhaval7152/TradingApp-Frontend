import React, { useState, useEffect,useContext } from "react";
import DataContext from '../Context/dataContext';

export default function Accessdenied() {
    const data=useContext(DataContext);
return(
    <>
    <h1>Login to Access this page</h1>
    </>
)

}
import React, { useState, useEffect,useContext } from "react";
import DataContext from '../Context/dataContext';

export default function Sample() {
    const data=useContext(DataContext);
return(
    <h1>this is My home page</h1>
)

}
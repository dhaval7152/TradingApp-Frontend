import DataContext from "./dataContext";
import {  useEffect } from "react";

const DataState = (props) => {

  return (
    <DataContext.Provider
      value={{


             }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;

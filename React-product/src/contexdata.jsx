/** @format */

import { createContext, useState } from "react";
import Product from "./product.json";

export const DataContex = createContext({


    
});

export const DataProvider = ({ children }) => {
  const [Data, setData] = useState(Product.products);

  return (
    <DataContex.Provider value={{ Data, setData }}>
      {" "}
      {children}
    </DataContex.Provider>
  );
};

import { createContext, useDataContext, useState } from "react";


const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [review, setReview] = useState([]);

  const value = {
   review, 
   setReview
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};

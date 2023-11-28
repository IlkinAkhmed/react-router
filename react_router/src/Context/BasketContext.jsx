import { createContext, useState } from "react";

export const Basketcontext = createContext();

function BasketProvider({ children }) {

  const [shop, setShop] = useState([]);
  const [basket, setBasket] = useState(localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : [] );

  const data = {shop, setShop,basket,setBasket};

  return (
    <Basketcontext.Provider value={data}>{children}</Basketcontext.Provider>
  );
}
export default BasketProvider;

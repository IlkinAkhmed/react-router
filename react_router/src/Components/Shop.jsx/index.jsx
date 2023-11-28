import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import BasketProvider, { Basketcontext } from "../../Context/BasketContext";
import "./index.css";

function Shop() {
  const [isLoading, setIsLoading] = useState(false);

  const { shop,basket,setBasket,setShop } = useContext(Basketcontext);

  useEffect(() => {
    localStorage.setItem("Products", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    fetch("http://localhost:3000/hybridBikes")
      .then((res) => res.json())
      .then((data) => setShop(data));
    setIsLoading(!isLoading);
  }, []);

  function addBasket(item) {
    const find = basket.find((x) => x.id === item.id);
    if (find) {
      find.count++;
      setBasket([...basket]);
      return;
    }
    setBasket([...basket, { ...item, count: 1 }]);
  }

  return (
    <>
      <h1>Shopping</h1>
      <div className="wrapper">
        {!isLoading ? (
          <h1>Loading...</h1>
        ) : (
          shop &&
          shop.map((item) => {
            return (
              <div key={item.id} className="card">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="texts">
                  <h3>{item.title}</h3>
                  <p>{item.color}</p>
                  <p>{item.price}</p>
                  <Link className="add" to={`/details/${item.id}`}>
                    details
                  </Link>
                  <br />
                  <button onClick={() => addBasket(item)} className="add">
                    Add
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Shop;

import React from "react";
import { useContext } from "react";
import { Basketcontext } from "../../Context/BasketContext";
import "./basket.css";

const Basket = () => {
  const { basket, setBasket } = useContext(Basketcontext);

  function modifyCount(ismodify, id) {
    const find = basket.find((x) => x.id === id);
    if (ismodify) {
      find.count++;
      setBasket([...basket]);
    } else {
      if (find.count === 1) {
        setBasket((x) => x.id !== id);
      }
      find.count--;
      setBasket([...basket]);
    }
  }

  function removeItem(id) {
    setBasket(basket.filter((x)=>x.id !== id))
  }
  return (
    <div className="basket">
      <h1>Basket</h1>
      <div className="wrapper">
        {basket &&
          basket.map((products) => (
            <div className="card" key={products.id}>
              <div className="image">
                <img src={products.image} alt="" />
              </div>
              <div className="texts">
                <h3>name: {products.title}</h3>
                <p>color: {products.color}</p>
                <p>weight-limit: {products.weight}</p>
                <p>type: {products.type}</p>
                <p>price: {products.price}</p>
                <p>count: {products.count}</p>
                <div className="buttons">
                  <button
                    onClick={() => modifyCount(true, products.id)}
                    className="button"
                  >
                    +
                  </button>
                  <button
                    onClick={() => modifyCount(false, products.id)}
                    className="button"
                  >
                    -
                  </button>
                  <button className="button" onClick={()=>removeItem(products.id)}>delete</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Basket;

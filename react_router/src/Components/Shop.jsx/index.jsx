import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Shop() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/hybridBikes")
      .then((res) => res.json())
      .then((data) => setData(data));
    setIsLoading(!isLoading);
  }, []);

  return (
    <>
      <h1>Shopping</h1>
      <div className="wrapper">
        {!isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data &&
          data.map((item) => {
            return (
              <div key={item.id} className="card">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="texts">
                  <h3>{item.title}</h3>
                  <p>{item.color}</p>
                  <p>{item.price}</p>
                  <Link to={`/details/${item.id}`} >details</Link>
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

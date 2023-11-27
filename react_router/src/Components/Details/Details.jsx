import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";

function Details() {
  const { ProductId } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/hybridBikes/${ProductId}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [ProductId]);
  return (
    <>
      <div className="details">
        <h1>Details</h1>
        <div className="wrapper">
          {products && (
            <div className="card">
              <div className="image">
                <img src={products.image} alt="" />
              </div>
              <div className="texts">
                <h3>{products.title}</h3>
                <p>{products.color}</p>
                <p>{products.weight}</p>
                <p>{products.type}</p>
                <p>{products.price}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Details;

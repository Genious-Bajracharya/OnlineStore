import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  return (
    <div className="product-container">
      <div className="container">
        <div className="images">
          <img src="http://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg" />
        </div>

        <div className="product">
          <h1>Nike Epic React Flyknit</h1>
          <h2>$150</h2>
          <p className="desc">too.</p>
          <button className="add">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

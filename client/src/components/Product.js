import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img
          className="product-image"
          src="https://hebeboutique.com/cdn/shop/files/IMG_4174_750x.jpg?v=1689638857"
          alt=""
        />
      </div>

      <div className="product">
        <h1 className="product-tile">Nike Epic React Flyknit</h1>
        <span className="text-decoration-line-through">
          ${products.price + 50}
        </span>
        <h2 className="product-price">$150</h2>
        <p className="product-desc">too.</p>
        <div className="product-button-div">
          <button className="add">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

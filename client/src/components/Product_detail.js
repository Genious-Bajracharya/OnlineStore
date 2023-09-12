import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "./Product";
import { Alert } from "bootstrap";

export default function Product_detail() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  function handleAdd() {
    alert("Added successfully");
  }
  return (
    <div className="product-container">
      <div className="product-image-container">
        <img
          className="product-image"
          src={products.image}
          alt={products.title}
        />
      </div>

      <div className="product">
        <h1 className="product-tile">{products.title}</h1>
        <span className="text-decoration-line-through">
          ${products.price + 50.0}
        </span>
        <h2 className="product-price">${products.price}</h2>
        <p className="product-desc">{products.description}</p>
        <div className="product-button-div">
          <button onClick={handleAdd} className="add">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

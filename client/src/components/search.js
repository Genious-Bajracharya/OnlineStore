import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Search() {
  const { query } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the products from the API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
      });
  }, [query]);

  return (
    <div>
      <h2 className="fw-bolder my-4">Search Results for {query}....</h2>
      {filteredProducts.length === 0 ? (
        <h1>The Fake Product that you searched dosent exist </h1>
      ) : (
        <div className="hot-container">
          {filteredProducts.map((item) => (
            <div
              onClick={() => navigate(`/product/${item.id}`)}
              className="hot-product-card"
              key={item.id}
            >
              <img src={item.image} className="hot-image" alt="" />
              <div className="hot-info">
                <span>{item.category}</span>
                <br></br>
                <h4>{item.title}</h4>
                <button className="hot-button">Buy now</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

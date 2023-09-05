import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Category() {
  const [category, setCategory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      fetch(`https://fakestoreapi.com/products/category/${id}`)
        .then((res) => res.json())
        .then((data) => setCategory(data));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <div className="category-head">
        <img src="" alt="" />
        <div>
          <h1 className="title">{id}</h1>
        </div>
      </div>

      <div className="hot-container">
        {category.map((item) => (
          <Link to={`/product/${item.id}`}>
            <div className="hot-product-card" key={item.id}>
              <img src={item.image} className="hot-image" alt="" />
              <div className="hot-info">
                <span>{item.category}</span>
                <br></br>
                <h4>{item.title}</h4>

                <button className="hot-button">Buy now</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

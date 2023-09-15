import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

export default function Product_detail() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  function handleAdd() {
    alert(`Added ${quantity} to cart successfully`);
  }
  function handleLike() {
    alert(`Successfully added to your Wishlist`);
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
          ${Math.round(products.price + 50.0, 2)}
        </span>
        <h2 className="product-price">${products.price}</h2>
        <p className="product-desc">{products.description}</p>
        <div className="product-button-div">
          <button onClick={handleAdd} className="add">
            Add to Cart
          </button>
          <input
            type="number"
            className="quantity"
            placeholder={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <AiOutlineHeart onClick={handleLike} className="like" />
        </div>
      </div>
    </div>
  );
}

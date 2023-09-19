import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="cart">
        <h2>My Cart</h2>
        <div className="cart-item-container">
          {products.slice(14, 18).map((item) => (
            <div
              className="cart-items"
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <div className="cart-image-container">
                <img className="cart-image" src={item.image} alt={item.title} />
              </div>
              <div className="cart-info">
                <h4>{item.title}</h4>
                <p>{item.price}</p>
              </div>
              <div className="cart-func">
                <input
                  type="number"
                  className="cart-quantity"
                  placeholder="1"
                  value={item.id.quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />

                <BsTrash3 className="cart-remove" />
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <h4>SubTotal:</h4>
          <p>{totalPrice}</p>
        </div>
        <button className="cart-checkout">Checkout</button>
      </div>
    </>
  );
}

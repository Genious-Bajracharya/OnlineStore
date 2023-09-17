import React from "react";
import { useState, useEffect } from "react";
import { BsTrash3 } from "react-icons/bs";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  function total() {}

  return (
    <>
      <div className="cart">
        <h2>My Cart</h2>
        <div className="cart-item-container">
          {products.slice(14, 18).map((item) => (
            <div className="cart-items" key={item.id}>
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
                />
                <BsTrash3 className="cart-remove" />
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <h4>SubTotal:</h4>
          <p>1927836</p>
        </div>
        <button className="cart-checkout">Checkout</button>
      </div>
    </>
  );
}

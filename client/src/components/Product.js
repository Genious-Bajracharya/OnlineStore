import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/user/2")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return <div className="product-container"></div>;
}

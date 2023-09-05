import React, { useState, useEffect } from "react";

export default function Experiment() {
  const [categories, setCategoriess] = useState([]);

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => setCategoriess(data));
      console.log(categories);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <div>{categories}</div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function Search() {
  const { query } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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
      <Navbar />
      <div className="container">
        <h2 className="fw-bolder my-4">Search Results for {query}</h2>
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} className="col mb-5">
              <div key={product.id} className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top img-fluid"
                    src={product.image}
                    alt={product.title}
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{product.title}</h5>$
                      {product.price}
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-outline-dark mt-auto"
                      >
                        Open
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

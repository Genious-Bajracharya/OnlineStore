import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);
  return (
    <div>
      <Navbar />
      <div>
        <section className="py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                <img
                  className="card-img-top mb-5 mb-md-0"
                  src={products.image}
                  alt={products.title}
                />
              </div>
              <div className="col-md-6">
                <h1 className="display-5 fw-bolder">{products.title}</h1>
                <div className="fs-5 mb-5">
                  <span className="text-decoration-line-through">
                    ${products.price + 50}
                  </span>
                  <span>${products.price}</span>
                </div>
                <p className="lead">{products.description}</p>
                <div className="d-flex">
                  <input
                    className="form-control text-center me-3"
                    id="inputQuantity"
                    type="num"
                    value="1"
                    style={{ maxWidth: "3rem" }}
                  />
                  <button
                    className="btn btn-outline-dark flex-shrink-0"
                    type="button"
                  >
                    <i className="bi-cart-fill me-1" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

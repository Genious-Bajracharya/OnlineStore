import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <h2 className="fw-bolder mb-4">New products</h2>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center ">
          {products
            .sort(() => Math.random() - 0.5)
            .slice(0, 4)
            .map((product) => (
              <Link to={`/product/${product.id}`} className="col mb-5">
                <div className="col mb-5 ">
                  <div className="card h-100">
                    <img
                      className="card-img-top "
                      src={product.image}
                      alt={product.title}
                      style={{ objectFit: "cover", height: "300px" }}
                    />

                    <div className="card-body p-4">
                      <div className="text-center">
                        <h6 className="fw-bolder">{product.title}</h6>$
                        {product.price}
                      </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">{product.category}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="container px-4 px-lg-5 mt-5">
        <h2 className="fw-bolder mb-4">All products</h2>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.title}
                  style={{ objectFit: "cover", height: "300px" }}
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{product.title}</h5>$
                    {product.price}
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">{product.category}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

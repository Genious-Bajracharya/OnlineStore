import React, { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [product1, setProduct1] = useState([]);
  const [product2, setProduct2] = useState([]);
  const [product3, setProduct3] = useState([]);
  // console.log(products[1].price);

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products/20")
        .then((res) => res.json())
        .then((data) => setProduct1(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products/5")
        .then((res) => res.json())
        .then((data) => setProduct3(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products/18")
        .then((res) => res.json())
        .then((data) => setProduct2(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="home">
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Hero Image"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">Welcome to FakeStore</h1>
          <div className="title-underline"></div>
          <p className="hero-description">
            Discover amazing content and services.
          </p>
          <p className="hero-description">Also everything is fake!</p>
          <button className="hero-button">Shop Now</button>
        </div>
      </div>
      <div className="guff">
        <div className="guff-box">
          <h4>Totally Fake</h4>
          <span>All products we sell are fake. Yea dont bother. </span>
        </div>
        <div className="guff-line"></div>
        <div className="guff-box">
          <h4>100% Refundable</h4>
          <span>
            All damaged products are 100% Refundable need to be legit though.
          </span>
        </div>
        <div className="guff-line"></div>
        <div className="guff-box">
          <h4>High Quality</h4>
          <span>
            Fake Store sells top tier quality product that have a record of 0%
            complaints.
          </span>
        </div>
      </div>
      <div className="seller-box">
        <div className="seller">
          <a href="/add">
            <img src={product1.image} className="seller-image" alt="" />
            <h2 className="seller-text">Sale</h2>
          </a>
        </div>
        <div className="seller">
          <img src={product2.image} className="seller-image" alt="" />
          <h2 className="seller-text">New Arrivals</h2>
        </div>
        <div className="seller">
          <img src={product3.image} className="seller-image" alt="" />
          <div className="seller-text">
            <h2 className="seller-text">Trending</h2>
          </div>
        </div>
      </div>
      <div className="collection">
        <div className="collection-mens">
          <a href={`/category/${`men's clothing`}`}>
            <img
              src="https://media.istockphoto.com/id/831659416/photo/luxury-clothing-shop-for-men.jpg?s=612x612&w=0&k=20&c=ojRX38zxl2WyAfZBV4NlrBAQvjlLnvWekTuF2ZLzNIA="
              className="collection-mens-image"
              alt=""
            />
            <div className="collection-info">
              <h1>Mens Collection</h1>
              <span>Top quality thing innt</span>
              <br></br>
              <button className="collection-button">Buy Now</button>
            </div>
          </a>
        </div>
        <div className="collection-womens">
          <a href={`/category/${`women's clothing`}`}>
            <img
              src="https://media.istockphoto.com/id/1152092333/photo/boutique-clothing-store.jpg?s=612x612&w=0&k=20&c=h2VO3aVvXrl-t7sTAkXMhMcnOGyGxGg3PI2BYi_QK1Q="
              className="collection-womens-image"
              alt=""
            />
            <div className="collection-info">
              <h1>Womens Collection</h1>
              <span>Shine bright ladies sewy</span>
              <br></br>
              <button className="collection-button">Buy Now</button>
            </div>
          </a>
        </div>
      </div>

      <div className="bestseller">BestSellers</div>

      <div className="hot-container">
        {products.slice(15, 18).map((item) => (
          <div className="hot-product-card" key={item.id}>
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
      <div className="fake-ending">
        <h1 className="fake-end-title"> Shop Fake Store</h1>
        <span className="fake-span">Buy your favourite fake item today</span>
      </div>
    </div>
  );
}

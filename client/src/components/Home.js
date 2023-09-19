import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [product1, setProduct1] = useState([]);
  const [product2, setProduct2] = useState([]);
  const [product3, setProduct3] = useState([]);
  const navigate = useNavigate();
  const ref = useRef(null);

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
      fetch("https://fakestoreapi.com/products/17")
        .then((res) => res.json())
        .then((data) => setProduct2(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const scroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <div className="hero-section">
        <img
          src="https://img.freepik.com/free-photo/beautiful-second-hand-market_23-2149353670.jpg?w=1060&t=st=1694020688~exp=1694021288~hmac=ddfa55337fcdbc69285b120417777daad627fee8511308efd1ff13a927db0ec5"
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
          <button onClick={scroll} className="hero-button">
            Shop Now
          </button>
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
        <div
          className="seller"
          onClick={() => navigate(`/category/${`women's clothing`}`)}
        >
          <img src={product1.image} className="seller-image" alt="" />
          <h2 className="seller-text">Sale</h2>
        </div>
        <div
          className="seller"
          onClick={() => navigate(`/category/${`men's clothing`}`)}
        >
          <img src={product2.image} className="seller-image" alt="" />
          <h2 className="seller-text">New Arrivals</h2>
        </div>
        <div
          className="seller"
          onClick={() => navigate(`/category/${`jewelery`}`)}
        >
          <img src={product3.image} className="seller-image" alt="" />
          <div className="seller-text">
            <h2 className="seller-text">Trending</h2>
          </div>
        </div>
      </div>
      <div ref={ref} className="collection">
        <div
          className="collection-mens"
          onClick={() => navigate(`/category/${`men's clothing`}`)}
        >
          <img
            src="https://img.freepik.com/free-photo/overhead-view-womans-casual-outfits_93675-134231.jpg?w=1060&t=st=1694014800~exp=1694015400~hmac=115ca3042e9d1aba93ddf953502214d4981678b7e3746215eef3e584033fcf31"
            className="collection-mens-image"
            alt=""
          />
          <div className="collection-info">
            <h1>Mens Collection</h1>
            <span>Top quality thing innt</span>
            <br></br>
            <button className="collection-button">Buy Now</button>
          </div>
        </div>
        <div
          className="collection-womens"
          onClick={() => navigate(`/category/${`women's clothing`}`)}
        >
          <img
            src="https://img.freepik.com/free-photo/overhead-view-womans-casual-outfits_93675-134143.jpg?w=1060&t=st=1694014753~exp=1694015353~hmac=a4c74826d227f28666d34dcf6537b8f86676e55dee9588ca5f5824aa29352d89"
            className="collection-womens-image"
            alt=""
          />
          <div className="collection-info">
            <h1>Womens Collection</h1>
            <span>Shine bright ladies sewy</span>
            <br></br>
            <button className="collection-button">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="bestseller">BestSellers</div>

      <div className="hot-container">
        {products.slice(15, 18).map((item) => (
          <div className="hot-product-card" key={item.id}>
            <img
              onClick={() => navigate(`/product/${item.id}`)}
              src={item.image}
              className="hot-image"
              alt=""
            />
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

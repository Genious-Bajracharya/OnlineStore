import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // const searchTerm = event.target.elements.searchTerm.value;

    navigate(`/search/${searchTerm}`);
  };

  return (
    <div>
      <div className="nav-sale">Special offer for limited time</div>
      <nav className="navbar">
        <div className="navigations">
          <button onClick={() => navigate(`/`)} className="navigate-button">
            Home
          </button>
          <div className="dropdown">
            <button className="navigate-button">Categories</button>
            <div className="dropdown-content">
              <a href={`/category/${`men's clothing`}`}>Men Clothing</a>
              <a href={`/category/${`women's clothing`}`}>Women Clothing</a>
              <a href={`/category/${`jewelery`}`}>Jwellery</a>
              <a href={`/category/${`electronics`}`}>Electronics</a>
            </div>
          </div>
          <button className="navigate-button">Contact</button>
        </div>
        <div onClick={() => navigate(`/`)} className="brand">
          <h1>Fake Store</h1>
        </div>
        <form className="search">
          <input type="text" placeholder="search" onSubmit={handleSearch} />
        </form>
      </nav>
    </div>
  );
}

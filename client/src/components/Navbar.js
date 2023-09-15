import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // const searchTerm = event.target.elements.searchTerm.value;
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div>
      <div className="nav-sale">
        <span className="moving-text">
          Special offer for limited time. Free delivery on every purchase over 1
          bitcoin
        </span>
      </div>
      <nav className="navbar">
        <div className="navigations">
          <button onClick={() => navigate(`/`)} className="navigate-button">
            Home
          </button>
          <div className="dropdown">
            <button className="navigate-button">Categories</button>
            <div className="dropdown-content">
              <a onClick={() => navigate(`/category/${`men's clothing`}`)}>
                Men Clothing
              </a>
              <a onClick={() => navigate(`/category/${`women's clothing`}`)}>
                Women Clothing
              </a>
              <a onClick={() => navigate(`/category/${`jewelery`}`)}>
                Jwellery
              </a>
              <a onClick={() => navigate(`/category/${`electronics`}`)}>
                Electronics
              </a>
            </div>
          </div>
          <button className="navigate-button">Contact</button>
        </div>
        <div onClick={() => navigate(`/`)} className="brand">
          <h1>Fake Store</h1>
        </div>
        <form className="search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </nav>
    </div>
  );
}

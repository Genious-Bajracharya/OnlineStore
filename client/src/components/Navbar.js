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
        <div className="brand">
          <h1>Fake Store</h1>
        </div>
        <div className="navigations">
          <a href="/">Home</a>
          <a>Categories</a>
          <a>Contact</a>
        </div>
        <form className="search">
          <input type="text" placeholder="search" onSubmit={handleSearch} />
        </form>
      </nav>
    </div>
  );
}

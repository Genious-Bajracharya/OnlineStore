import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { CgProfile, CgSearch } from "react-icons/cg";

export default function Navbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [search, showSearch] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    // const searchTerm = event.target.elements.searchTerm.value;
    navigate(`/search/${searchTerm}`);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(search);
    {
      search ? showSearch(false) : showSearch(true);
    }
  };

  return (
    <>
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
        <div className="icon-container">
          <CgSearch onClick={handleClick} className="search-logo" />
          <CgProfile className="login" />
          <AiOutlineShoppingCart className="cart" />
        </div>
      </nav>
      {search ? (
        <form onSubmit={handleSearch}>
          <input
            className="search"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
          />
        </form>
      ) : (
        <></>
      )}
    </>
  );
}

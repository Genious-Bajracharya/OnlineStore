import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "./loadin";

export default function Category() {
  const [category, setCategory] = useState([]);
  const { id } = useParams();
  const [banner, setBanner] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      fetch(`https://fakestoreapi.com/products/category/${id}`)
        .then((res) => res.json())
        .then((data) => setCategory(data));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (id === "men's clothing") {
      setBanner(
        "https://img.freepik.com/free-photo/handsome-man-wearing-leather-jacket-looking-confident-camera-standing-white-background_1258-110987.jpg?w=1380&t=st=1693998152~exp=1693998752~hmac=8e9e9afbfe19a1af6a00a5e0fdf53ddd6f998590513a9aa8a48b91a0f2384b2c"
      );
    } else if (id === "women's clothing") {
      setBanner(
        "https://img.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg?w=1380&t=st=1693998688~exp=1693999288~hmac=03de18f18760908ce8479b6353e74ab60cd0a5f7bdbeaf0b84a791a40c5a34c4"
      );
    } else if (id === "jewelery") {
      setBanner(
        "https://img.freepik.com/free-photo/silver-aesthetic-wallpaper-with-chain_23-2149871722.jpg?w=1060&t=st=1694019890~exp=1694020490~hmac=0559d67ba461cd2cda2d2ca1dcfdb93182ba7c10ac58e43ca8e444b37415e1e1"
      );
    } else {
      setBanner(
        "https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?size=626&ext=jpg"
      );
    }
  }, []);

  return (
    <div>
      <div className="category-head">
        <img src={banner} className="category-banner" alt="" />
        <div>
          <h1 className="title">{id}</h1>
        </div>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="hot-container">
          {category.map((item) => (
            <div
              onClick={() => navigate(`/product/${item.id}`)}
              className="hot-product-card"
              key={item.id}
            >
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
      )}
    </div>
  );
}

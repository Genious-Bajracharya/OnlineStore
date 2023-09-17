import React from "react";
import { useRef } from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

export default function Footer() {
  const con = useRef(null);
  const bake = 1;

  return (
    <footer ref={con}>
      <div className="content">
        <div className="left box">
          <div className="upper">
            <div className="topic">About us</div>
            <p>
              FakeStore is a fake store that sells fake products to fake people
              because everything is fake.
            </p>
          </div>
          <div className="lower">
            <div className="topic">Contact us</div>
            <div className="phone">
              <a href="#">
                <i className="fas fa-phone-volume" />
                +977 986923123
              </a>
            </div>
            <div className="email">
              <a href="#">
                <i className="fas fa-envelope" />
                FakeStore420@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="middle box">
          <div className="topic">Our Features</div>
          <div>
            <a href="#">100% Fake Products</a>
          </div>
          <div>
            <a href="#">N0 Complaints</a>
          </div>
          <div>
            <a href="#">100% Refundable</a>
          </div>
          <div>
            <a href="#">Best Quality of Fake Products </a>
          </div>
        </div>
        <div className="right box">
          <div className="topic">Contact us</div>
          <form action="#">
            <input type="text" placeholder="Enter email address" />
            <input type="submit" name="" value="Send" />
            <div className="media-icons">
              <a href="https://www.instagram.com/_genious.__/">
                <i className="fab fa-facebook-f">
                  <AiOutlineInstagram />
                </i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100009409115809">
                <AiOutlineFacebook />
              </a>
              <a href="https://github.com/Genious-Bajracharya">
                <i className="fab fa-twitter">
                  <AiOutlineGithub />
                </i>
              </a>
              <a href="https://www.linkedin.com/in/genious-bajracharya-573964211/">
                <AiOutlineLinkedin />
              </a>
              <a href="#">
                <AiOutlineYoutube />
              </a>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer>
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
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

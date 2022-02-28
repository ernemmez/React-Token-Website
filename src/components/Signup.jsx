import React from "react";
import char from "../assets/release2.png";
export default function Signup() {
  return (
    <div className="signup ">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <h1 className="title">Join The Community!</h1>
          <p className="description">
            Örnek text test lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
          <button>Telegram</button>
          <button>Twitter</button>
          <button>BscScan</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={char} alt="home image" className="img-responsive sign-image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

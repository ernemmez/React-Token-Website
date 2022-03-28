import React from "react";
import home from "../assets/home.png";
import Malik from "./Malik";
import Video from "./Video";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Tokenadı Verry Soon</p>
          <h1 className="title">Örnek Slogan!</h1>
          <p className="description">
            Örnek cümle kelime örnek text.Text örnek cümle. Örnek cümle kelime.
            Kelime örnek cümle.
          </p>
          <div className="home-buttons">
          <button className="home-button">Buy Token Name</button>
          <button className="home-button">Go Whitepaper</button>
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" className="img-responsive metaverse-char" />
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

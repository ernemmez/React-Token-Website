import React from "react";
import Card from "./Card";
import icon from "../assets/icon.png";
import super1 from "../assets/3.png";
import release2 from "../assets/release2.png";

export default function Free() {
  return (
    <div className="free mobile-sections">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">About The Project</h2>
          <p className="description">
            örnek bir proje. Lorem ipsum dolor sit amet, consectetur adipiscing. <br></br>
            örnek bir proje. Lorem ipsum dolor sit amet, consectetur adipiscing. <br></br>
            örnek bir proje. Lorem ipsum dolor sit amet, consectetur adipiscing. <br></br>
            örnek bir proje. Lorem ipsum dolor sit amet, consectetur adipiscing. <br></br>
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Token Adı"
            title="Purple Man"
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Token Adı"
            title="David"
          />
        </div>
      </div>
    </div>
  );
}

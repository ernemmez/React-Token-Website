import React from "react";
import Card from "./Card";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";

export default function SuperRare() {
  const data = [
    {
      image: super1,
      series: "Token Adı",
      title: "Purple Man",
    },
    {
      image: super2,
      series: "Token Adı",
      title: "Beige",
    },
    {
      image: super3,
      series: "Token Adı",
      title: "David",
    },
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title nav-link">Our Virtual Assistants</h2>
        <p className="description">
        You will not encounter any problems! Because they exist.
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title,}, index) => (
          <Card className="card" image={image} series={series} title={title} />
        ))}
      </div>
    </div>
  );
}

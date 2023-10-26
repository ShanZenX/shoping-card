import React from "react";
import Mycard from "./Card";
import cardAll from "./data";
import "./App.css";

export default function All() {
  return (
    <div className="card-holder">
      <div className="card">
        {cardAll.map((cardAll) => (
          <Mycard
            key={cardAll.id}
            image={cardAll.image}
            name={cardAll.name}
            price={cardAll.price}
            description={cardAll.description}
            category={cardAll.category}
          />
        ))}
      </div>
    </div>
  );
}

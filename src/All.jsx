import React from "react";
import ShopingCard from "./ShopingCard";
import { cardAll } from "./data";

export default function All() {
  return (
    <div className="card-holder">
      <div className="card">
        {cardAll.map((cardAll) => (
          <ShopingCard
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

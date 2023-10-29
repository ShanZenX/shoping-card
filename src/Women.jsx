import React from "react";
import { cardWomen } from "./data";
import ShopingCard from "./ShopingCard";

export default function Women() {
  return (
    <div className="card-holder">
      <div className="card">
        {cardWomen.map((cardWomen) => (
          <ShopingCard
            key={cardWomen.id}
            name={cardWomen.name}
            description={cardWomen.description}
            image={cardWomen.image}
            price={cardWomen.price}
          />
        ))}
      </div>
    </div>
  );
}

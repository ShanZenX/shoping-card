import React from "react";
import ShopingCard from "./ShopingCard";
import { cardMens } from "./data";

export default function Mens() {
  return (
    <div className="card-holder">
      <div className="card">
        {cardMens.map((cardMens) => (
          <ShopingCard
            key={cardMens.id}
            image={cardMens.image}
            name={cardMens.name}
            price={cardMens.price}
            description={cardMens.description}
            category={cardMens.category}
          />
        ))}
      </div>
    </div>
  );
}

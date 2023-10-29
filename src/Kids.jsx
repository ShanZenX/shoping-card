import React from "react";
import { cardKids } from "./data";
import ShopingCard from "./ShopingCard";

export default function Kids() {
  return (
    <div className="card-holder">
      <div className="card">
        {cardKids.map((cardKids) => (
          <ShopingCard
            id={cardKids.id}
            image={cardKids.image}
            name={cardKids.name}
            description={cardKids.description}
            price={cardKids.price}
          />
        ))}
      </div>
    </div>
  );
}

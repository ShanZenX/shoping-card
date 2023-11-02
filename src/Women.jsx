import React from "react";
import ShopingCard from "./ShoppingCard";

export default function Women({ womenData }) {
  return (
    <div className="card-holder">
      <div className="card">
        {womenData.map((womenData) => (
          <ShopingCard
            key={womenData.id}
            name={womenData.name}
            description={womenData.description}
            image={womenData.image}
            price={womenData.price}
          />
        ))}
      </div>
    </div>
  );
}

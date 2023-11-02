import React from "react";
import ShopingCard from "./ShoppingCard";

export default function Kids({ kidsData }) {
  return (
    <div className="card-holder">
      <div className="card">
        {kidsData.map((kidsData) => (
          <ShopingCard
            id={kidsData.id}
            image={kidsData.image}
            name={kidsData.name}
            description={kidsData.description}
            price={kidsData.price}
          />
        ))}
      </div>
    </div>
  );
}

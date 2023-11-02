import React from "react";
import ShopingCard from "./ShoppingCard";

export default function Kids({ kidsData, onBuy }) {
  const handelBuy = (data) => {
    onBuy(data);
  };
  return (
    <div className="card-holder">
      <div className="card">
        {kidsData.map((kidsData) => (
          <ShopingCard
            handelBuy={() => handelBuy(kidsData)}
            key={kidsData.id}
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

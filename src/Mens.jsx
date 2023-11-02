import React from "react";
import ShopingCard from "./ShoppingCard";

export default function Mens({ menData, onBuy }) {
  const handelBuy = (data) => {
    onBuy(data);
  };
  return (
    <div className="card-holder">
      <div className="card">
        {menData.map((menData) => (
          <ShopingCard
            handelBuy={() => handelBuy(menData)}
            key={menData.id}
            image={menData.image}
            name={menData.name}
            price={menData.price}
            description={menData.description}
            category={menData.category}
          />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import ShopingCard from "./ShoppingCard";

function All({ allData, onBuy }) {
  const handelBuy = (data) => {
    onBuy(data);
  };
  return (
    <div className="card-holder">
      <div className="card">
        {allData.map((allData) => (
          <ShopingCard
            handelBuy={() => handelBuy(allData)}
            key={allData.id}
            image={allData.image}
            name={allData.name}
            price={allData.price}
            description={allData.description}
            category={allData.category}
          />
        ))}
      </div>
    </div>
  );
}

export default All;

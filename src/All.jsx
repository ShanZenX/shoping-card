import React from "react";
import ShopingCard from "./ShoppingCard";

function All({ allData }) {
  return (
    <div className="card-holder">
      <div className="card">
        {allData.map((allData) => (
          <ShopingCard
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

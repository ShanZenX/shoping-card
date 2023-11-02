import React from "react";
import { Button } from "@mui/material";
import "./App.css";

export default function ShopingCard(props) {
  return (
    <div key={props.id} className="main-card">
      <div className="card-img-holder">
        <img src={props.image} alt={props.name} className="card-img"></img>
      </div>
      <div className="card-content">
        <h4>{props.name}</h4>
        <p className="card-des">{props.description}</p>
        <p className="card-price">$ {props.price}</p>

        <div className="btn-sec">
          <Button className="card-btn">Buy now</Button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Button } from "@mui/material";
import "./App.css";

export default function Mycard(props) {
  return (
    <div key={props.id} className="main-card">
      <div className="card-img-holder">
        <img src={props.image} alt={props.name} className="card-img"></img>
      </div>
      <div className="card-content">
        <h4>{props.name}</h4>
        <p>${props.price}</p>
        <p className="card-des">{props.description}</p>
        <small>{props.category}</small>

        <div>
          <Button className="card-btn">Add to cart</Button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Cart from "./Cart";

const Product = ({ id, name, description, img, price }) => {
  return (
    <div className="card" style={{ width: "18rem" }} id={id}>
      <img src={img} class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"> {description} </p>
        <p>{price}</p>
        <a href="#" className="btn btn-primary">
          Add
        </a>
      </div>
    </div>
  );
};

export default Product;

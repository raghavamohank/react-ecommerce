import React from "react";
import Cart from "./Cart";

const Product = ({ id, name, description, img, price, addFunc }) => {
  return (
    <div className="card" style={{ width: "18rem" }} id={id}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"> {description} </p>
        <p>{price}</p>
        <a href="#" className="btn btn-primary bg-dark-green"
         onClick= {() => addFunc({id,name,description,img,price,units:1})}>
          Add
        </a>
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Apple",
    description: "Red Apples",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },

  {
    id: 2,
    name: "Apple",
    description: "Red Apples",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },

  {
    id: 3,
    name: "Apple",
    description: "Red Apples",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  },
  {
    id: 4,
    name: "Banana",
    description: "I need those carbs",
    img: "https://tachyons.io/img/avatar_1.jpg",
    price: 100
  }
];

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      cart: [
        {
          id: 4,
          name: "Banana",
          description: "I need those carbs",
          img: "https://tachyons.io/img/avatar_1.jpg",
          price: 100,
          units: 2
        }
      ]
    };
  }

  handleAddFunc(product) {
    const existingProduct = this.state.cart.filter(p => p.id === product.id);

    if (existingProduct.length > 0) {
      const withoutExistingProduct = this.state.cart.filter(
        p => p.id !== product.id
      );
      const updatedUnitsProduct = {
        ...existingProduct[0],
        units: existingProduct[0].units + product.units
      };

      this.setState({
        cart: [...withoutExistingProduct, updatedUnitsProduct]
      });
    } else {
      this.setState({
        cart: [...this.state.cart, product]
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Cart Page</h1>
        <ul>
          {this.state.cart.map(c => (
            <li>
              {c.name} | units {c.units}
            </li>
          ))}
        </ul>

        {products.map(p => (
          <Product key={p.id} {...p} addFunc={this.handleAddFunc.bind(this)} />
        ))}
      </div>
    );
  }
}

export default Cart;

import React from "react";
import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Wrangler",
    description: "Men Printed Casual Peter Pan Shirt",
    img:
      "http://assets.myntassets.com/assets/images/1362028/2018/9/12/31ded500-856d-46b4-8f47-f7534593a0481536752985693-Roadster-Men-Brown-Regular-Fit-Checked-Casual-Shirt-3231536752985447-1.jpg",
    price: 1200
  },

  {
    id: 2,
    name: "JacknJones",
    description: "Men Printed Casual Peter Pan Shirt",
    img:
      "https://img.ltwebstatic.com/images2_pi/2018/07/09/15311256221214541777_thumbnail_600x799.jpg",
    price: 1500
  },

  {
    id: 3,
    name: "Levis",
    description: "Men Printed Casual Peter Pan Shirt",
    img:
      "https://i.pinimg.com/originals/73/92/50/7392501565dc5d303f3c89fcbd3d4cb3.jpg",
    price: 1000
  },
  {
    id: 4,
    name: "Adidas",
    description: "Men Printed Casual Peter Pan Shirt",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41R8AeThMio6fVI6sN01eaqklyBFmSrXK1_9ZLyPItoG0In7R",
    price: 2200
  },
  {
    id: 5,
    name: "UCB",
    description: "Men Printed Casual Peter Pan Shirt",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1l9PiZD-XHTRkEsfOAJFH0V5md7XfVb0HqoVSEg1ejF2kSMa3eg",
    price: 2000
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
          name: "Adidas",
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
      <div className="pa3 pa5-ns flex flex-wrap">
        <h1>Welcome {localStorage.getItem("name")}</h1>
        {console.log(localStorage)}
        {products.map(p => (
          <Product key={p.id} {...p} addFunc={this.handleAddFunc.bind(this)} />
        ))}
        <ul>
          {this.state.cart.map(c => (
            <li>
              {c.name} | units {c.units}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cart;

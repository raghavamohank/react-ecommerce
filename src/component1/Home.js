import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Cart from "./cart/Cart";
import Product from "./cart/Product";

function Protected({ component: Component, ...rest }) {
  console.log("$$$$$$$$", localStorage.getItem("isLoggedin"));
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("isLoggedin") == "true" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
}
export class Home extends Component {
  state = {
    name: "",
    isLoggedin: false
  };
  render() {
    return (
      <div>
        <Router>
          <Header />

          <Route exact path="/home" component={Content} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/cart" component={Cart} />

          <Footer />
        </Router>
      </div>
    );
  }
}

export default Home;

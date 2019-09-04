import React, { Component } from "react";
import Headerr from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Cart from "./cart/Cart";

function Protected({ component: Component, ...rest }) {
  console.log("$$$$$$$$", localStorage.getItem("isLoggedIn"));
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("isLoggedIn") == "true" ? (
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

  handleSubmit = e => {
    e.preventDefault();
    console.log("Loggedin");
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("name", this.state.name);
    this.setState({
      isLoggedIn: true
    });
    console.log("Logged in..!");
  };

  handleLogout = history => {
    history.push("/signin");
    localStorage.setItem("isLoggedIn", false);
    this.setState({
      isLoggedIn: false
    });
  };

  render() {
    return (
      <div>
        <Router>
          <Headerr />

          {/* <Route exact path="/home" component={Content} /> */}

          {/* <Footer /> */}
          {/* <Route
            exact
            path="/cart"
            render={() => {
              return localStorage.getItem("isLoggedIn") == "true" ? (
                <Cart />
              ) : (
                <Redirect to="/signin" />
              );
            }}
          /> */}
          <Protected exact path="/cart" component={Cart} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Router>
      </div>
    );
  }
}

export default Home;

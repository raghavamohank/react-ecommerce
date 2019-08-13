import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Content />
          <Footer />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Router>
      </div>
    );
  }
}

export default Home;

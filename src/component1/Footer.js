import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div class="card text-center">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">To Browse More Please Login</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>

            <Link to="/signin" class="btn btn-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

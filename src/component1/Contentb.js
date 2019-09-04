import React, { Component } from "react";
import { Carousel } from "antd";

export default class Contentb extends Component {
  render() {
    return (
      <div className="mycarousel">
        <Carousel autoplay effect="fade">
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGGHKO4GUyh9Eu7DK9UznhhYN4629aTwlHZ_Jdi3vUrFK_hvq" />
          </div>
          <div>
            <img src="https://images.thesouledstore.com/public/theSoul/uploads/slider/20190711164015.jpg" />
          </div>
          <div>
            <img src="http://www.abfrl.com/portals/0/Images/People-Banner-new.png" />
          </div>
          <div>
            <img src="https://images.thesouledstore.com/public/theSoul/uploads/slider/20190726160624.jpg" />
          </div>
        </Carousel>
      </div>
    );
  }
}

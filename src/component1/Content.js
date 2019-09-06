import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import Contenta from "./Contenta";
import Contentb from "./Contentb";

const { Meta } = Card;
const data = [
  {
    title: "Louis Philippe",
    description: "Men Printed Casual Shirt",
    imgSrc:
      "http://assets.myntassets.com/assets/images/6841348/2018/11/2/effc9dd6-e44c-4629-b60e-bb32a8b380d31541141173346-Levis-Men-Blue-Trim-Slim-Fit-Solid-Casual-Shirt-3891541141173089-1.jpg"
  },

  {
    title: "Wrangler",
    description: "Men Printed Casual Mandarin Shirt",
    imgSrc:
      "https://5.imimg.com/data5/BQ/XW/MY-47608330/peter-england-blue-shirt-esf51702557-500x500.png"
  },
  {
    title: "Peter England",
    description: "Men Printed Casual Shirt",
    imgSrc:
      "https://i.pinimg.com/originals/b2/b4/a9/b2b4a964863911928baf6686b43f8e79.jpg"
  },

  {
    title: "Flying Machine",
    description: "Man Checked Casual Shirt",
    imgSrc:
      "https://assets.jassets.com/h_533,q_95,w_391/v1/assets/images/productimage/2019/2/5/bb7da225-e4a1-443f-801a-9eef6dbcaa591549361645783-1.jpg"
  }
];
export default class Contentt extends Component {
  cart = () => {
    let path = <Link to="/signin" />;
    this.props.history.push(path);
  };
  render() {
    return (
      <div>
        <Contentb />
        <div className="backgroundimg">
          <Row gutter={16}>
            {data.map((item, index) => {
              return (
                <Col span={6}>
                  <Card
                    hoverable
                    // style={{ width: 240 }}
                    cover={
                      <img
                        onClick={this.cart}
                        alt="example"
                        src={item.imgSrc}
                        height="200px"
                      />
                    }
                  >
                    <Meta title={item.title} description={item.description} />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
        <br />
        <Contenta />
      </div>
    );
  }
}

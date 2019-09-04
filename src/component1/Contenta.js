import React, { Component } from "react";
import { Card, Icon, Row, Col } from "antd";

const { Meta } = Card;
const data = [
  {
    title: "Casual Shirts",
    description: "Lee Cooper, Wrangler & more",
    imgSrc:
      "https://www.cottonking.com/1275-large_default/buy-formal-cotton-shirt-online-office-wear-formal-cotton-shirt-online-25175.jpg"
  },
  {
    title: "Jeans",
    description: "Levis, Pepe Jeans & more",
    imgSrc:
      "https://rendering.documents.cimpress.io/v1/vp/preview?scene=https://scene.products.cimpress.io/v1/scenes/9ca8ee8f-e03a-4ddf-8e9c-2fdbe5f15e53&width=690&height=690&quality=80"
  },
  {
    title: "Nike,Puma & more",
    description: "Mens Track",
    imgSrc:
      "https://n1.sdlcdn.com/imgs/h/e/v/Puma-Black-Polyester-Lycra-Trackpants-SDL160528143-1-3b1b1.jpeg"
  },
  {
    title: "Fastrack, Casio & more",
    description: "Watches",
    imgSrc:
      "https://rukminim1.flixcart.com/image/714/857/j1xvzbk0/watch/x/q/v/fs4682-fossil-original-imaetchmef8dzuyd.jpeg?q=50"
  }
];
export default class Contenta extends Component {
  render() {
    return (
      <div className="myantcard">
        <h1 style={{ textAlign: "center" }}> Top Brands </h1>
        <hr />
        <Row gutter={18}>
          {data.map((item, index) => {
            return (
              <Col span={8}>
                <Card
                  style={{ width: 400 }}
                  cover={<img alt="example" src={item.imgSrc} />}
                  actions={[
                    <Icon type="setting" key="setting" />,
                    <Icon type="edit" key="edit" />
                  ]}
                >
                  <Meta title={item.title} description={item.description} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

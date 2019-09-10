import React from "react";
import { Tree, Checkbox, Card, Layout, Row, Col } from "antd";

const { TreeNode } = Tree;
const { Meta } = Card;

const data = [
  {
    title: "Levis",
    description: "Men Printed Casual Spread Shirt",
    imgSrc:
      "https://rukminim1.flixcart.com/image/496/595/jtoorrk0/shirt/8/m/x/m-74638-0003-levi-s-original-imafezbbthgjkxtj.jpeg?q=50",
    price: 1800
  },
  {
    title: "Levis",
    description: "Men Printed Casual Spread Shirt",
    imgSrc:
      "https://rukminim1.flixcart.com/image/496/595/k05ljm80/shirt/g/s/j/m-34226-0032-levi-s-original-imafjuxxhhyxvxjg.jpeg?q=50",
    price: 3000
  },
  {
    title: "Lee",
    description: "Men Solid Casual Spread Shirt",
    imgSrc:
      "https://rukminim1.flixcart.com/image/496/595/jw2f6vk0/shirt/y/r/c/m-l34861cb0z17-lee-original-imafgrwzmfz3hhpf.jpeg?q=50",
    price: 1200
  },
  {
    title: "UCB",
    description: "Men Self Design Casual Spread Shirt",
    imgSrc:
      "https://rukminim1.flixcart.com/image/496/595/jp2xoy80/shirt/y/w/z/m-18a5sp22u008i-united-colors-of-benetton-original-imafbebxshhhshyt.jpeg?q=50",
    price: 1200
  },
  {
    title: "U.S. Polo",
    description: "Men Striped Casual Button Down Shirt",
    imgSrc:
      "https://rukminim1.flixcart.com/image/496/595/jza5uvk0/shirt/x/f/9/m-ussh9859-u-s-polo-association-original-imafjcfsu3mayrmb.jpeg?q=50",
    price: 1200
  },
  {
    title: "Mufti",
    description: "Men Checkered Casual Button Down Shirt",
    imgSrc:
      "https://rukminim1.flixcart.com/image/496/595/jb13te80/shirt/7/6/m/3xl-mfs-8773-f-06-khaki-mufti-original-imafyh35py4b3fum.jpeg?q=50",
    price: 1200
  },
  {
    title: "WROGN",
    description: "Men Checkered Casual Spread Shirt",
    imgSrc:
      "https://rukminim1.flixcart.com/image/496/595/jw6pifk0/shirt/c/d/9/44-8681961-wrogn-original-imafgwh9cvnxwngs.jpeg?q=50",
    price: 1200
  },
  {
    title: "Levis",
    description: "Men Solid Casual Spread Shirt",
    imgSrc:
      "https://rukminim1.flixcart.com/image/496/595/jseyoi80/shirt/x/n/s/m-32864-0049-levi-s-original-imafdzrzyjpn4zz5.jpeg?q=50",
    price: 2000
  }
];
class Filters extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <Tree
            showLine
            defaultExpandedKeys={["0-0-0"]}
            onSelect={this.onSelect}
          >
            <TreeNode title="Categories" key="0-0">
              <TreeNode title="Men Clothing" key="0-0-0">
                <TreeNode title="Formal Shirts" key="0-0-0-0" />
                <TreeNode title="Casual Shirts" key="0-0-0-1" />
                <TreeNode title="Party Wear Shirts" key="0-0-0-2" />
              </TreeNode>
              <TreeNode title="parent 1-1" key="0-0-1">
                <TreeNode title="leaf" key="0-0-1-0" />
              </TreeNode>
              <TreeNode title="parent 1-2" key="0-0-2">
                <TreeNode title="leaf" key="0-0-2-0" />
                <TreeNode title="leaf" key="0-0-2-1" />
              </TreeNode>
            </TreeNode>
          </Tree>

          <h3>Brand</h3>
          <ul style={{ listStyle: "none" }}>
            <li>
              {" "}
              <Checkbox onChange={this.onChange}>UCB</Checkbox>
            </li>
            <li>
              {" "}
              <Checkbox onChange={this.onChange}>Adidas</Checkbox>
            </li>
            <li>
              {" "}
              <Checkbox onChange={this.onChange}>Lee Cooper</Checkbox>
            </li>
            <li>
              {" "}
              <Checkbox onChange={this.onChange}>Superdry</Checkbox>
            </li>
            <li>
              <Checkbox onChange={this.onChange}>Levis</Checkbox>
            </li>
          </ul>

          <h3>Size</h3>
          <ul style={{ listStyle: "none" }}>
            <li>
              {" "}
              <Checkbox onChange={this.onChange}>XL</Checkbox>
            </li>
            <li>
              {" "}
              <Checkbox onChange={this.onChange}>L</Checkbox>
            </li>
            <li>
              {" "}
              <Checkbox onChange={this.onChange}>M</Checkbox>
            </li>
            <li>
              {" "}
              <Checkbox onChange={this.onChange}>S</Checkbox>
            </li>
          </ul>
        </div>

        <div>
          <Row gutter={16}>
            {data.map((item, index) => {
              return (
                <Col span={6}>
                  <Card
                    hoverable
                    // style={{ width: 240 }}
                    cover={
                      <img alt="example" src={item.imgSrc} height="250px" />
                    }
                  >
                    <Meta title={item.title} description={item.description} />
                    <p>price: {item.price}</p>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}

export default Filters;

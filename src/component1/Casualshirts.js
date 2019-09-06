import React from "react";
import { Tree, Checkbox, Card, Layout } from "antd";

const { TreeNode } = Tree;

const { Meta } = Card;
const Mystyle = {};
class Filters extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  render() {
    return (
      <Layout>
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
        </div>

        <div>
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
        </div>
        <div>
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

        <Layout>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img src="https://i.pinimg.com/originals/b2/b4/a9/b2b4a964863911928baf6686b43f8e79.jpg" />
            }
          >
            <Meta
              title="Wrangler"
              description="Mens Casual Shirt"
              extra={<a>Price : 1200</a>}
            />
          </Card>
        </Layout>
      </Layout>
    );
  }
}

export default Filters;

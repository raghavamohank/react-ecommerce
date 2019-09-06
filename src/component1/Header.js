import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import Contentt from "./Content";
import Filters from "./Casualshirts";

const { Header, Content, Footer } = Layout;

class Headerr extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Layout>
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
              <div className="logo" />
              {/* <img
                style={{
                  height: "100px",
                  width: "100px",
                  position: "relative"
                }}
                src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg"
              /> */}

              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{ lineHeight: "64px" }}
              >
                <Menu.Item key="1">
                  <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  {" "}
                  <Link to="/signup">Sign Up</Link>
                </Menu.Item>

                <Menu.Item key="3">
                  <Link to="/signin">Sign In</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/casualshirts"> Filters </Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: "0 50px", marginTop: 64 }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
                <Contentt />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </div>
      </div>
    );
  }
}

export default Headerr;

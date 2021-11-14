import React from "react";
import AdminNav from "../../Components/Organisms/AdminNav";
import { Tabs, Button, Menu, Dropdown, Space } from "antd";
import { Gap } from "../../Components/Atoms";
import { DownOutlined } from "@ant-design/icons";
import "./Product.css";

function callback(key) {
  console.log(key);
}

const Product = () => {
  const { TabPane } = Tabs;

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_self" rel="noopener noreferrer" href="#">
          Roasted
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_self" rel="noopener noreferrer" href="#">
          Green Bean
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <AdminNav title="Product" selectedMenu="product">
      <Gap height={24} />
      <div className="product-table">
        <div className="header d-flex justify-content-between align-items-lg-start">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="All Products (10)" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Lorem Ipsum (2)" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Lorem Ipsum (8)" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
          <Dropdown overlay={menu} placement="bottomCenter" trigger={["click"]}>
            <Button type="primary" className="d-flex align-items-md-center">
              Tambah Produk <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>
    </AdminNav>
  );
};

export default Product;

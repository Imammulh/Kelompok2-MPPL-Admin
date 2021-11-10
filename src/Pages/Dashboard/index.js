import { Layout, Typography, Menu, Avatar } from "antd";
import React from "react";
import { Logo56 } from "../../Assets";
import { Gap } from "../../Components/Atoms";
import "./Dashboard.css";
import {
  BarChartOutlined,
  VideoCameraOutlined,
  FileOutlined,
  UserOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

const Dashboard = () => {
  const { Header, Sider, Content } = Layout;
  const { Title } = Typography;
  return (
    <Layout>
      <Sider theme="light" className="side-bar">
        <div className="brand d-flex flex-row justify-content-center align-items-center">
          <img src={Logo56} alt="logo-sangrai-kopi" className="brand-logo" />
          <Gap width={8} />
          <Title level={5}>Sangrai Kopi</Title>
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<BarChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Product
          </Menu.Item>
          <Menu.Item key="3" icon={<FileOutlined />}>
            Pages
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <div className="header-content d-flex ">
            <div className="col-6 my-auto">
              <Title level={4} className="text-light">
                Dashboard
              </Title>
            </div>
            <div className="col-6">
              <div className="user-admin d-flex justify-content-end align-items-center">
                <Avatar size={32} icon={<UserOutlined />} />
                <Gap width={8} />
                <p className="text-light align-self-center">Admin 1</p>
                <Gap width={8} />
                <CaretDownOutlined size={12} className="text-light" />
              </div>
            </div>
          </div>
        </Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;

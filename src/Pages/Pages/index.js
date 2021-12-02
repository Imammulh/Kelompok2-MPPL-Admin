import React from "react";
import { Gap } from "../../Components/Atoms";
import AdminNav from "../../Components/Organisms/AdminNav";
import { Typography, Button, Table } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Line } from "@ant-design/charts";
import { Nav } from "react-bootstrap";
import "./Pages.css";

const Pages = () => {
// Table data
  const columns = [
    {
      title: "Name Page",
      dataIndex: "namePage",
      key: "namePage",
    },
    {
      title: "Permalink",
      dataIndex: "permalink",
      key: "permalink",
    },
    {
      title: "Aksi",
      dataIndex: "aksi",
      key: "aksi",
    },

  ];

  const dataTable = [
    {
      key: "0",
      namePage: "Home",
      permalink: "sangraikopi.com/",
      aksi:<Button type="warning" className="d-flex align-items-md-center">
              ...
           </Button>,
    },
    {
      key: "1",
      namePage: "About us",
      permalink: "sangraikopi.com/about-us",
      aksi:<Button type="warning" className="d-flex align-items-md-center">
              ...
           </Button>,
    },
    {
      key: "2",
      namePage: "Katalog",
      permalink: "sangraikopi.com/katalog",
      aksi:<Button type="warning" className="d-flex align-items-md-center">
              ...
           </Button>,
    },
  ];
  // End table data  
  
  return (
    <AdminNav title="Pages" selectedMenu="pages">
      <div className="page-visits-section">
        <Gap height={16} />
        <div className="table">
          <Table columns={columns} dataSource={dataTable} />
        </div>
      </div>
    </AdminNav>

  );
};

export default Pages;

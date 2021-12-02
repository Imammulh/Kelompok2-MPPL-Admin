import React from "react";
import AdminNav from "../../Components/Organisms/AdminNav";
import Gap from "../../Components/Atoms/Gap";
import { Form, Input, InputNumber, Select, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "./Roasted.css";

export const RoastedForm = () => {
  const { Dragger } = Upload;

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <AdminNav title="Tambah Produk Roasted" selectedMenu="product">
      <Gap height={24} />
      <div className="roasted">
        <Form layout="vertical" wrapperCol={{ span: 14 }}>
          <Form.Item
            name="Nama Produk"
            label="Nama Produk"
            rules={[{ required: true }]}
          >
            <Input placeholder="Masukkan nama produkmu" />
          </Form.Item>
          <Form.Item
            name="Permalink"
            label="Permalink"
            rules={[{ required: true }]}
          >
            <Input
              value={"Same value with above"}
              placeholder="Masukkan permalink"
            />
          </Form.Item>
          <Form.Item
            name="Jenis Produk"
            label="Jenis Produk"
            rules={[{ required: true }]}
          >
            <Select placeholder="Pilih jenis produk">
              <Select.Option value="filter single">Filter Single</Select.Option>
              <Select.Option value="filter blend">Filter Blend</Select.Option>
              <Select.Option value="espresso single">
                Espresso Single
              </Select.Option>
              <Select.Option value="espresso blend">
                Espresso Blend
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="Berat Bersih (Gram)"
            label="Berat Bersih (Gram)"
            rules={[{ required: true }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="Harga (Rupiah)"
            label="Harga (Rupiah)"
            rules={[{ required: true }]}
          >
            <InputNumber addonBefore="+" addonAfter="$" />
          </Form.Item>
          <Form.Item
            name="Foto Produk"
            label="Foto Produk"
            rules={[{ required: true }]}
          >
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Klik atau geser foto berukuran 560x560 pada area ini untuk
                mengupload
              </p>
            </Dragger>
          </Form.Item>
        </Form>
      </div>
    </AdminNav>
  );
};

export default RoastedForm;

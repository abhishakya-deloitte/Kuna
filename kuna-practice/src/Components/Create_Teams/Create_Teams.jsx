import "./create_teams.css";
import add from "../../assets/images/add_notes.png";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from "antd";

export default function Create_Teams() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="teams-1">
      <div className="heading-teams">Manage Teams</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "5rem",
          marginTop: "4rem",
        }}
      >
        <div style={{ fontSize: "14px" }}>
          <span style={{ color: "#6D8C32" }}>Home > Manage Teams ></span> Create
          Team
        </div>
        <div style={{ display: "flex", gap: "1.5rem", marginRight: "4rem" }}>
          <div className="box-1">
            <span className="box-text" style={{ color: "#6A7178" }}>
              Cancel
            </span>
          </div>
          <div className="box-2">
            <span className="box-text" style={{ color: "white" }}>
              Save Details
            </span>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: " 5rem", display: "flex" }}>
        <img src={add} alt="" />
        <span
          style={{ marginLeft: "0.4rem", fontSize: "16px", fontWeight: "500" }}
        >
          <b> Team Detail</b>
        </span>
      </div>
      <div>
        <Form
          name="add_teams"
          labelCol={{ span: 12, offset: 0 }}
          wrapperCol={{ span: 24, offset: 5 }}
          layout="inline"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          size="large"
        >
          <div style={{ display: "flex", gap: "18rem" }}>
            <Form.Item label="Team Name" name="team_name">
              <Input placeholder="Placeholder" />
            </Form.Item>

            <Form.Item label="Activity Name" name="activity_name">
              <Input placeholder="Placeholder" />
            </Form.Item>
            <Form.Item label="Team Members" name="team_member">
              <Input.Search placeholder="Find an Employee" />
            </Form.Item>
          </div>
          <div>
            <Form.Item label="Upload" valuePropName="fileList">
              <div style={{border:"1px dashed #CED4DA",borderRadius:"8px",backgroundColor:"rgba(109, 140, 50, 0.1)",width:"78rem",height:"15rem",marginLeft:"-10.5rem"}}>
                <Upload action="/upload.do" listType="picture">
                  <div style={{}}>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
          
          
              </div>
            </Form.Item>
          </div>
          <div
          //  style={{marginTop:"10rem"}}
          >
            <Form.Item wrapperCol={{ offset: 4, span: 0 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

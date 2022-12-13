import React from "react";
import "./Navbar.css";
import img1 from "../../../Assets/Images/image202.png";
import { BellOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
export default function Navbar() {
  return (
    <div className="Nav-Bar">
      <div className="box1">
        <img src={img1} alt="" className="FirstImage" />
        <span className="Heading-Navbar">Kunakizda</span>
        <BellOutlined className="Bell-Icon" />
      </div>
      <div className="box2">
        <span className="UserName">User Name</span>
        <Avatar size="large" icon={<UserOutlined/>} className="UserAvatar" />
      </div>
    </div>
  );
}

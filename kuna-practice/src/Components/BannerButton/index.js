import React from "react";
import "./index.css";
import { RightOutlined, FireFilled } from "@ant-design/icons/";

const Index = () => {
  return (
    <div id="back-div">
      <div id="front-div">
        <div id="front-div-left">
          <FireFilled
            style={{
              fontSize: "32px",
            }}
          />
        </div>
        <div id="front-div-right">
          <div id="front-div-right-top">
            <span id="activity-text">Sports</span>
          </div>
          <div id="front-div-right-bottom">
            <span id="task-text">Running</span>
          </div>
        </div>
      </div>
      <div id="arrow">
        <div id="lower-back-box">
          <div id="lower-front-box"></div>
        </div>
        <div id="arrow-icon">
          <RightOutlined
            style={{
              fontSize: "20px",
              fontWeight: "800",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

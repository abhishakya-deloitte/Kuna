import React from "react";
import "./Dashboard.css";

import { Carousel } from "antd";
const contentStyle = {
  height: "30vh",
  marginTop: "0px",
  color: "#fff",
  lineHeight: "8rem",
  textAlign: "center",
  background: "#364d79",
};

export default function Dashboard() {
  return (
    <div>
      <div className="dashboard-top-box">
        <div className="dashboard_Box1">
          <div className="main-text" style={{ marginTop: "6vh" }}>
            <b> Unclock your inner Zen</b>
          </div>
          <div className="main-text">
            <u>
              <b>Join our Community!</b>
            </u>
          </div>
        </div>
        <div className="dashboard_Box2">
          <Carousel effect="fade" style={{ width: "47.4vw" }}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="dashboard-middle-box">
        <div>personal stats</div>
        <div>wall of flame</div>
      </div>
      <div className="event-box">
        Upcoming events
        <div className="inside-event">
          events
          <div className="event_card_1">Card1</div>
        </div>
      </div>
    </div>
  );
}

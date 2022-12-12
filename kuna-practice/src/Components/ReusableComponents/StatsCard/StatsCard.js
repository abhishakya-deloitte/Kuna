import React from 'react'
import { StarFilled,RightOutlined } from '@ant-design/icons'
import './StatsCard.css'

export default function Card2() {
    return (
        <div>
            <div className="plain-card">
                <div style={{ display: "flex" }}>
                    <div className="white-box">
                        <div className="circle">
                            <StarFilled className="star-icon " />
                        </div>
                    </div>
                    <div className="content">
                        <div style={{ marginTop: "0.5rem" }}>
                            <span className="first-text"> 3rd</span>
                            <span style={{ color: "white" }}> / 80</span>
                        </div>
                        <span className="first-text">Ranking </span>
                    </div>
                </div>
                <div className="arrow-box">
      <RightOutlined className="arrow"/>
      </div>

      </div>
            </div>
            )
}

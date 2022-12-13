import React from "react";
import "./Activities.css";
import { CaretDownOutlined } from "@ant-design/icons";
import { RightOutlined, FireFilled } from "@ant-design/icons/";
import img3 from "../../assets/images/Extra.png"
import { StarFilled } from "@ant-design/icons";

export default function Activities() {
  return (
    <div className="activity-page">
      <div className="heading-activity">
        <div className="first_heading">Activities</div>
        <div className="second_heading">
          Sort <CaretDownOutlined />
        </div>
      </div>
      <div className="green-cards">
        
          <div className="first-layer">
            <div className="second-layer">
                <div>
                    Card
                </div>
            <div>
            <img src={img3} alt="" className="card-second-part"/>
            wow
            </div>
                 </div>
          </div>
        

          <div className="first-layer">
            <div className="second-layer">
                <div>
                    Card222
                </div>
            <div>
            <img src={img3} alt="" className="card-second-part"/>
            
            </div>
                 </div>


          </div> <div className="first-layer">
            <div className="second-layer">
                <div >
                    Card
                </div>
            <div>
            <img src={img3} alt="" className="card-second-part"/>

            </div>
                 </div>
          </div> <div className="first-layer">
            <div className="second-layer">
                <div>
                    Card
                </div>
            <div>
            <img src={img3} alt="" className="card-second-part"/>

            </div>
                 </div>
          </div>
      </div>

      <div className="plain-card">
      <div style={{display:"flex"}}>

      <div className="white-box">
      <div className="circle">
      <StarFilled className="star-icon " />
      </div>
      </div>
      <div className="content">
        <div style={{marginTop:"0.5rem"}}>
        <span className="first-text"> 3rd</span>
        <span style={{color:"white"}}> / 80</span>
        </div>
        <span className="first-text">Ranking </span>
      </div>

      </div>

      <div className="arrow-box">
      <RightOutlined className="arrow"/>

      </div>
      </div>
    </div>
  );
}

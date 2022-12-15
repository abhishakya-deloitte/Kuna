import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateTeam.css";
import add from "../../../Assets/Images/add_notes.png";
import gallery from "../../../Assets/Images/gallery.png";
import { Col, Row } from "antd";
import { Button } from "antd";
import { Form, Input, Upload } from "antd";
import DetailCard from "./DetailCard/DetailCard";
import DummyData from './DummyData'
export default function CreateTeam() {
  const navigate = useNavigate()
  const [searchData, setSearchData] = useState(DummyData)

  const handleSearch = (searchText) => {
    if (searchText === '' || searchText === ' ') {
      setSearchData(DummyData)
      return;
    }

    let filterData = []
    filterData = searchData.filter((itemObj) => {
      let name = itemObj.name.trim().toLowerCase();
      let result1 = name.includes(searchText.toLowerCase())
      if (result1) {
        return result1;
      }
      let email = itemObj.email.trim().toLowerCase();
      let result2 = email.includes(searchText.toLowerCase())
      return result1 || result2;
    })
    setSearchData(filterData)
  }

  const cancel = () => {
    navigate('/manageteams')
  }
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
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
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            gap: "1.5rem",
            marginRight: "4rem",
          }}
        >
          <Button className="box-1" onClick={cancel}>Cancel</Button>

          <Button className="box-2">
            <span style={{ color: "white" }}>Save Details</span>
          </Button>
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
          labelCol={{ span: 9, offset: 2 }}
          wrapperCol={{ span: 24, offset: 0 }}
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          size="large"
        >
          <Row>
            <Col span={16}>
              <div
                style={{
                  display: "flex",
                  marginLeft: "-4rem",
                  justifyContent: "space-around",
                }}
              >
                <Form.Item label="Team Name" name="team_name">
                  <Input placeholder="Placeholder" />
                </Form.Item>

                <Form.Item label="Activity Name" name="activity_name">
                  <Input placeholder="Placeholder" />
                </Form.Item>
              </div>
              <div
                style={{
                  marginLeft: "6rem",
                }}
              >
                <Form.Item valuePropName="fileList">
                  <div style={{ textAlign: "start" }}>Add Logo:</div>
                  <div
                    style={{
                      border: "1px dashed #CED4DA",
                      borderRadius: "8px",
                      backgroundColor: "rgba(109, 140, 50, 0.1)",
                      width: "60rem",
                      height: "15rem",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Upload action="/upload.do" listType="picture">
                      <div style={{ textAlign: "center" }}>
                        <img src={gallery} alt="" className="gallery-image" />
                        <div style={{ marginTop: 8 }} className="box-text">
                          <b>Drop your image here, or Browse</b>
                        </div>
                      </div>
                    </Upload>
                  </div>
                </Form.Item>
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "-4rem",
                  justifyContent: "space-around",
                }}
              >
                <Form.Item label="Team Size" name="team_size">
                  <Input placeholder="Placeholder" />
                </Form.Item>

                <Form.Item label="Team Lead" name="team_lead">
                  <Input placeholder="Placeholder" />
                </Form.Item>
              </div>
            </Col>
            <Col span={8}>
              <div
                style={{
                  marginLeft: "0px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Form.Item label="Team Members" name="team_member">
                  <Input.Search placeholder="Find an Employee" onChange={(e) => handleSearch(e.target.value)} />
                </Form.Item>
              </div>
              <div style={{ height: "23.5rem", border: '1px solid #f8f3f3', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="frequent-search" style={{ width: '80%', height: '3.5rem', border: '1px solid #f8f3f3' }}>

                </div>
                <div className="list-members" style={{ width: '80%', height: '20rem', border: '1px solid #f8f3f3' }}>
                  {searchData.map((d) => {
                    return <DetailCard details={d} />
                  })}
                </div>

              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "10px",
                  gap: "1.5rem",
                  marginRight: "5rem",
                }}
              >
                <Button className="box-1">Cancel</Button>

                <Button className="box-2">
                  <span style={{ color: "white" }}>Add Team</span>
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>

      {/* <div>
        <Form
          name="add_teams"
          labelCol={{ span: 9 }}
          wrapperCol={{ span: 20, offset: 2 }}
          layout="inline"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          size="large"
        >


          <div
            style={{
              display: "flex",
              marginLeft: "3.2rem",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Form.Item label="Team Name" name="team_name">
              <Input placeholder="Placeholder" />
            </Form.Item>

            <Form.Item label="Activity Name" name="activity_name">
              <Input placeholder="Placeholder" />
            </Form.Item>
            <span style={{ marginRight: "15px" }}>
              <Form.Item label="Team Members" name="team_member">
                <Input.Search placeholder="Find an Employee" />
              </Form.Item>
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "9px",
            }}
          >
            <Form.Item valuePropName="fileList">
              <div style={{ textAlign: "start", marginLeft: "0px" }}>
                Add Logo:
              </div>
              <div
                style={{
                  border: "1px dashed #CED4DA",
                  borderRadius: "8px",
                  backgroundColor: "rgba(109, 140, 50, 0.1)",
                  width: "60rem",
                  height: "15rem",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Upload action="/upload.do" listType="picture">
                  <div style={{ textAlign: "center" }}>
                    <img src={gallery} alt="" className="gallery-image" />
                    <div style={{ marginTop: 8 }} className="box-text">
                      <b>Drop your image here, or Browse</b>
                    </div>
                  </div>
                </Upload>
              </div>
            </Form.Item>
            <div style={{ width: "15rem" }}></div>
          </div>

          {/* <div
          //  style={{marginTop:"10rem"}}
          >
            <Form.Item wrapperCol={{ offset: 4, span: 0 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div> 
        </Form>
      </div> */}
    </div>
  );
}

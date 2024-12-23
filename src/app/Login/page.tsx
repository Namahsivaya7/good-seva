"use client";
import "../styles/LoginPage.css";
import {
  FacebookOutlined,
  GoogleOutlined,
  MobileOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import { Button, Col, Divider, Flex, Input, Row, Typography } from "antd";

export default function LoginPage() {
  return (
    <div className="bg-lp">
      <div>
        <Row >
          <Col xs={0} sm={4} lg={8}></Col>
          <Col lg={8} xs={24} sm={16} className="bg-lp-div">
            <Flex
              justify="space-between"
              style={{
                margin: 20,
                border: "1px solid black",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderColor: "#B0B0B0",
              }}
            >
              <Typography.Title
                id="offeringTxt"
                style={{
                  fontFamily: "El Messiri",
                  fontSize: 45,
                  fontWeight: 700,
                  marginTop: 20,
                }}
              >
                goodSeva
              </Typography.Title>
              <Typography.Title style={{ fontSize: 30, fontWeight: 500 }}>
                LOGIN
              </Typography.Title>
            </Flex>

            <Typography.Title
              style={{ textAlign: "center", fontSize: 24 }}
              level={3}
            >
              Very good works are waiting for you
            </Typography.Title>
            <div className="input-details">
              <Input
                size="large"
                placeholder="Enter your Registered Phone Number/Email"
                prefix={<MobileOutlined />}
                className="input-login"
              />
              <Button id="otp-button">Get OTP</Button>
            </div>
            <div className="providers">
              <Divider style={{ borderColor: "lightgray" }}>
                <span>
                  <b>Login</b>
                </span>{" "}
                <span style={{ color: "#525252" }}>With Others</span>
              </Divider>
              <Flex justify="center" gap={30}>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="google-logo"
                />
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/facebook.png"
                  alt="facebook"
                />
              </Flex>
            </div>
          </Col>
          <Col sm={4} xs={0} lg={8}></Col>
        </Row>
      </div>
    </div>
  );
}

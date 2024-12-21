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
        <Row>
          <Col sm={8}></Col>
          <Col sm={8} className="bg-lp-div">
            <Flex justify="space-evenly" style={{ marginTop: 40 }}>
              <Typography.Title id="offeringTxt">goodSeva</Typography.Title>
              <Typography.Title style={{ marginTop: 0 }}>
                LOGIN
              </Typography.Title>
            </Flex>
            <Divider variant="solid" style={{ borderColor: "lightgray" }} />
            <Typography.Title style={{ textAlign: "center" }} level={3}>
              Very good works are waiting for you
            </Typography.Title>
            <div  className="input-details">
              <Input
                size="large"
                placeholder="Enter your Registered Phone Number/Email"
                prefix={<MobileOutlined />}
                style={{ padding: 20 }}
              />
              <Button
                type="primary"
                danger
                id="otp-button"
               
              >
                <PhoneFilled />
                Get OTP
              </Button>
            </div>
            <div  className="providers">
              <Divider style={{ borderColor: "lightgray" }}>
                <span>
                  <b>Login</b>
                </span>{" "}
                With Others
              </Divider>
              <Flex justify="space-evenly">
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
          <Col sm={8}></Col>
        </Row>
      </div>
    </div>
  );
}

"use client";
import "../styles/RegisterPage.css";
import { MailOutlined, MobileOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Flex, Input, Row, Typography } from "antd";

export default function RegisterPage() {
  return (
    <div className="bg-lp">
      <Row style={{ height: "100vh" }}>
        <Col sm={14}></Col>

        <Col sm={10} className="bg-lp-div">
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
            <Typography.Title id="offeringTxt">goodSeva</Typography.Title>
            <Typography.Title level={2} id="Text-Register">
              REGISTER
            </Typography.Title>
          </Flex>

          <Typography.Title
            style={{ margin: 20, fontSize: 24, textAlign: "center" }}
            level={3}
          >
            Very good works are waiting for you
          </Typography.Title>
          <Flex className="input-details" vertical gap={30} align="flex-end">
            <Input
              size="large"
              placeholder=" Mobile Number"
              prefix={<MobileOutlined />}
              style={{ padding: 20, borderRadius: 8 }}
            />
            <Input
              size="large"
              placeholder=" Email"
              prefix={<MailOutlined />}
              style={{ padding: 20, borderRadius: 8 }}
            />
            <Button id="otp-button">Get OTP</Button>
          </Flex>
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
      </Row>
    </div>
  );
}

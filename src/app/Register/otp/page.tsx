"use client";
import "../../styles/OtpPage.css";
import { PhoneFilled } from "@ant-design/icons";
import { Button, Col, Divider, Flex, Input, Row, Typography } from "antd";

import type { GetProps } from "antd";
import Link from "next/link";

type OTPProps = GetProps<typeof Input.OTP>;

export default function OtpPage() {
  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
  };

  const onInput: OTPProps["onInput"] = (value) => {
    console.log("onInput:", value);
  };

  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };
  return (
    <div className="bg-lp">
      <Row >
        <Col sm={14} style={{ padding: 18 }}>
          <Flex gap={5}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99996 0.666504L11.575 5.88317L17.3333 6.72484L13.1666 10.7832L14.15 16.5165L8.99996 13.8082L3.84996 16.5165L4.83329 10.7832L0.666626 6.72484L6.42496 5.88317L8.99996 0.666504Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <Flex vertical gap={5}>
              <Typography.Text style={{ color: "#FFFFFF80" }}>
                Your Registered Email/Phone Number
              </Typography.Text>
              <span style={{ color: "white" }}>8367076177</span>
            </Flex>
          </Flex>
        </Col>

        <Col sm={10} className="bg-lp-div" >
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
            style={{ fontSize: 24, textAlign: "center" }}
            level={3}
          >
            Very good works are waiting for you
          </Typography.Title>

          <Flex className="input-details" vertical>
            <Flex align="flex-start" vertical justify="center">
              <Input.OTP {...sharedProps} mask="*" size="large" id="otp-inputs" />
            </Flex>
            <Flex justify="center" style={{ padding: 20 }} gap={100}>
              <Link href="/Register" style={{ color: "#7F1126" }}>
                Change Email/Phone number
              </Link>
              <Button id="otp-button">Verify</Button>
            </Flex>
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

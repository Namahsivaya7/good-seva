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
      <div>
        <Row>
          <Col sm={12} style={{padding:8}}>
            <Typography.Text style={{ color: "white" }}>
              Your Registered Email/Phone Number
            </Typography.Text>
          </Col>

          <Col sm={12} className="bg-lp-div">
            <Flex justify="space-evenly" style={{ marginTop: 40 }}>
              <Typography.Title id="offeringTxt">goodSeva</Typography.Title>
              <Typography.Title style={{ marginTop: 0, fontWeight: 400 }}>
                REGISTER
              </Typography.Title>
            </Flex>
            <Divider variant="solid" style={{ borderColor: "lightgray" }} />
            <Typography.Title style={{ textAlign: "center" }} level={3}>
              Very good works are waiting for you
            </Typography.Title>

            <Flex className="input-details" vertical>
              <Flex vertical>
                <Input.OTP {...sharedProps} />
              </Flex>
              <Flex justify="space-between" style={{ padding: 20 }}>
                <Link href="/Register">Change Email/Phone number</Link>
                <Button type="primary" danger id="otp-button">
                  Verify
                </Button>
              </Flex>
            </Flex>
            <div className="providers">
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
        </Row>
      </div>
    </div>
  );
}

"use client";
import "../../styles/Step1.css";

import {
  Button,
  Col,
  Divider,
  Flex,
  Input,
  Row,
  Space,
  Typography,
} from "antd";

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
    <div className="main-register">
      <Row>
        <Col
          lg={24}
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: 14,
            fontWeight: 400,
          }}
          sm={24}
          xs={24}
        >
          <Flex justify="center">
            <Space className="header-number">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_823_2303)">
                  <path
                    d="M14.6667 11.2802V13.2802C14.6675 13.4659 14.6294 13.6497 14.555 13.8198C14.4807 13.9899 14.3716 14.1426 14.2348 14.2681C14.0979 14.3937 13.9364 14.4892 13.7605 14.5487C13.5847 14.6082 13.3983 14.6303 13.2134 14.6136C11.1619 14.3907 9.19137 13.6897 7.46004 12.5669C5.84926 11.5433 4.48359 10.1777 3.46004 8.56689C2.33336 6.8277 1.6322 4.84756 1.41337 2.78689C1.39671 2.60254 1.41862 2.41673 1.4777 2.24131C1.53679 2.06589 1.63175 1.90469 1.75655 1.76797C1.88134 1.63126 2.03324 1.52203 2.20256 1.44724C2.37189 1.37245 2.55493 1.33374 2.74004 1.33356H4.74004C5.06357 1.33038 5.37723 1.44495 5.62254 1.65592C5.86786 1.86689 6.02809 2.15986 6.07337 2.48023C6.15779 3.12027 6.31434 3.74871 6.54004 4.35356C6.62973 4.59218 6.64915 4.8515 6.59597 5.10081C6.5428 5.35012 6.41928 5.57897 6.24004 5.76023L5.39337 6.60689C6.34241 8.27592 7.72434 9.65786 9.39337 10.6069L10.24 9.76023C10.4213 9.58099 10.6501 9.45746 10.8994 9.40429C11.1488 9.35112 11.4081 9.37053 11.6467 9.46023C12.2516 9.68593 12.88 9.84248 13.52 9.92689C13.8439 9.97258 14.1396 10.1357 14.3511 10.3852C14.5625 10.6348 14.6748 10.9533 14.6667 11.2802Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_823_2303">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span> +91 864 6444 2222</span>
            </Space>

            <Space className="header-mail">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66659 2.6665H13.3333C14.0666 2.6665 14.6666 3.2665 14.6666 3.99984V11.9998C14.6666 12.7332 14.0666 13.3332 13.3333 13.3332H2.66659C1.93325 13.3332 1.33325 12.7332 1.33325 11.9998V3.99984C1.33325 3.2665 1.93325 2.6665 2.66659 2.6665Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.6666 4L7.99992 8.66667L1.33325 4"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span> info@suvega.com</span>
            </Space>
          </Flex>
        </Col>
      </Row>
      <Row>
        <Col lg={24} style={{ width: "100%", height: 50 }} sm={0} xs={0}></Col>
      </Row>
      <div className="bg-register-card">
        <Row>
          <Col lg={4} sm={0}></Col>

          <Col sm={24} lg={8} xs={24} className="left-register-div">
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

          <Col sm={24} className="bg-lp-div" lg={8} xs={24}>
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
              style={{ fontSize: 24, textAlign: "center", fontWeight: 500 }}
              level={5}
            >
              Using this App for
            </Typography.Title>

            <Flex vertical gap={30} className="company-div">
              <Button
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 18L12 14.95L16 18L14.5 13.05L18.5 10.2H13.6L12 5L10.4 10.2H5.5L9.5 13.05L8 18ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                      fill="#49454F"
                    />
                  </svg>
                }
                style={{
                  width: "157px",
                  height: "42px",
                  backgroundColor: "#FEC6D1",
                }}
              >
                Company
              </Button>
              <Button
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V20H4ZM6 18H18V17.2C18 17.0167 17.9542 16.85 17.8625 16.7C17.7708 16.55 17.65 16.4333 17.5 16.35C16.6 15.9 15.6917 15.5625 14.775 15.3375C13.8583 15.1125 12.9333 15 12 15C11.0667 15 10.1417 15.1125 9.225 15.3375C8.30833 15.5625 7.4 15.9 6.5 16.35C6.35 16.4333 6.22917 16.55 6.1375 16.7C6.04583 16.85 6 17.0167 6 17.2V18ZM12 10C12.55 10 13.0208 9.80417 13.4125 9.4125C13.8042 9.02083 14 8.55 14 8C14 7.45 13.8042 6.97917 13.4125 6.5875C13.0208 6.19583 12.55 6 12 6C11.45 6 10.9792 6.19583 10.5875 6.5875C10.1958 6.97917 10 7.45 10 8C10 8.55 10.1958 9.02083 10.5875 9.4125C10.9792 9.80417 11.45 10 12 10Z"
                      fill="#1D1B20"
                    />
                  </svg>
                }
                style={{
                  width: "157px",
                  height: "42px",
                  backgroundColor: "#FEC6D1",
                }}
              >
                Personal
              </Button>
            </Flex>
            <Row>
              <Col lg={1}></Col>
              <Col lg={23} className="backgoing-btn">
                <Button
                  shape="circle"
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.75 10H1.25M1.25 10L10 18.75M1.25 10L10 1.25"
                        stroke="#1E1E1E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                  onClick={() => window.history.back()}
                ></Button>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={0} xs={0}></Col>
        </Row>
      </div>
      <Row>
        <Col lg={24} style={{ width: "100%", height: 50 }} sm={0} xs={0}></Col>
      </Row>
    </div>
  );
}

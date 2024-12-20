"use client";
import Image from "next/image";
import "../page.module.css";
import { Col, Divider, List, Rate, Row } from "antd";
import happy from "../../../public/happy.jpg";
import Title from "antd/es/typography/Title";

export default function Lp2() {
  return (
    <Row
      style={{
        width: "100%",
        margin: 0,
      }}
      gutter={[16, 16]}
    >
      <Col xs={0} sm={2}></Col>

      <Col
        xs={24}
        sm={10}
        style={{
          width: "100%",
          padding: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Title style={{ textAlign: "justify", fontWeight: 600 }}>
            Why We're Your Top Choice for Loads Transport
          </Title>

          <div>
            <List>
              <Title level={2}>Experienced Professionals</Title>
              <List.Item>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus pariatur iure tempora delectus blanditiis esse vel.
                Eligendi enim esse dolorem magni facilis sed, culpa facere
                dolorum aut, odit eveniet corrupti placeat, aliquid nisi minus
                sint ducimus.
              </List.Item>
              <Divider variant="solid" style={{ borderColor: "black" }} />
            </List>

            <List>
              <Title level={2}>Tailored Solutions</Title>
              <List.Item>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus pariatur iure tempora delectus blanditiis esse vel.
                Eligendi enim esse dolorem magni facilis sed, culpa facere
                dolorum aut, odit eveniet corrupti placeat, aliquid nisi minus
                sint ducimus.
              </List.Item>
              <Divider variant="solid" style={{ borderColor: "black" }} />
            </List>

            <List>
              <Title level={2}>Efficiency and Timeliness</Title>
              <List.Item>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus pariatur iure tempora delectus blanditiis esse vel.
                Eligendi enim esse dolorem magni facilis sed, culpa facere
                dolorum aut, odit eveniet corrupti placeat, aliquid nisi minus
                sint ducimus.
              </List.Item>
            </List>
          </div>
        </div>
      </Col>

      <Col xs={0} sm={2}></Col>
      <Col
        xs={24}
        sm={7}
        style={{
          width: "100%",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Image
            src={happy}
            alt="Happy person"
            style={{
              borderRadius: "30px",
              width: "100%",
              height: "auto",
            }}
          />

          <div
            style={{
              height: "200px",
              backgroundColor: "black",
              borderRadius: "30px",
              color: "white",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <Rate value={5} />
            <Title level={3} style={{ color: "white" }}>
              4.8% From customers
            </Title>
            <Title level={5} style={{ color: "white" }}>
              Lorem morbi et amet suscipit
            </Title>
          </div>
        </div>
      </Col>
      <Col xs={0} sm={2}></Col>
    </Row>
  );
}

import { Col, Divider, Flex, Row, Typography } from "antd";
import Image from "next/image";
import worker from "../../../public/happiness.png";
import Title from "antd/es/typography/Title";
import "../styles/LandingPage.css";

export default function Lp6() {
  return (
    <div>
      <Row style={{ display: "flex", gap: 30 }} className="main-Lp6">
        <Col sm={2} xs={0}></Col>
        <Col sm={8} xs={24}>
          <Flex vertical gap={10}>
            <Image src={worker} alt="worker" className="Lp6-Img"></Image>
            <Flex vertical>
              <Title level={4} style={{ fontSize: 32, fontWeight: 400 }}>
                Contact Our Expert
              </Title>
              <Typography.Text
                style={{ fontWeight: 400, fontSize: 16, color: "#98A393" }}
              >
                Reach Out to Our Professionals
              </Typography.Text>
              <Typography.Text
                style={{ fontWeight: 400, fontSize: 16, color: "#98A393" }}
              >
                for Moving Advice
              </Typography.Text>
            </Flex>
          </Flex>
        </Col>
        <Col sm={11} xs={24} style={{ width: "100%" }}>
          <Title level={2} style={{ fontSize: 48, fontWeight: 400 }}>
            The <span id="offeringTxt">Step-by-Step</span> Guide to Your
            Seamless Loads
          </Title>

          <Typography.Paragraph
            style={{ fontSize: 18, fontWeight: 400, color: "#808380" }}
          >
            <span style={{ color: "black" }}>
              Initial Consultation and Assessment -
            </span>
            Lorem morbi et amet suscipit. At sed proin quis risus urna a. Magna
            in odio in urna amet ultrices fermentum. Mauris in pretium eget.
            <Divider variant="solid" style={{ borderColor: "#DEE2DD" }} />
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{ fontSize: 18, fontWeight: 400, color: "#808380" }}
          >
            <span style={{ color: "black" }}>Customized Moving Plan - </span>
            Lorem morbi et amet suscipit. At sed proin quis risus urna a. Magna
            in odio in urna amet ultrices fermentum. Mauris in pretium eget.
            <Divider variant="solid" style={{ borderColor: "#DEE2DD" }} />
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{ fontSize: 18, fontWeight: 400, color: "#808380" }}
          >
            <span style={{ color: "black" }}>
              Packing and Transportation -{" "}
            </span>
            Lorem morbi et amet suscipit. At sed proin quis risus urna a. Magna
            in odio in urna amet ultrices fermentum. Mauris in pretium eget.
            <Divider variant="solid" style={{ borderColor: "#DEE2DD" }} />
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{ fontSize: 18, fontWeight: 400, color: "#808380" }}
          >
            <span style={{ color: "black" }}>Delivery and Unpacking - </span>
            Lorem morbi et amet suscipit. At sed proin quis risus urna a. Magna
            in odio in urna amet ultrices fermentum. Mauris in pretium eget.
          </Typography.Paragraph>
        </Col>
        <Col sm={2} xs={0}></Col>
      </Row>
    </div>
  );
}

import { Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
import lorry from "../../../public/Lorry.jpg";
import Title from "antd/es/typography/Title";
import "../styles/LandingPage.css";

export default function Lp3() {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "black",
      }}
      className="L3Main"
    >
      <Row gutter={[16, 16]} justify="center">
        <Flex justify="center" gap={50} wrap>
          <Col xs={24} sm={20} md={10} lg={8}>
            <Image
              src={lorry}
              alt="lorry"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 30,
              }}
            />
          </Col>
          <Col xs={24} sm={20} md={12} lg={10}>
            <div>
              <Title level={2} style={{ color: "white" }}>
                <span style={{ color: "yellow" }}>About Us:</span> Your Reliable
              </Title>
              <Title level={2} style={{ color: "white" }}>
                Goods Moving Partner
              </Title>
              <Typography.Paragraph
                style={{
                  color: "white",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                earum esse tenetur fugiat quam cumque consequuntur provident
                laudantium? Distinctio, accusantium. Ullam sint similique modi
                vel iure temporibus cumque ea cum, porro architecto illum ab
                odit quos nisi soluta reiciendis dignissimos fuga expedita
                necessitatibus dolore atque. Veritatis deserunt excepturi
                eligendi doloribus molestiae porro aperiam. Laudantium,
                molestias nemo consequatur cupiditate harum ea! Culpa aperiam
                fuga cum vel dicta impedit, est placeat voluptate modi! Animi
                quasi sapiente consectetur quo ut alias accusantium itaque.
              </Typography.Paragraph>
              <Row gutter={[16, 16]}>
                <Col xs={8}>
                  <Title level={3} style={{ color: "yellow", marginBottom: 0 }}>
                    32 +
                  </Title>
                  <Typography.Text style={{ color: "white" }}>
                    Years Of Experience
                  </Typography.Text>
                </Col>
                <Col xs={8}>
                  <Title level={3} style={{ color: "yellow", marginBottom: 0 }}>
                    12k
                  </Title>
                  <Typography.Text style={{ color: "white" }}>
                    Satisfied Clients
                  </Typography.Text>
                </Col>
                <Col xs={8}>
                  <Title level={3} style={{ color: "yellow", marginBottom: 0 }}>
                    20 +
                  </Title>
                  <Typography.Text style={{ color: "white" }}>
                    Countries Served
                  </Typography.Text>
                </Col>
              </Row>
            </div>
          </Col>
        </Flex>
      </Row>
    </div>
  );
}

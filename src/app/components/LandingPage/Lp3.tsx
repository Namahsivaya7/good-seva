import { Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
import lorry from "../../../../public/Lorry1.png";
import Title from "antd/es/typography/Title";
import "../../styles/LandingPage.css";

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
      <Row gutter={[16, 16]}>
        <Flex justify="center" gap={50} wrap>
          <Col xs={24} sm={20} md={10} lg={8}>
            <Image src={lorry} alt="lorry" className="Lp2-Left_img" />
          </Col>
          <Col xs={24} sm={20} md={12} lg={10}>
            <div>
              <Title
                level={2}
                style={{ color: "white", fontSize: 46, fontWeight: 400 }}
              >
                <span style={{ color: "yellow" }}>About Us:</span> Your Reliable
                Goods Moving Partner
              </Title>

              <Typography.Paragraph className="Lp3-paragraph">
                Elementum fames et massa molestie. Dolor habitasse id sit cras
                ultricies sit. Morbi sollicitudin quam enim est turpis aliquet.
                Diam in id quis diam. Lacus vestibulum habitant sollicitudin
                egestas. Porttitor enim duis dui in mi.
              </Typography.Paragraph>
            </div>
            <Row gutter={[16, 16]} className="Lp3-Head">
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
          </Col>
        </Flex>
      </Row>
    </div>
  );
}

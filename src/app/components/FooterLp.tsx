import { MessageFilled } from "@ant-design/icons";
import { Button, Col, Divider, Flex, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";
import "../styles/LandingPage.css";

export default function FooterLp() {
  return (
    <div style={{ width: "100%" }} className="footer-main">
      <Flex vertical gap={5}>
        <Row>
          <Col sm={2} xs={0}></Col>
          <Col sm={5} xs={24}>
            <Flex vertical>
              <Title>goodSeva</Title>
              <Typography.Paragraph>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, dicta quidem? Vel ipsa culpa eum modi at saepe,
                temporibus architecto obcaecati, explicabo autem quod eius,
                voluptas illo consectetur rerum maxime natus nulla.
              </Typography.Paragraph>
            </Flex>
            <Button id="offeringTxt">
              <MessageFilled />
              Start Live Chat
            </Button>
          </Col>
          <Col sm={5} xs={0}></Col>
          <Col sm={10} xs={24} className="f-resources">
            <Flex gap={30}>
              <Flex vertical gap={15}>
                <Title level={4}>Company</Title>
                <Typography.Text>About Us</Typography.Text>
                <Typography.Text>Our Partners</Typography.Text>
                <Typography.Text>Support Center</Typography.Text>
                <Typography.Text>Our Network</Typography.Text>
              </Flex>
              <Flex vertical gap={15}>
                <Title level={4}>Resources</Title>
                <Typography.Text>Packing Supplies</Typography.Text>
                <Typography.Text>Faqs</Typography.Text>
                <Typography.Text>Pricing and Quotes</Typography.Text>
                <Typography.Text>Tips and Guides</Typography.Text>
              </Flex>
              <Flex vertical gap={15}>
                <Title level={4}>Help</Title>
                <Typography.Text>Customer Support</Typography.Text>
                <Typography.Text>Delivery Details</Typography.Text>
                <Typography.Text>Terms & Conditions</Typography.Text>
                <Typography.Text>Privacy Policy</Typography.Text>
              </Flex>
            </Flex>
          </Col>

          <Col sm={2} xs={0}></Col>
        </Row>
        <Row>
          <Col sm={2}></Col>
          <Col sm={20}>
            <Divider variant="solid" style={{ borderColor: "black" }} />
          </Col>
          <Col sm={2}></Col>
        </Row>
        <Row>
          <Col sm={2}></Col>
          <Col sm={20}>
            <Typography.Text id="offeringTxt">
              Copyright &copy; 2024 Suvega
            </Typography.Text>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Flex>
    </div>
  );
}

import { Col, Divider, Flex, Row, Typography } from "antd";
import Image from "next/image";
import worker from "../../../public/worker.jpg";
import Title from "antd/es/typography/Title";
import "../styles/LandingPage.css";

export default function Lp6() {
  return (
    <div>
      <Row style={{ display: "flex", gap: 30 }} className="main-Lp6">
        <Col sm={1} xs={0}></Col>
        <Col sm={11} xs={24}>
          <Flex vertical gap={10}>
            <Image
              src={worker}
              alt="worker"
              style={{ width: "100%", height: "auto", borderRadius: 30 }}
            ></Image>
            <Flex vertical>
              <Title>Contact Our Expert</Title>
              <Typography.Text>Reach Out to Our Professionals</Typography.Text>
              <Typography.Text>for Moving Advice</Typography.Text>
            </Flex>
          </Flex>
        </Col>
        <Col sm={9} xs={24} style={{ width: "100%" }}>
          <Title>
            The <span id="offeringTxt">Step-by-Step</span> Guide to Your
            Seamless Loads
          </Title>

          <Typography.Paragraph>
            <Typography.Text>
              Initial Consultation and Assesment
            </Typography.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            unde ut sapiente nam vero quidem at earum aliquam, magni fugiat non
            inventore rem voluptatem sit, ratione, magnam iste! Cum omnis totam
            ea temporibus nemo earum, obcaecati minus hic harum libero at
            delectus atque incidunt modi numquam. Ipsa expedita iure ad?
            <Divider variant="solid" style={{ borderColor: "black" }} />
          </Typography.Paragraph>
          <Typography.Paragraph>
            <Typography.Text>
              Initial Consultation and Assesment
            </Typography.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            unde ut sapiente nam vero quidem at earum aliquam, magni fugiat non
            inventore rem voluptatem sit, ratione, magnam iste! Cum omnis totam
            ea temporibus nemo earum, obcaecati minus hic harum libero at
            delectus atque incidunt modi numquam. Ipsa expedita iure ad?
            <Divider variant="solid" style={{ borderColor: "black" }} />
          </Typography.Paragraph>
          <Typography.Paragraph>
            <Typography.Text>
              Initial Consultation and Assesment
            </Typography.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            unde ut sapiente nam vero quidem at earum aliquam, magni fugiat non
            inventore rem voluptatem sit, ratione, magnam iste! Cum omnis totam
            ea temporibus nemo earum, obcaecati minus hic harum libero at
            delectus atque incidunt modi numquam. Ipsa expedita iure ad?
            <Divider variant="solid" style={{ borderColor: "black" }} />
          </Typography.Paragraph>
          <Typography.Paragraph>
            <Typography.Text>
              Initial Consultation and Assesment
            </Typography.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            unde ut sapiente nam vero quidem at earum aliquam, magni fugiat non
            inventore rem voluptatem sit, ratione, magnam iste! Cum omnis totam
            ea temporibus nemo earum, obcaecati minus hic harum libero at
            delectus atque incidunt modi numquam. Ipsa expedita iure ad?
          </Typography.Paragraph>
        </Col>
        <Col sm={3} xs={0}></Col>
      </Row>
    </div>
  );
}

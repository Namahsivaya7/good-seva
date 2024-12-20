import { FundFilled, PhoneFilled, SignalFilled, SlidersFilled } from "@ant-design/icons";
import { Button, Col, Divider, Flex, List, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";

export default function Lp4() {
  return (
    <div className="Lp4Main">
      <Row>
        <Col xs={0} sm={2}></Col>
        <Col xs={24} sm={8}>
          <Title className="Lp4MainTitle">
            <span id="offeringTxt">Our Offerings:</span>Making Yours Loads
            Effortless
          </Title>
        </Col>
        <Col xs={0} sm={2}></Col>
        <Col xs={24} sm={8}>
          <Flex vertical gap={30}>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              mollitia veritatis fuga voluptates explicabo, accusantium sint in
              est? Velit, perspiciatis!
            </Typography>
            <Flex>
              <Button
                type="primary"
                danger
                style={{ padding: 20 }}
              >
                <PhoneFilled />
                Contact Us
              </Button>
            </Flex>
          </Flex>
        </Col>
        <Col xs={0} sm={2}></Col>
      </Row>

      <div className="Flex-Lp4">
        <Flex>
          <Row>
            <Flex gap={30} wrap>
              <Col sm={2} xs={0}></Col>
              <Col sm={6} xs={24}>
                <Flex vertical>
                  <List className="List">
                    <SignalFilled />
                    <Title level={2}>Efficiency and Timeliness</Title>
                    <List.Item>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Possimus pariatur iure tempora delectus blanditiis esse
                      vel. Eligendi enim esse dolorem magni facilis sed, culpa
                      facere dolorum aut, odit eveniet corrupti placeat, aliquid
                      nisi minus sint ducimus.
                    </List.Item>
                    <Divider variant="solid" style={{ borderColor: "black" }} />
                  </List>
                </Flex>
              </Col>
              <Col sm={6} xs={24}>
                <Flex vertical>
                  <List className="List">
                    <FundFilled />
                    <Title level={2}>Efficiency and Timeliness</Title>
                    <List.Item>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Possimus pariatur iure tempora delectus blanditiis esse
                      vel. Eligendi enim esse dolorem magni facilis sed, culpa
                      facere dolorum aut, odit eveniet corrupti placeat, aliquid
                      nisi minus sint ducimus.
                    </List.Item>
                    <Divider variant="solid" style={{ borderColor: "black" }} />
                  </List>
                </Flex>
              </Col>
              <Col sm={6} xs={24}>
                <Flex vertical>
                  <List className="List">
                    <SlidersFilled />
                    <Title level={2}>Efficiency and Timeliness</Title>
                    <List.Item>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Possimus pariatur iure tempora delectus blanditiis esse
                      vel. Eligendi enim esse dolorem magni facilis sed, culpa
                      facere dolorum aut, odit eveniet corrupti placeat, aliquid
                      nisi minus sint ducimus.
                    </List.Item>
                    <Divider variant="solid" style={{ borderColor: "black" }} />
                  </List>
                </Flex>
              </Col>
              <Col sm={2} xs={0}></Col>
            </Flex>
          </Row>
        </Flex>
        <br />
        <Flex>
          <Row>
            <Flex gap={30} wrap>
              <Col sm={2} xs={0}></Col>
              <Col sm={6} xs={24}>
                <Flex vertical>
                  <List className="List">
                    <SignalFilled />
                    <Title level={2}>Efficiency and Timeliness</Title>
                    <List.Item>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Possimus pariatur iure tempora delectus blanditiis esse
                      vel. Eligendi enim esse dolorem magni facilis sed, culpa
                      facere dolorum aut, odit eveniet corrupti placeat, aliquid
                      nisi minus sint ducimus.
                    </List.Item>
                    <Divider variant="solid" style={{ borderColor: "black" }} />
                  </List>
                </Flex>
              </Col>
              <Col sm={6} xs={24}>
                <Flex vertical>
                  <List className="List">
                    <FundFilled />
                    <Title level={2}>Efficiency and Timeliness</Title>
                    <List.Item>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Possimus pariatur iure tempora delectus blanditiis esse
                      vel. Eligendi enim esse dolorem magni facilis sed, culpa
                      facere dolorum aut, odit eveniet corrupti placeat, aliquid
                      nisi minus sint ducimus.
                    </List.Item>
                    <Divider variant="solid" style={{ borderColor: "black" }} />
                  </List>
                </Flex>
              </Col>
              <Col sm={6} xs={24}>
                <Flex vertical>
                  <List className="List">
                    <SlidersFilled />
                    <Title level={2}>Efficiency and Timeliness</Title>
                    <List.Item>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Possimus pariatur iure tempora delectus blanditiis esse
                      vel. Eligendi enim esse dolorem magni facilis sed, culpa
                      facere dolorum aut, odit eveniet corrupti placeat, aliquid
                      nisi minus sint ducimus.
                    </List.Item>
                    <Divider variant="solid" style={{ borderColor: "black" }} />
                  </List>
                </Flex>
              </Col>
              <Col sm={2} xs={0}></Col>
            </Flex>
          </Row>
        </Flex>
      </div>
    </div>
  );
}

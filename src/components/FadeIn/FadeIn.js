import React from "react";
import { Button, Row, Col } from "antd";
const FadeIn = () => {
  return (
    <Row justify="center">
      <Col>
        <Button className="fadeIn" type="primary" size={"large"}>
          Fade In
        </Button>
      </Col>
    </Row>
  );
};

export default FadeIn;

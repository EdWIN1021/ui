import React from "react";
import { Button, Row, Col } from "antd";
const FadeOut = () => {
  return (
    <Row justify="center">
      <Col>
        <Button className="fadeOutButton" type="primary" size={"large"}>
          Fade Out
        </Button>
      </Col>
    </Row>
  );
};

export default FadeOut;

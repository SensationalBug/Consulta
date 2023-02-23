import "./homePage.css";
import React from "react";
import { Col, Row, Label } from "reactstrap";
import { HiOutlineUser } from "react-icons/hi";

export const HomePage = () => {
  return (
    <div className="Page homepage border">
      <Row className="border level">
        <Col className="window col-6 border">
          <Col className="window">
            <Col className="border window-text col-4">
              <HiOutlineUser size="5em" />
              <Label className="window-title">Próximas citas</Label>
            </Col>
            <Col className="border window-number">0</Col>
          </Col>
        </Col>
        <Col className="window col-3">
          <Col className="border window-text">
            <HiOutlineUser size="5em" />
            <Label className="window-title">Pacientes</Label>
          </Col>
          <Col className="border window-number">0</Col>
        </Col>
        <Col className="window col-3">
          <Col className="border window-text">
            <HiOutlineUser size="5em" />
            <Label className="window-title">Citas</Label>
          </Col>
          <Col className="border window-number">0</Col>
        </Col>
      </Row>
      <Row className="border level">
        <Col className="window col-6 border">Información de los médicos</Col>
        <Col className="window col-6 border">Información de los pacientes</Col>
      </Row>
      <Row className="border level">
        <Col className="window col-12 border">Gráficos y estadísticas</Col>
      </Row>
    </div>
  );
};

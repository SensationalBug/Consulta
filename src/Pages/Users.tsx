import React from "react";
import { Col, Row } from "reactstrap";
import './css/users.css'

export const Users = () => {
  return (
    <div className="Page Users">
      <Row className="border level">
        <Col className="window col-6 border">
          <Col className="window">
            <Col className="border window-text col-4">
            </Col>
            <Col className="border window-number">0</Col>
          </Col>
        </Col>
        <Col className="window col-3">
          <Col className="border window-text">
          </Col>
          <Col className="border window-number">0</Col>
        </Col>
        <Col className="window col-3">
          <Col className="border window-text">
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

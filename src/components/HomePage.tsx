import "./homePage.css";
import React from "react";
import { Col, Row, Label } from "reactstrap";
import { HiOutlineUser, HiOutlineUsers } from "react-icons/hi";

export const HomePage = () => {
  return (
    <div className="Page homepage border">
      <Row className="border level">
        <Col className="window col-8 border">
          <Col className="border window-title col-4">
            <HiOutlineUser size="5em" />
            <Label className="border">Próximas citas</Label>
          </Col>
          <Col className="">
            <Label className="">100</Label>
          </Col>
        </Col>
        <Col className="window-number col-2 border">
          <HiOutlineUser size="5em" className="border"/>
          <Label className="border fs-3">100</Label>
        </Col>
        <Col className="window-number col-2 border">
          <HiOutlineUsers size="5em" className="border"/>
          <Label className="border fs-3">100</Label>
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

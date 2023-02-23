import "./loginpage.css";
import { Form } from "./Form";
import { Row, Col } from "reactstrap";
import { CgMaze } from "react-icons/cg";
import { SidebarComp } from "./Sidebar";
import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { HomePage } from "./HomePage";

export const LoginPage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      {!user ? (
        <Row className="login-box">
          <Col className="col-img col-8">
            <CgMaze className="login-icon" size="25em" color="#1D2532" />
          </Col>
          <Col className="col-login col-4">
            <Form />
          </Col>
        </Row>
      ) : (
        <>
          <SidebarComp />
        </>
      )}
    </>
  );
};

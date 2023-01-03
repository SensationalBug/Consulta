import React, { useContext } from "react";
import "./loginpage.css";
import { Form } from "./Form";
import { CgMaze } from "react-icons/cg";
import { Row, Col, Container } from "reactstrap";
import { UserContext } from "../context/userContext";
import { HomePage } from "./HomePage";

export const LoginPage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      {!user ? (
        <Container className="login-container">
          <Row className="login-box">
            <Col className="col col-img col-md-6">
              <CgMaze className="login-icon" size="20em" color="#36465e" />
            </Col>
            <Col className="col col-login col-md-6 col-12">
              <Form />
            </Col>
          </Row>
        </Container>
      ) : (
        <HomePage />
      )}
    </>
  );
};

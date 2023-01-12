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
        <div className="login-container">
          <Row className="login-box">
            <Col className="col-img col-7">
              <CgMaze className="login-icon" size="20em" color="#36465e" />
            </Col>
            <Col className="col-login col-5">
              <Form />
            </Col>
          </Row>
        </div>
      ) : (
        <HomePage />
      )}
    </>
  );
};

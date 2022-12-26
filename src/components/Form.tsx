import React, { useContext } from "react";
import "./form.css";

import { UserContext } from "../context/userContext";
import { Input, Button, Col, Label, FormGroup } from "reactstrap";

export const Form = () => {
  const { user, userState } = useContext(UserContext);
  return (
    <>
      <h2 className="text-center py-3">Nombre de la empresa</h2>
      <Col className="form-col col-12">
        <FormGroup className="col-md-9 col-11">
          <Label for="user">Username</Label>
          <Input
            className="input"
            id="user"
            name="user"
            type="text"
          />
        </FormGroup>
        <FormGroup className="col-md-9 col-11">
          <Label for="pwd">Password</Label>
          <Input className="input" id="pwd" name="password" type="password" />
        </FormGroup>
      </Col>
      <Col className="form-col col-12">
        <Input
          className="check"
          type="checkbox"
          id="checkbox"
          name="checkbox"
        />
        <Label className="mx-3" for="checkbox">
          No soy un robot
        </Label>
      </Col>
      <Col className="form-col col-12 py-4">
        <Button className="login-button p-2" onClick={() => userState()}>
          Iniciar Sesion
        </Button>
      </Col>
    </>
  );
};

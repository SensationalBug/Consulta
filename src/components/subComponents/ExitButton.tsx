import { UserContext } from "../../context/userContext";
import React, { useState, useContext } from "react";
import { CgClose } from "react-icons/cg";
import { Button } from "reactstrap";
import Swal from "sweetalert2";
import "../sidebar.css";

export const ExitButton = () => {
  const { userState } = useContext(UserContext);
  const [showIcon, setShowIcon] = useState(true);
  const alert = () => {
    Swal.fire({
      title: "Hello World",
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText:"Cerrar sesión",
    }).then((value) => {
      value.isConfirmed ? userState() : null;
    });
  };
  return (
    <Button
      className="salir-button menu-chart"
      onClick={() => alert()}
      onMouseEnter={() => setShowIcon(!showIcon)}
      onMouseLeave={() => setShowIcon(!showIcon)}
    >
      <CgClose
        className={`chart-logo ${showIcon ? "exit-logo" : undefined}`}
        size="1.5em"
      />
      <label className={`exit-label ${showIcon ? undefined : "chart-label"}`}>
        Salir
      </label>
    </Button>
  );
};

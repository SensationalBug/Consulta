import { UserContext } from "../../context/userContext";
import React, { useState, useContext } from "react";
import { CgClose } from "react-icons/cg";
import { Button } from "reactstrap";
import swal from "sweetalert";
import "../sidebar.css";

export const ExitButton = () => {
  const { userState } = useContext(UserContext);
  const [showIcon, setShowIcon] = useState(true);
  const alert = () => {
    swal({
      title: "Cerrar Sesión",
      text: "Seguro que quieres cerrar sesión?",
      icon: "info",
      dangerMode: true,
      buttons: ["Cancelar", "Aceptar"],
    }).then((response) => {
      response ? userState() : null;
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
      <label className={`exit-label ${showIcon ? undefined : "chart-label"}`}>Salir</label>
    </Button>
  );
};

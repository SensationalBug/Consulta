import React, { useContext } from "react";
import "./sidebar.css";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  sidebarClasses,
} from "react-pro-sidebar";
import { CgMaze } from "react-icons/cg";
import { Button, Col } from "reactstrap";
import { UserContext } from "../context/userContext";
import swal from "sweetalert";

export const SidebarComp = () => {
  const { collapseSidebar } = useProSidebar();
  const { userState } = useContext(UserContext);

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
    <>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#36465e",
            height: "100vh",
            display: "flex",
            color: "#fff",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        <Menu>
          <div className="text-center" onClick={() => collapseSidebar()}>
            <CgMaze size="5em" />
          </div>
          <Col>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
            <MenuItem> Calendar </MenuItem>
            <MenuItem> Calendar </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </Col>
        </Menu>
        <Button className="salir-button" onClick={() => alert()}>
          Salir
        </Button>
      </Sidebar>
    </>
  );
};

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
            color: "#fff",
            display: "flex",
            height: "100vh",
            flexDirection: "column",
            backgroundColor: "#1d2532",
            justifyContent: "space-between",
          },
        }}
      >
        <Menu>
          <div className="text-center" onClick={() => collapseSidebar()}>
            <CgMaze size="5em" className="main-logo"/>
          </div>
          <Col>
            <SubMenu label="Data" icon={<CgMaze size="3em" />}>
              <MenuItem> Agenda </MenuItem>
              <MenuItem> Usuarios </MenuItem>
            </SubMenu>
            <SubMenu label="Pages" icon={<CgMaze size="3em" />}>
              <MenuItem> Agenda </MenuItem>
              <MenuItem> Usuarios </MenuItem>
            </SubMenu>
            <SubMenu label="Charts" icon={<CgMaze size="3em" />}>
              <MenuItem> Agenda </MenuItem>
              <MenuItem> Usuarios </MenuItem>
            </SubMenu>
          </Col>
        </Menu>
        <Button className="salir-button" onClick={() => alert()}>
          Salir
        </Button>
      </Sidebar>
    </>
  );
};

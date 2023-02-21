import React from "react";
import "./sidebar.css";
import { Menu, Sidebar, MenuItem, sidebarClasses } from "react-pro-sidebar";
import {
  BsCalendar2Date,
  BsFileEarmarkBarGraph,
  BsColumnsGap,
} from "react-icons/bs";
import {
  HiOutlineUsers,
  HiOutlineUser,
  HiOutlineKey,
  HiOutlineSupport,
} from "react-icons/hi";
import { ExitButton } from "./subComponents/ExitButton";
import { LogoButton } from "./subComponents/LogoButton";

export const SidebarComp = () => {
  return (
    <>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            display: "flex",
            height: "100vh",
            flexDirection: "column",
            backgroundColor: "#1D2532",
            justifyContent: "space-between",
          },
        }}
      >
        <Menu
          menuItemStyles={{
            button: () => {
              return {
                transition: ".2s",
                color: "#8fe1f5",
                "&:hover": {
                  color: "black",
                  fontSize: "18px",
                  fontWeight: "bold",
                  backgroundColor: "#8fe1f5",
                  borderTopLeftRadius: "50px",
                  borderBottomLeftRadius: "50px",
                },
              };
            },
          }}
        >
          <LogoButton />
          <MenuItem
            className="menu-chart"
            icon={<BsColumnsGap className="chart-logo" size="2em" />}
          >
            <label>Panel de control</label>
          </MenuItem>
          <MenuItem
            className="menu-chart"
            icon={<HiOutlineUser className="chart-logo" size="2em" />}
          >
            <label>Usuarios</label>
          </MenuItem>
          <MenuItem
            className="menu-chart"
            icon={<HiOutlineUsers className="chart-logo" size="2em" />}
          >
            <label>Clientes</label>
          </MenuItem>
          <MenuItem
            className="menu-chart"
            icon={<HiOutlineKey className="chart-logo" size="2em" />}
          >
            <label>Roles y permisos</label>
          </MenuItem>
          <MenuItem
            className="menu-chart"
            icon={<BsCalendar2Date className="chart-logo" size="2em" />}
          >
            <label>Gestión de citas</label>
          </MenuItem>
          <MenuItem
            className="menu-chart"
            icon={<BsFileEarmarkBarGraph className="chart-logo" size="2em" />}
          >
            <label>Informes</label>
          </MenuItem>
          <MenuItem
            className="menu-chart"
            icon={<HiOutlineSupport className="chart-logo" size="2em" />}
          >
            <label>Soporte y ayuda</label>
          </MenuItem>
        </Menu>
        <ExitButton />
      </Sidebar>
    </>
  );
};

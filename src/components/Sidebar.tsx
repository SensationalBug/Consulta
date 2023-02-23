import React from "react";
import "./sidebar.css";
import { Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
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
import { MenuSideBarItem } from "./subComponents/MenuSideBarItem";
import { Users } from "../Pages/Users";
import { HomePage } from "./HomePage";
import { Clients } from "../Pages/Clients";
import { Roles } from "../Pages/Roles";
import { Appointments } from "../Pages/Appointments";
import { Data } from "../Pages/Data";
import { Help } from "../Pages/Help";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const SidebarComp = () => {
  const location = useLocation();
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
            rootStyles={{}}
            menuItemStyles={{
              button: ({ disabled }) => {
                return {
                  transition: ".2s",
                  color: disabled ? "red" : "#8fe1f5",
                  "&:hover": {
                    color: "black",
                    fontSize: "18px",
                    marginLeft: "10px",
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
            <MenuSideBarItem
              link="/"
              title="Panel de Control"
              itemClass="menu-chart"
              icon={<BsColumnsGap className="chart-logo" size="2em" />}
            />
            <MenuSideBarItem
              link="users"
              title="Usuarios"
              itemClass="menu-chart"
              icon={<HiOutlineUser className="chart-logo" size="2em" />}
            />
            <MenuSideBarItem
              link="clients"
              title="Clientes"
              itemClass="menu-chart"
              icon={<HiOutlineUsers className="chart-logo" size="2em" />}
            />
            <MenuSideBarItem
              link="roles"
              title="Roles y permisos"
              itemClass="menu-chart"
              icon={<HiOutlineKey className="chart-logo" size="2em" />}
            />
            <MenuSideBarItem
              link="appointments"
              title="Gestión de citas"
              itemClass="menu-chart"
              icon={<BsCalendar2Date className="chart-logo" size="2em" />}
            />
            <MenuSideBarItem
              link="data"
              title="Informes"
              itemClass="menu-chart"
              icon={<BsFileEarmarkBarGraph className="chart-logo" size="2em" />}
            />
            <MenuSideBarItem
              link="help"
              itemClass="menu-chart"
              title="Soporte y ayuda"
              icon={<HiOutlineSupport className="chart-logo" size="2em" />}
            />
          </Menu>
          <ExitButton />
        </Sidebar>
        <TransitionGroup component={null}>
          <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/data" element={<Data />} />
              <Route path="/help" element={<Help />} />
              <Route path="/users" element={<Users />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/appointments" element={<Appointments />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
    </>
  );
};

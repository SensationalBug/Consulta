import React, { useContext } from "react";
import { Container } from 'reactstrap';
import './homePage.css'
import { SidebarComp } from "./Sidebar";

export const HomePage = () => {
  return (
    <div className="w-100">
      <SidebarComp/>
    </div>
  );
};

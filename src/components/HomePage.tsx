import React, { useContext } from "react";
import { SidebarComp } from "./Sidebar";
import { Container } from 'reactstrap';
import './homePage.css'

export const HomePage = () => {
  return (
    <div className="w-100">
      <SidebarComp/>
    </div>
  );
};

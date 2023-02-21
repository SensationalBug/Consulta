import React from "react";
import { BiMenu } from "react-icons/bi";

import { useProSidebar } from "react-pro-sidebar";

export const LogoButton = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div
      className="text-center logo-container"
      onClick={() => collapseSidebar()}
    >
      <BiMenu className="main-logo" size="2em"/>
    </div>
  );
};

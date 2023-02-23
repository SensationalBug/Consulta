import React from "react";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export const MenuSideBarItem = (props: any) => {
  const { itemClass, icon, title, link, disabled } = props;
  return (
    <MenuItem
      icon={icon}
      disabled={disabled}
      className={itemClass}
      routerLink={<Link to={link} />}
    >
      <label>{title}</label>
    </MenuItem>
  );
};

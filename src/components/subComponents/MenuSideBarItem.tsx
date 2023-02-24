import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "react-pro-sidebar";

export const MenuSideBarItem = (props: any) => {
  const { icon, link, title, itemClass, location } = props;
  const [on, setOn] = useState(false);
  return (
    <>
      <MenuItem
        rootStyles={{
          marginLeft: on ? "10px" : undefined,
          backgroundColor: on ? "white" : undefined,
          borderTopLeftRadius: on ? "50px" : undefined,
          borderBottomLeftRadius: on ? "50px" : undefined,
        }}
        icon={icon}
        className={itemClass}
        routerLink={<Link to={link} />}
        onClick={() => (location.pathname === link ? setOn(!on) : null)}
      >
        <label>{title}</label>
      </MenuItem>
    </>
  );
};

import "./errorPage.css";
import React from "react";
// import { useRouteError } from "react-router-dom";
import { HiOutlineExclamation } from "react-icons/hi";

export const ErrorPage = () => {
  // const error: any = useRouteError();
  return (
    <div className="error-message">
      <HiOutlineExclamation />
      {/* <div className="">{error.statusText || error.message}</div> */}
    </div>
  );
};

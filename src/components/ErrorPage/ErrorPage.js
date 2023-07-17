import React from "react";
import "./ErrorPage.css";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1 className="errorpage">
        404 Error
        <br />
        Page Not Found
        <NavLink to="/">Go back</NavLink>
      </h1>
    </>
  );
};

export default ErrorPage;

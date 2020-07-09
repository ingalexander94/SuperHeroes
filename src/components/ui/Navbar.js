import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });
    history.replace("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-brand ml-2">
        <img
          src="../logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
          alt="logo"
          loading="lazy"
        />
        {user.name}
      </div>
      <button
        className="navbar-toggler mr-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse text-center"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Filtrar
          </NavLink>

          <div
            className="nav-item nav-link"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          >
            Salir
          </div>
        </div>
      </div>
    </nav>
  );
};

import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PrivateRouter = ({ isAuthenticated, component: Component, ...res }) => {
  const {
    location: { pathname },
    location: { search },
  } = res;

  localStorage.setItem("lastPath", `${pathname}${search}`);

  return (
    <Route
      {...res}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRouter;

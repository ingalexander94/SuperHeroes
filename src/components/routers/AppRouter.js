import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LoginScreen from "../login/LoginScreen";
import { DashboardRouter } from "./DashboardRouter";
import PrivateRouter from "./PrivateRouter";
import { AuthContext } from "../../auth/AuthContext";
import PublicRouter from "./PublicRouter";
export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            exact
            path="/login"
            isAuthenticated={user.logged}
            component={LoginScreen}
          />
          <PrivateRouter
            path="/"
            isAuthenticated={user.logged}
            component={DashboardRouter}
          />
        </Switch>
      </div>
    </Router>
  );
};

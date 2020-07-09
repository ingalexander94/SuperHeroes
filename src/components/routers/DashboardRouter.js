import React from "react";
import MarvelScreen from "../marvel/MarvelScreen";
import DcScreen from "../dc/DcScreen";
import HeroScreen from "../heroes/HeroScreen";
import { Redirect, Switch, Route } from "react-router-dom";
import { Navbar } from "../ui/Navbar";
import SearchScreen from "../search/SearchScreen";

export const DashboardRouter = () => {
  const element = document.getElementById("navbarNavAltMarkup");
  element !== null && element.classList.remove("show");

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/heroe/:heroeId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

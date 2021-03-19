import React from "react";
import "./App.css";
import Home from "./components/pages/HomePage/Home";

import Maps from "./components/pages/Maps/Maps";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";
import Dashboard from "./components/Dashboard";
import Payment from "./components/Payment";
import { Fragment } from "react";
import ParkingInfo from "./components/pages/ParkingInfo/ParkingInfo";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/parknow" component={Maps} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/payment" component={Payment} />
        <Route
          path="/parkingitems"
          render={() => (
            <Fragment>
              <Maps />
            </Fragment>
          )}
        />
        <Route
          path="/parkingInfo"
          render={() => (
            <Fragment>
              <ParkingInfo />
            </Fragment>
          )}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

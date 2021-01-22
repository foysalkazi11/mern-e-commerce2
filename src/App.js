import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "./components/config/notification";
import { Nav, Home, Account } from "./components/AllComponent";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/account" component={Account} />
      </Switch>
    </Router>
  );
};

export default App;

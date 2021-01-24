import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "./config/notification";
import {
  Nav,
  Home,
  Account,
  AddProduct,
  NewProduct
} from "./components/AllComponent";
import AdminRoute from "./proctedRoute/AdminRoute";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/newProduct" component={NewProduct} />
        <AdminRoute exact path="/addProduct" component={AddProduct} />
      </Switch>
    </Router>
  );
};

export default App;

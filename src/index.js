import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { AuthState } from "./authContext/AuthState";
import { ProductState } from "./productContext/ProductState";

ReactDOM.render(
  <React.StrictMode>
    <ProductState>
      <AuthState>
        <App />
      </AuthState>
    </ProductState>
  </React.StrictMode>,
  document.getElementById("root")
);

// Taken from the example from React Router Doc
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// Need these for bootstrap and icons in footer
import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
// Taken from the example from React Router Doc
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
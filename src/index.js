import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./components/NavBar";
import Racine from "./components/Racine";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";



ReactDOM.render(
  <React.StrictMode>
    <Racine />
  </React.StrictMode>,
  document.getElementById("root")
);


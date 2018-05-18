import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DefaultLayout from "./layout/defaultLayout";
import Home from "./containers/home";
import About from "./containers/about";

const App = () => (
  <Router>
    <div>
      <DefaultLayout exact path="/" component={Home} />
      <DefaultLayout path="/about" component={About} />
    </div>
  </Router>
);

export default App;

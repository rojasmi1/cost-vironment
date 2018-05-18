import React from "react";
import { Route } from "react-router-dom";
import Header from '../components/header';
import "../styles/main.css";


const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div>
          <Header />
          <div className="container">
            <Component {...matchProps} />
          </div>
        </div>
      )}
    />
  );
};

export default DefaultLayout;

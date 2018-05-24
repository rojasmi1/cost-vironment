import React, { Component } from "react";
import "./home.css";

class Home extends Component {

  render() {
    return (
      <section className="home">
        <h1>Welcome to CostVironment!</h1>
        <p>
          This is the CostVironment's home page. Please select from the navbar
          menu which footprint you want to consult.
        </p>
      </section>
    );
  }
}

export default Home;

import React, { Component } from "react";
import "./automobile-fooprint.css";
import { API_CONFIG } from "../../constants";

class AutomobileFooprint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }
  
  componentDidMount() {
    this.loadTestData();
  }

  render() {
    let fooprintResult;
    if (!this.state.isLoading) {
      fooprintResult = (
        <div>
          <span>CO2 Emission</span>:{" "}
          <span>{this.state.co2Emission.description}</span>
          <br/>
          <span>Carbon production</span>:{" "}
          <span>{this.state.carbon.description}</span>
        </div>
      );
    } else {
      fooprintResult = <div>Loading fooprint info...</div>;
    }

    return (
      <section className="home">
        <h1>Discover your automobile environment fooprint</h1>
        <p>
          Provide all the relevant information according to your automobile,
          then the yearly environment cost will be shown bellow.
        </p>
        <div>{fooprintResult}</div>
      </section>
    );
  }

  loadTestData() {
    this.setState({ isLoading: true });
    fetch(`${API_CONFIG.BASE_URL}/automobiles.json`, {
      body: JSON.stringify({
        key: API_CONFIG.KEY,
        make: "Honda",
        model: "Civic",
        year: "2007",
        annual_fuel_use: "800",
        annual_distance: "10000"
      }),
      method: "POST"
    })
      .then(response => response.json())
      .then(data => {
        const { co2_emission: co2Emission, carbon } = data.decisions;

        this.setState({
          isLoading: false,
          co2Emission,
          carbon
        });
      });
  }

}

export default AutomobileFooprint;

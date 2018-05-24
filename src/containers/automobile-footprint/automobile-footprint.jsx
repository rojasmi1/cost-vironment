import React, { Component } from "react";
import "./automobile-footprint.css";
import AutomobileResults from "../../components/automobile-results";
import AutomobileForm from "../../components/automobile-form";
import { API_CONFIG } from "../../constants";
import Spinner from "react-spinkit";

const flexLayout = {
  display: "flex",
  justifyItems: "center",
  flexDirection: "column",
  alignItems: "center"
};

class AutomobileFootprint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };

    this.loadTestData = this.loadTestData.bind(this);
  }

  componentDidMount() {}

  render() {
    let footprintResult;
    if (!this.state.isLoading) {
      footprintResult = (
        <div style={flexLayout}>
          <AutomobileForm sendData={this.loadTestData} />
          <br />
          <AutomobileResults {...this.state.results} />
        </div>
      );
    } else {
      footprintResult = (
        <div style={{ padding: "50px", ...flexLayout }}>
          <Spinner name="chasing-dots" color="steelblue" className="automobileFootprint__spinner" />
        </div>
      );
    }

    return (
      <section className="home">
        <h1>Discover your automobile environment footprint</h1>
        <p>
          Provide all the relevant information according to your automobile,
          then the yearly environment cost will be shown bellow.
        </p>
        <div>{footprintResult}</div>
      </section>
    );
  }

  async loadTestData(automobile) {
    this.setState({ isLoading: true });
    let url = new URL(
      `${API_CONFIG.BASE_URL}/automobiles.json?key=${API_CONFIG.KEY}`
    );

    Object.keys(automobile).forEach(key =>
      url.searchParams.append(key, automobile[key])
    );

    const response = await fetch(url, {
      qs: automobile,
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    const { co2_emission: co2Emission, carbon } = data.decisions;
    this.setState({
      isLoading: false,
      results: {
        co2Emission,
        carbon
      }
    });
  }
}

export default AutomobileFootprint;

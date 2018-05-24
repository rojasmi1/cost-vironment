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

    this.loadViewData = this.loadViewData.bind(this);
  }

  componentDidMount() {}

  render() {
    let footprintResult;
    if (!this.state.isLoading) {
      footprintResult = (
          <AutomobileResults {...this.state.results} />
      );
    } else {
      footprintResult = (
        <div>
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
        <div style={flexLayout}>
          <AutomobileForm sendData={this.loadViewData} />
          <br />
          {footprintResult}
        </div>
      </section>
    );
  }

  async loadViewData(automobile) {
    this.setState({ isLoading: true });
    let url = new URL(
      `${API_CONFIG.BASE_URL}/automobiles.json?key=${API_CONFIG.KEY}`
    );

    const data = await this.requestData(url, automobile);
    const { co2_emission: co2Emission, carbon } = data.decisions;
    this.setState({
      isLoading: false,
      results: {
        co2Emission,
        carbon
      }
    });
  }

  async requestData(url, automobile) {
    
    // Build params
    Object.keys(automobile).forEach(key =>
      url.searchParams.append(key, automobile[key])
    );

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();

    return data;
  }
}

export default AutomobileFootprint;

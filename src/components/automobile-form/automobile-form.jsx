import React from "react";
import "./automobile-form.css";

class AutomobileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      make: "",
      model: "",
      year: "",
      annualFuelUse: "",
      annualDistance: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  sendData(event) {
    event.preventDefault();
    const { make, model, year, annualFuelUse: annual_fuel_use, annualDistance: annual_distance } = this.state;
    this.props.sendData({make, model, year, annual_fuel_use, annual_distance});
  }

  render() {
    return (
      <form className="automobileForm">
        <label>
          Make:{" "}
          <input
            name="make"
            type="text"
            value={this.state.make}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Model:{" "}
          <input
            name="model"
            type="text"
            value={this.state.model}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Year:{" "}
          <input
            name="year"
            type="number"
            value={this.state.year}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Annual Fuel Use:{" "}
          <input
            name="annualFuelUse"
            type="number"
            value={this.state.annualFuelUse}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Annual Distance:{" "}
          <input
            name="annualDistance"
            type="number"
            value={this.state.annualDistance}
            onChange={this.handleInputChange}
          />
        </label>
        <button className="automobileForm__submit" onClick={this.sendData}>
          Get Data!
        </button>
      </form>
    );
  }
}

export default AutomobileForm;

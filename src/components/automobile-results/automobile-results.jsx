import React from "react";
import "./automobile-results.css";

const AutomobileResults = (props) => (
  <div className="automobileResults">
    <div>
      <span>CO2 Emission</span>: <span>{props.co2Emission? props.co2Emission.description : ''}</span>
    </div>
    <br />
    <div>
      <span>Carbon production</span>: <span>{props.carbon? props.carbon.description : ''}</span>
    </div>
  </div>
);

export default AutomobileResults;

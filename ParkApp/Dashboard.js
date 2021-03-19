import React from "react";
import "./Dashboard.css";
import TextWidget from "./TextWidget";
import Chart from "./Chart";
function Dashboard() {
  return (
    <>
      <div className="widgetTitle">Smart Parking Solutions On A Roll</div>
      <div className="widgetmain">
        <TextWidget value={100} description="UTILIZED PARKING SPACES" />
        <TextWidget value={480} description="PEOPLE EMPLOYEED" />
        <TextWidget value={775} description="LITRES OF FUEL SAVED" />
        <TextWidget value={685} description="PARKING OPERATIONS DIGITALIZED" />
      </div>
      <Chart />
    </>
  );
}

export default Dashboard;

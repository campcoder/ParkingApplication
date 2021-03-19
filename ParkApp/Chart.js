import React, { useState, useEffect } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import "./Dashboard.css";
function Chart() {
  const [lineData, setlineData] = useState({});
  const [barData, setbarData] = useState({});
  const [pieData, setpieData] = useState({});
  const line = () => {
    setlineData({
      labels: ["Bangalore", "Mumbai", "Ludhiana", "Chennai", "Chandigarh"],
      datasets: [
        {
          label: "Percentage of parking tickets processed from MySpace",
          data: [14, 66, 42, 21, 91],
          backgroundColor: ["rgba(75,192,192,.6"],
          borderWidth: 4,
        },
      ],
    });
  };
  const bar = () => {
    setbarData({
      labels: ["Bangalore", "Mumbai", "Ludhiana", "Chennai", "Chandigarh"],
      datasets: [
        {
          label: "Percentage of road blockage avoided from MySpace",
          data: [32, 45, 92, 41, 21],
          backgroundColor: ["rgba(75,192,192,.6"],
          borderWidth: 4,
        },
      ],
    });
  };
  useEffect(() => {
    line();
    bar();
  }, []);
  return (
    <div>
      <div className="chart" style={{ height: "300px", width: "450px" }}>
        <Line data={lineData} options={{ responsive: true }} />
        <Bar data={barData} options={{ responsive: true }} />
        <Doughnut data={lineData} options={{ responsive: true }} />
      </div>
    </div>
  );
}

export default Chart;

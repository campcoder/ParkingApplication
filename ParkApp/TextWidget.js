import React from "react";
import "./Dashboard.css";
export default function TextWidget(props) {
  return (
    <div className="widgetWrap">
      <div className="widgetValue">
        <div className="value">{props.value}</div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
}

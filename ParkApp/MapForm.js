import React, { useState } from "react";
import "date-fns";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./MapForm.css";

import Pricing from "../../Pricing";
import { Link } from "react-router-dom";
export default function MapForm() {
  const dateValue = new Date("02/05/2021 10:30 AM");
  const minDate = new Date("02/05/2021 09:00 AM");
  const maxDate = new Date("02/06/2021 06:00 PM");
  const [open, setOpen] = useState(false);
  return (
    <div classname="mapform">
      <div className="dateandtime">
        <h2 className="parkingperiodHeader">Choose Parking Period</h2>
        <div className="dateandtime1">
          <DateTimePickerComponent
            placeholder="Choose start Period"
            min={minDate}
            max={maxDate}
            format="dd-MMM-yy HH:mm"
            step={60}
          ></DateTimePickerComponent>
        </div>
        <div className="dateandtime2">
          <DateTimePickerComponent
            placeholder="Choose end Period"
            min={minDate}
            max={maxDate}
            format="dd-MMM-yy HH:mm"
            step={60}
          ></DateTimePickerComponent>
        </div>
      </div>
      <div className="radiodiv">
        <h2 className="radioheader">Choose Vehicle Type</h2>

        <label for="myRadioId" className="radio">
          <img className="carimage" src="images/cartoggle.jpg"></img>
          <input
            type="radio"
            name="myRadioField"
            id="myRadioId"
            className="radio__input"
          />
          <div className="radio__radio"></div>
          Car
        </label>
        <label for="myRadioId" className="radio">
          <img className="bikeimage" src="images/biketoggle.jpg"></img>
          <input
            type="radio"
            name="myRadioField"
            id="myRadioId"
            className="radio__input"
          />
          <div className="radio__radio"></div>
          Bike
        </label>
      </div>
      <Link to="/parkingitems" onClick={() => setOpen(true)} className="buynow">
        Book Your Space Now
      </Link>
      {open ? (
        <div>
          <p className="nopark"> We found you some places below ↓ ↓</p>
          <Pricing />
        </div>
      ) : (
        <p className="nopark"> You have no bookings as of now</p>
      )}
    </div>
  );
}

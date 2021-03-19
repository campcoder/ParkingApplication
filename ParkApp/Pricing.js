import React from "react";
import { Button } from "./Button";
import "./Pricing.css";

import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Nearest Parkings</h1>
          <div className="pricing__container">
            <Link to="/parkingInfo" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <img src="images/parking2.jpg" />
                </div>
                <h3>MG Road,2nd Main</h3>
                <h4>₹ 20</h4>
                <p>per hour</p>
                <ul className="pricing__container-features">
                  <li>200 Meters Away</li>
                  <li>Electric car facility</li>
                  <li>Watchman Available</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Book Parking
                </Button>
              </div>
            </Link>
            <Link to="/parkingInfo" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <img src="images/pricing1.jpg" />
                </div>
                <h3>JS Road, VG Hut</h3>
                <h4>₹ 10</h4>
                <p>per hour</p>
                <ul className="pricing__container-features">
                  <li>600 meters Away</li>
                  <li>No Electric car charging</li>
                  <li>Watchman Available</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
                  Book Parking
                </Button>
              </div>
            </Link>
            <Link to="/parkingInfo" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <img src="images/parking3.jpg" />
                </div>
                <h3>MVM Park House</h3>
                <h4>₹5 </h4>
                <p>per hour</p>
                <ul className="pricing__container-features">
                  <li>800 meters away</li>
                  <li>No Electric car charging</li>
                  <li>Best Rated</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Book Parking
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;

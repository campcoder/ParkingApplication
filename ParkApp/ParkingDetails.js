import React, { useState } from "react";
import "./ParkingDetail.css";
import Slide from "./Slide";
import { Link } from "react-router-dom";
import ReactToolTip from "react-tooltip";
function ParkingDetails({
  distance,
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  slot,
  img,
  alt,
  imgStart,
  tele,
}) {
  const [link, setLink] = useState(false);
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-lined">{tele}</div>
                <div className="top-lined">{slot}</div>
                <div className="top-lined">{topLine}</div>
                <div className="top-lined">{distance}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to="/payment" className="cnow">
                  Confirm Now
                </Link>
                <ReactToolTip
                  id="explore"
                  place="bottom"
                  type="info"
                  effect="solid"
                  className="tooltip"
                >
                  We have something special for you !! You can now explore some
                  famous places near the location of your parked vehicle.
                </ReactToolTip>
                <a
                  onClick={() => {
                    setLink(true);
                  }}
                  className="clink"
                  data-tip
                  data-for="explore"
                >
                  Explore near by Places -?
                </a>
              </div>
            </div>

            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="park__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {link ? <Slide /> : null}
    </>
  );
}

export default ParkingDetails;

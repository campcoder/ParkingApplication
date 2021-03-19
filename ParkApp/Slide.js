import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.css";
function Slide() {
  const photos = [
    {
      name: "Photo 1",
      url:
        "https://images.unsplash.com/photo-1564291886459-a39ad7415125?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",

      address: "JayaNagar",
    },
    {
      name: "Photo 2",
      url:
        "https://images.unsplash.com/photo-1582641547274-2770615179ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      address: "JW Marriot",
    },
    {
      name: "Photo 3",
      url:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=853&q=80",
      address: "M.V Library",
    },
  ];
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
  };
  return (
    <div>
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div>
              <div className="slidediv">
                <h1 className="slideheader">Places to visit Nearby</h1>
                <img className="slideimage" width="50%" src={photo.url} />
                <p className="address">{photo.address}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Slide;

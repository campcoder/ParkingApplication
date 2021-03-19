import React, { useState } from "react";
import { formatRelative } from "date-fns";
import MapForm from "./MapForm";
import "./Maps.css";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "50vh",
};
const center = {
  lat: 12.971599,
  lng: 77.594566,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

function Maps() {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = React.useState(null);
  const onMapClick = React.useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  return (
    <div>
      <Search />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={18}
        center={center}
        options={options}
        onClick={onMapClick}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: "images/mp.svg",
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2 className="space">Space Found !</h2>
              <p className="time">
                Available {formatRelative(selected.time, new Date())}
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      <MapForm />
    </div>
  );
}

function Search() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutoComplete({
    requestOptions: {
      location: { lat: () => 12.971599, lng: () => 77.594566 },
      radius: 10 * 1000,
    },
  });

  return (
    <div className="searchmap">
      <Combobox
        onSelect={async (address) => {
          try {
            const results = await getGeocode({ address });
            const [lat, lng] = await getLatLng(results[0]);
          } catch (error) {
            console.log("error");
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Search Address"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
export default Maps;

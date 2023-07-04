import React from "react";
import Map from "./Map";

const MapPage = () => {
  const mapPageStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const textSectionStyle = {
    width: "50%",
  };

  const mapSectionStyle = {
    width: "40%",
    height: "450", // Adjust as needed
    margin: "10px",
  };

  return (
    <div style={mapPageStyle}>
      <div style={textSectionStyle}>
        <h1>Map Page</h1>
         </div>
      <div style={mapSectionStyle}>
        <Map
          center={[51.505, -0.09]}
          zoom={13}
          address={"Tel Aviv Hashalom 2"}
        />
      </div>
    </div>
  );
};

export default MapPage;

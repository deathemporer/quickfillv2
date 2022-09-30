import React, { Component, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import "react-geolocated";
import { Link } from "react-router-dom";
import "./MapLoader.css";
import OurTeam from "./OurTeam";
import NavBar from "./NavBar";
import { useQuery, gql } from "@apollo/client";
const DISP_STATIONS = gql`
  query getStations {
    station {
      stid

      sname

      latitude

      longitude
      price
    }
  }
`;

delete L.Icon.Default.prototype._getIconUrl;

let distPopup = 0;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("C:/Users/Nitin.Sharma4/Documents/Training/Project/Code/quickfillv2/src/images/marker-icon-2x.png"),
  iconUrl: require("C:/Users/Nitin.Sharma4/Documents/Training/Project/Code/quickfillv2/src/images/marker-icon.png"),
  shadowUrl: require("C:/Users/Nitin.Sharma4/Documents/Training/Project/Code/quickfillv2/src/images/marker-shadow.png"),
});

const parkData = {
  locations: [
    { lat: 12.937562, lon: 77.670097, name: "Bellandur", id: 1 },
    { lat: 12.904899, lon: 77.610452, name: "Silk Board", id: 2 },
    { lat: 12.972442, lon: 77.580643, name: "ITI Layout", id: 3 },
  ],
};

// function Routing() {
//   const map = useMap();

//   useEffect(() => {
//     if (!map) return;

//     const routingControl = L.Routing.control({
//       waypoints: [
//         L.latLng(12.9081357, 77.64760799999999),
//         L.latLng(parkData.lat, parkData.lon),
//       ],
//       draggableWaypoints: false,
//       addWaypoints: false,
//       routeWhileDragging: true,
//     }).addTo(map);

//     routingControl.on("routesfound", function (e) {
//       var routes = e.routes;
//       var summary = routes[0].summary;
//       getDistanceAndTime(
//         summary.totalDistance / 1000,
//         Math.round((summary.totalTime % 3600) / 60)
//       );
//       distPopup = summary.totalDistance / 1000;
//       timePopup = Math.round((summary.totalTime % 3600) / 60);
//       console.log(distPopup, timePopup);
//       getDistanceAndTime();
//     });
//     map.removeControl();
//   });
// }
function toRad(Value) {
  return (Value * Math.PI) / 180;
}

const currentLocation = () => {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });
};

const getDistanceAndTime = (lat1, lon1, lat2, lon2) => {
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  distPopup = R * c;

  return (
    <div>
      <p>Distance: {distPopup.toFixed(2)} km</p>
      <p>Time : {(distPopup * 5.5).toFixed(0)} mins</p>
    </div>
  );
};

function MapLoader() {
  // redirectToMaps = (lat1, lon1, lat2, lon2) => {
  //   let navigate = useNavigate();
  //   //const history = useHistory();
  //   let path = `https://www.google.com/maps/dir/?api=1&origin=${lat1}%2C${lon1}&destination=${lat2}%2C${lon2}&travelmode=driving`;
  //   console.log(path);
  //   navigate(path);
  // };
  //let navigate = useNavigate();

  console.log(parkData.locations);
  const { loading, error, data } = useQuery(DISP_STATIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <NavBar />
      <MapContainer
        center={[12.9081357, 77.64760799999999]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={new L.LatLng(12.9081357, 77.64760799999999)}>
          <Popup>Your Location</Popup>
        </Marker>
        {data.station.map((location) => (
          <Marker position={new L.LatLng(location.latitude, location.longitude)} key={location.stid}>
            <Popup>
              <p id="popup">
                <b>{location.sname}</b>
              </p>
              <p id="popup">
                {getDistanceAndTime(
                  12.9081357,
                  77.64760799999999,
                  location.latitude,
                  location.longitude
                )}
              </p>
              <button
                className="btn btn-dark"
                id="btn"
                //onClick={navigate(`https://www.google.com/maps/dir/?api=1&origin=12.9081357%2C77.64760799999999&destination=${location.lat}%2C${location.lon}&travelmode=driving`)}
              >
                <a
                  id="link"
                  target="_blank"
                  href={`https://www.google.com/maps/dir/?api=1&origin=12.9081357%2C77.64760799999999&destination=${location.latitude}%2C${location.longitude}&travelmode=driving`}
                >
                  Get Directions
                </a>
              </button>{" "}
              <br />
              <br />
              <button className="btn btn-dark">
                <Link to={`/payment/${location.stid}/${location.sname}/${location.price}`} id="link">
                  Proceed to payment
                </Link>
              </button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <OurTeam />
    </>
  );
}

export default MapLoader;

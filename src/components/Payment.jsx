import React, { useState } from "react";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Payment.css";
import {useParams} from "react-router-dom";


function Payment() {
  const {id,name,fuelPrice} = useParams();
  const [price, setPrice] = useState("");
  const [volume, setVolume] = useState("");
  const changeVolume = () => {
    setVolume((price / fuelPrice).toFixed(2));
    console.log(price, volume);
  };
  const changePrice = () => {
    setPrice((volume * fuelPrice).toFixed(2));
    console.log(price, volume);
  };
  console.log(price, volume);
  const style= {width:"470px"}
  return (
    <>
    <NavBar/>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:"white",
          width:"40%",
          marginLeft:"30%",
          padding:"20px",
          borderRadius:"10px"
        }}
      >
        <Form>
          <h3 style={{textAlign:"center"}}>Pay Now</h3>
          <Form.Group className="mb-3" controlId="stationName">
            <Form.Label>Station</Form.Label>
            <Form.Control
              type="text"
              placeholder="HSR"
              value={name}
              disabled
              style={style}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="stationID">
            <Form.Label>Station ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="123464324"
              value={id}
              disabled
              style={style}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Enter Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="0.0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              onBlur={changeVolume}
              style={style}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="volume">
            <Form.Label>Enter Volume (in lts)</Form.Label>
            <Form.Control
              type="text"
              placeholder="0.0L"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              onBlur={changePrice}
              style={style}
            />
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            style={style}
          >
            Pay Now
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Payment;

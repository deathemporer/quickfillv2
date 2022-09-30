import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//import "react-bootstrap";
import "./Wallet.css";
import NavBar from "./NavBar";
import Modal from "react-bootstrap/Modal";
import {Link} from "react-router-dom";

function Wallet() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <NavBar/>
      <div id="container" style={{ marginTop: "50px", backgroundColor:"white",borderRadius:"10px", width:"40%" , marginLeft:"30%", padding:"20px"}}>
        <h3 style={{textAlign:"center"}}>Your Wallet</h3>
        <div id="userDetails">
          <Form.Group className="mb-3">
            <Form.Control placeholder="Allen" disabled style={{width:"470px", marginTop:"20px"}}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Allen@gmail.com" disabled style={{width:"470px"}}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder="8129712971" disabled style={{width:"470px"}}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control value="Wallet Balance: Rs 500" disabled style={{width:"470px"}}/>
          </Form.Group>
        </div>
        <div id="add" style={{ width:"300px"}}>
          <Button variant="dark" onClick={handleShow} style={{ width:"470px"}}>
            Add Money
          </Button>{" "}
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title style={{textAlign:"center"}}>Add Money to Wallet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Control placeholder="Enter Amount" style={{width:"465px"}}/>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose} style={{marginLeft:"-10px", position:"relative"}}>
                Close
              </Button>
              <Button variant="success" onClick={handleClose}>
                Add Money
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div id="check" style={{ }}>
        <Link to="/transactions" id="link"><Button variant="dark" style={{ width:"470px", marginTop:"20px"}}>Check Transaction</Button>{" "}</Link>
        </div>
      </div>
    </>
  );
}

export default Wallet;

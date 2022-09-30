import React, { useState, useEffect } from "react";
import MapLoader from "./components/MapLoader";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Payment from "./components/Payment";
import Login from "./components/Login";
import Wallet from "./components/Wallet";
import Admin from "./components/Admin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Transactions from "./components/Transactions";
import "./App.css";
import AddStation from "./components/AddStation";
import DeleteStation from "./components/DeleteStation";
import UpdateStation from "./components/UpdateStation";
import ViewDetails from "./components/ViewDetails";

function App() {
  return (
    <>
    <div>
      <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<MapLoader/>}/>
        <Route path="/wallet" element={<Wallet/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/payment/:id/:name/:fuelPrice" element={<Payment/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/transactions" element={<Transactions/>}/>
        <Route path="/addStation" element={<AddStation/>}/>
        <Route path="/deleteStation" element={<DeleteStation/>}/>
        <Route path="/updateStation" element={<UpdateStation/>}/>
        <Route path="/viewStation" element={<ViewDetails/>}/>
      </Routes>
    </div>
      </>
  );
}

export default App;

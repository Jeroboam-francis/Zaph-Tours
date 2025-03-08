import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Home/Home";
import Destinations from "./Destinations/Destinations";
import TripTypes from "./TripTypes/TripTypes";
import ContactUs from "./ContactUs/ContactUs";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/triptypes" element={<TripTypes />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;

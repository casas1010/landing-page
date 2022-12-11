import React from "react";
import "./styles.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

import Navbar from "./Components/Navbar";
import PricingHeader from "./Components/Pricing/PricingHeader";
import Plans from "./Components/Pricing/Plans";
import Footer from "./Components/Footer";
import Cards from "./Components/Features/Cards";

export default function App() {
  return (
    <div className="App" id="top">
      <Navbar />

      <Cards procedure="Cardio" />
      <PricingHeader />
      <div className="container">
        <Plans />
        <Footer />
      </div>
    </div>
  );
}

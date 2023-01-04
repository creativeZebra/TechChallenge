import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line

import LandingPage from "pages/LandingPage.js";
import ComponentRenderer from "ComponentRenderer.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuildingInfo from "pages/BuildingInfo";
import Calculation from "pages/Calculation";


export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} />
          <Route path="/components/:type/:name" element={<ComponentRenderer />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/building" element={<BuildingInfo />} />
          <Route path="/calculation" element={<Calculation />} />
        </Routes>
      </Router>
    </>
  );
}
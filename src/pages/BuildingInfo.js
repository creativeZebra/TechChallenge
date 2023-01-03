import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import BuildingHeader from "components/headers/buildingHeader.js";
import Body1 from "components/buildingInfo/Body1.js";

export default () => (
  <AnimationRevealPage>
    <BuildingHeader />
    <Body1 />
    <Footer />
  </AnimationRevealPage>
);

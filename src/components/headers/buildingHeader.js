import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Grid, Typography, Box, Card } from '@mui/material';


import Header, {
  NavLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300 -mb--4 -mt-4`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-green-800`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://www.cash-online.de/wp-content/uploads/2022/07/shutterstock_1746141884.jpg");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-gray-900 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;

export default () => {
  const navLinks = [];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
      </HeroContainer>
    </Container>
  );
};

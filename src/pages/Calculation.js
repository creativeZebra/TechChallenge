import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import BuildingHeader from "components/headers/buildingHeader.js";
import CalcBuildingInformation from "components/calculation/CalcBuildingInformation.js";
import CalcVariantComparison from "components/calculation/CalcVariantComparison.js";
import { Grid, Container } from '@mui/material';



export default () => (
    <AnimationRevealPage>
        <BuildingHeader />
        <Container fixed sx={{ paddingTop: 2 }}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={4}
            >
                <Grid item xs={6}>
                    <CalcBuildingInformation />
                </Grid>
                <Grid item xs={6}>
                    <CalcVariantComparison />
                </Grid>
            </Grid>
        </Container>
        <Footer />
    </AnimationRevealPage>
);

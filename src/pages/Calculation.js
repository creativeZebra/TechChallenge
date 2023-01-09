import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import BuildingHeader from "components/headers/buildingHeader.js";
import CalcBuildingInformation from "components/calculation/CalcBuildingInformation.js";
import CalcUserInformation from "components/calculation/CalcUserInformation.js";
import CalcVariantComparison from "components/calculation/CalcVariantComparison.js";
import { Grid, Container } from '@mui/material';


function Calculation() {
    const [hideGraphs, setHideGraphs] = React.useState(true)

    return (
        <AnimationRevealPage>
            <BuildingHeader />
            <Container fixed sx={{ paddingTop: 4 }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={4}
                >
                    {hideGraphs === true && (
                        <>
                            <Grid item xs={6}>
                                <CalcBuildingInformation />
                            </Grid>
                            <Grid item xs={6}>
                                <CalcUserInformation
                                    hideGraphs={hideGraphs}
                                    setHideGraphs={setHideGraphs}
                                />
                            </Grid>
                        </>
                    )}
                    {hideGraphs === false && (
                        <Grid item xs={12}>
                            <CalcVariantComparison />
                        </Grid>
                    )}
                </Grid>
            </Container>
            <Footer />
        </AnimationRevealPage>
    )
}
export default Calculation;

import React, { useEffect, useState, useContext } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { render } from "react-dom";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import oldHouse from "images/oldHouse.jpeg";
import { Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AutorenewIcon from '@mui/icons-material/Autorenew';

function ComparisonInfoTab5() {
  return (
    <>
      <div>
        <Box width="100%" textAlign="center">
          <Typography variant="h5">Report Summary</Typography>
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="flex"
          alignItems="center"
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Grid item xs={6} md={6} lg={6}>
            <Box width="100%" textAlign="center">
              <Card
                sx={{
                  backgroundColor: "#F5F5F5",
                  height: 290,
                  width: 350,
                  maxHeight: { xs: 300, md: 290 },
                  maxWidth: { xs: 350, md: 320 },
                  marginLeft: 25,
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 290,
                    width: 350,
                    maxHeight: { xs: 300, md: 290 },
                    maxWidth: { xs: 350, md: 320 },
                  }}
                  alt="Hero House Image"
                  src={oldHouse}
                />
              </Card>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <Box width="100%" height="290px" textAlign="center">
              <Card
                sx={{
                  backgroundColor: "#F5F5F5",
                  width: 350,
                  height: 290,
                }}
              >
                <Box m={6} sx={{ mt: 8 }}>
                    <AutorenewIcon fontSize="large" color="success"/>
                  <Typography variant="subtitle1" textAlign="center">
                    Based on your building parameters we recommend to
                  </Typography>
                  <Typography variant="h6">
                    <strong>refurbish</strong>
                  </Typography>
                  <Typography variant="subtitle1">
                    {"your building!"}
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex"
          alignItems="center"
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Grid item xs={12} >
            <Box width="100%" textAlign="center">
                <Divider sx={{ ml: 25 , mr:24}}>
              <Typography variant="h6">Estimated Impact</Typography>
              </Divider>
            </Box>
          </Grid>
          <Grid item xs={12} >
            <Box width="100%" textAlign="flex-start" sx={{ ml: 25 }}>
            <Card
                sx={{
                  backgroundColor: "#F5F5F5",
                  width: 715,
                  height: 210,
                }}
              >
                   <Box width="100%" textAlign="flex-start" sx={{ ml: 20, mt: 2 }}>
              <Typography variant="subtitle1">You can save...</Typography>
              <Typography variant="subtitle1" >
                    <strong >... 580.680€</strong>
                    &nbsp;
                    when refurbishing instead of a new construction.
                  </Typography>
                  <Typography variant="subtitle1">
                    <strong>... 32%</strong>
                    &nbsp;
                    primary energy demand when refurbishing your building.
                  </Typography>
                  <Typography variant="subtitle1">
                    <strong>... 51%</strong>
                    &nbsp;
                    transmission heat loss when refurbishing your building.
                  </Typography>
                  <Typography variant="subtitle1">
                    <strong>... 15%</strong>
                    &nbsp;
                    repayment subsidy with a 150.000€ loan for your building.
                  </Typography>
                  <Typography variant="subtitle1">
                    <strong>... 60.000 kWh</strong>
                    &nbsp;
                    per year when refurbishing your building.
                  </Typography>
                  </Box>
                  </Card>
            </Box>
          </Grid>
          <Grid item xs={12} >
            <Box width="100%" textAlign="center" >
              <Typography variant="subtitle1">See the other tabs or download the report for detailed information.</Typography>
              <Typography color="#0B6B19" variant="subtitle1">Get directly started with your individual refurbishment measure catalog:</Typography>
              <Button variant="contained"
                  sx={{
                    backgroundColor: '#2E7D32',
                    mt:2,
                    '&:hover': {
                      backgroundColor: '#276749',
                      color: '#ffffff',
                    }
                  }}
                  startIcon={<ListAltIcon />}>
                  <Typography sx={{ textTransform: "none" }}>Refurbish Now</Typography>
                </Button>
              </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ComparisonInfoTab5;

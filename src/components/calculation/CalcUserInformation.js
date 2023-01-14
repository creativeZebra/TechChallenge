import React from "react";
import { Grid, Typography, Box, Card, CardMedia } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ComparisonInfoTab1 from "components/calculation/ComparisonInfoTab1";
import ComparisonInfoTab2 from "components/calculation/ComparisonInfoTab2";
import ComparisonInfoTab3 from "components/calculation/ComparisonInfoTab3";
import ComparisonInfoTab4 from "components/calculation/ComparisonInfoTab4";
import Button from "@mui/material/Button";
import tw from "twin.macro";
import styled from "styled-components";
import CardContent from "@mui/material/CardContent";
import { StandardDropdown } from "components/standardComponents/StandardDropdown";
import houseImage from "images/house.png";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Stack from '@mui/material/Stack';


function CalcUserInformation({ hideGraphs, setHideGraphs }) {
  // for tabs
  const [initTabValue, setInitTabValue] = React.useState("1");
  const handleTabChange = (event, newValue) => {
    setInitTabValue(newValue);
  };

  // for more comparison fields
  const [addComparisonField, setAddComparisonField] = React.useState(0)


  const handleHideGraphs = (event) => {
    setHideGraphs(false);
  };

  const buildingComparisons = [
    {
      value: "Building 1",
      label: "KfW 40",
    },
    {
      value: "New Building",
      label: "KfW 50",
    },
    {
      value: "Building 2",
      label: "KfW 55",
    },
  ];

  return (
    <Card sx={{ mb: 5 }}>
      <Box width="100%" textAlign="center" mt={4} mb={3}>
        <Typography variant="h4">Variant Comparison</Typography>
      </Box>
      <Box m={2}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={12}>
            <Box width="100%" textAlign="center">
              <Typography variant="h6">Comparison Model Created</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Please update your building information. You can compare your
              building with different alternatives as soon as you filled in all
              required fields.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="center" alignContent="center">
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={houseImage} alt="house" />
            </Box>
            <Box width="100%" alignSelf="center" mt={2}>
              <Typography variant="h6">Compare Your Building With</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <StandardDropdown
              heading={"Building Comparison 1"}
              label={"Building Comparison 1"}
              data={buildingComparisons}
            ></StandardDropdown>
          </Grid>
          {addComparisonField > 0 && (
            <Grid item xs={12}>
              <StandardDropdown
                heading={"Building Comparison 2"}
                label={"Building Comparison 2"}
                data={buildingComparisons}
              ></StandardDropdown>
            </Grid>
          )
          }
          {addComparisonField > 1 && (
            <Grid item xs={12}>
              <StandardDropdown
                heading={"Building Comparison 3"}
                label={"Building Comparison 3"}
                data={buildingComparisons}
              ></StandardDropdown>
            </Grid>
          )
          }
          {addComparisonField > 2 && (
            <Grid item xs={12}>
              <StandardDropdown
                heading={"Building Comparison 4"}
                label={"Building Comparison 4"}
                data={buildingComparisons}
              ></StandardDropdown>
            </Grid>
          )
          }
          {addComparisonField > 3 && (
            <Grid item xs={12}>
              <StandardDropdown
                heading={"Building Comparison 5"}
                label={"Building Comparison 5"}
                data={buildingComparisons}
              ></StandardDropdown>
            </Grid>
          )
          }

          <Grid item xs={12}>
            <Box width="100%" textAlign="center">
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0}
              >
                {addComparisonField < 4 && (
                  <Button onClick={() => setAddComparisonField(addComparisonField + 1)}>
                    <Fab
                      size="small"
                      sx={{
                        backgroundColor: '#2E7D32',
                        color: '#ffffff',
                        '&:hover': {
                          backgroundColor: '#276749',
                          color: '#ffffff',
                        }
                      }}
                    >
                      <AddIcon />
                    </Fab>
                  </Button>
                )}
                {addComparisonField > 0 && (
                  <Box>
                    <Button onClick={() => setAddComparisonField(addComparisonField - 1)}>
                      <Fab
                        size="small"
                        sx={{
                          backgroundColor: '#616161',
                          color: '#ffffff',
                          '&:hover': {
                            backgroundColor: '#424242',
                            color: '#ffffff',
                          }
                        }}
                      >
                        <RemoveIcon />
                      </Fab>
                    </Button>
                  </Box>
                )
                }
              </Stack>
            </Box>

          </Grid>


          <Grid item xs={12}>
            <Box width="100%" textAlign="center" mt={2} mb={2}>
              <Button
                color="success"
                variant="contained"
                onClick={handleHideGraphs}
              >
                <Typography sx={{ textTransform: "none" }}>
                  Compare Variants
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Card >
  );
}

export default CalcUserInformation;

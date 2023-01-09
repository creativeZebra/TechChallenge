import React, { useEffect, useState, useContext } from "react";
import { Grid, Typography, Box, Card } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ComparisonInfoTab1 from "components/calculation/ComparisonInfoTab1";
import ComparisonInfoTab2 from "components/calculation/ComparisonInfoTab2";
import ComparisonInfoTab3 from "components/calculation/ComparisonInfoTab3";
import ComparisonInfoTab4 from "components/calculation/ComparisonInfoTab4";
import Button from '@mui/material/Button';
import tw from "twin.macro";
import styled from "styled-components";
import CardContent from '@mui/material/CardContent';
import { StandardDropdown } from "components/standardComponents/StandardDropdown";


function CalcVariantComparison({ hideGraphs, setHideGraphs }) {
  // for tabs
  const [initTabValue, setInitTabValue] = React.useState('1');
  const handleTabChange = (event, newValue) => {
    setInitTabValue(newValue);
  };

  const [gridChange, setGridChange] = React.useState(6);
  const handleChangeGrid = (event) => {
    if (gridChange == 6) {
      setGridChange(10);

    } else {
      setGridChange(6);

    }
  };


  return (
    <Card>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ mt: 2 }}
      >
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Box width="100%" textAlign="center">
            <Typography variant="h4">Variant Comparison</Typography>
            <Button
              color="success"
              variant="text"
              onClick={handleChangeGrid}><Typography sx={{ textTransform: "none" }} >Change Grid Size</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={initTabValue}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                  onChange={handleTabChange}
                  TabIndicatorProps={{ style: { background: "#276749" } }}
                  textColor="#276749"
                  indicatorColor="#276749"
                  centered
                >
                  <Tab label="Energy Consumption" value="1" sx={{ textTransform: "none" }} />
                  <Tab label="Costs" value="2" sx={{ textTransform: "none" }} />
                  <Tab label="Total Comparison" value="3" sx={{ textTransform: "none" }} />
                  <Tab label="Finance Benefits" value="4" sx={{ textTransform: "none" }} />
                </TabList>
              </Box>
              <TabPanel value="1">
                <ComparisonInfoTab1
                  gridChange={gridChange}
                />
              </TabPanel>
              <TabPanel value="2">
                <ComparisonInfoTab2 />
              </TabPanel>
              <TabPanel value="3">
                <ComparisonInfoTab3 />
              </TabPanel>
              <TabPanel value="4">
                <ComparisonInfoTab4 />
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CalcVariantComparison;

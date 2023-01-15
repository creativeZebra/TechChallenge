import React, { useEffect, useState, useContext } from "react";
import { Grid, Typography, Box, Card } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ComparisonInfoTab1 from "components/calculation/ComparisonInfoTab1_Energy";
import ComparisonInfoTab2 from "components/calculation/ComparisonInfoTab2_Costs";
import ComparisonInfoTab3 from "components/calculation/ComparisonInfoTab3_SustainabilityRep";
import ComparisonInfoTab4 from "components/calculation/ComparisonInfoTab4_FinanceBenefits";
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function CalcVariantComparison({ hideGraphs, setHideGraphs }) {
  // for tabs
  const [initTabValue, setInitTabValue] = React.useState('1');
  const handleTabChange = (event, newValue) => {
    setInitTabValue(newValue);
  };

  return (
    <Card sx={{ mb: 4 }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ mt: 2 }}
      >
        <Grid item xs={12}>
          <Box mr={2}>
            <Box
              width="100%"
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}>
              <Stack direction="row" spacing={2}>
                <Button variant="contained"
                  sx={{
                    backgroundColor: '#2E7D32',
                    '&:hover': {
                      backgroundColor: '#276749',
                      color: '#ffffff',
                    }
                  }}
                  startIcon={<CloudDownloadOutlinedIcon />}>
                  <Typography sx={{ textTransform: "none" }}>Export Report</Typography>
                </Button>
              </Stack>


            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Box width="100%" textAlign="center">
            <Typography variant="h4">Your Individual Report</Typography>
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
                  <Tab label="Overview" value="5" sx={{ textTransform: "none" }} />
                  <Tab label="Total Comparison" value="3" sx={{ textTransform: "none" }} />
                  <Tab label="Energy Consumption" value="1" sx={{ textTransform: "none" }} />
                  <Tab label="Costs" value="2" sx={{ textTransform: "none" }} />
                  <Tab label="Finance Benefits" value="4" sx={{ textTransform: "none" }} />
                </TabList>
              </Box>
              <TabPanel value="1">
                <ComparisonInfoTab1 />
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

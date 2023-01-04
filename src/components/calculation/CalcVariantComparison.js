import React from "react";
import { Grid, Typography, Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ComparisonInfoTab1 from "components/calculation/ComparisonInfoTab1";
import ComparisonInfoTab2 from "components/calculation/ComparisonInfoTab2";
import ComparisonInfoTab3 from "components/calculation/ComparisonInfoTab3";
import ComparisonInfoTab4 from "components/calculation/ComparisonInfoTab4";
import Button from '@mui/material/Button';


function CalcBuildingInformation() {
  // for tabs
  const [initTabValue, setInitTabValue] = React.useState('1');
  const handleTabChange = (event, newValue) => {
    setInitTabValue(newValue);
  };


  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Box width="100%" textAlign="center">
          <Typography variant="h4">Variant Comparison</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={initTabValue}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleTabChange}>
                <Tab label="Energy Consumption" value="1" sx={{ textTransform: "none" }} />
                <Tab label="Costs" value="2" sx={{ textTransform: "none" }} />
                <Tab label="Total Comparison" value="3" sx={{ textTransform: "none" }} />
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
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <Box width="100%" textAlign="center">
          <Button color="success" variant="contained"><Typography sx={{ textTransform: "none" }} >Get detailed Renovation Proposals</Typography></Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default CalcBuildingInformation;
import React from "react";
import { Grid, Typography, Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BuildingInfoTab1 from "components/calculation/BuildingInfoTab1";
import BuildingInfoTab2 from "components/calculation/BuildingInfoTab2";
import BuildingInfoTab3 from "components/calculation/BuildingInfoTab3";

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
          <Typography variant="h4">Building Information</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={initTabValue}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleTabChange}>
                <Tab label="Basic Information" value="1" sx={{ textTransform: "none" }} />
                <Tab label="Building Blocks" value="2" sx={{ textTransform: "none" }} />
                <Tab label="Housing System" value="3" sx={{ textTransform: "none" }} />
              </TabList>
            </Box>
            <TabPanel value="1">
              <BuildingInfoTab1 />
            </TabPanel>
            <TabPanel value="2">
              <BuildingInfoTab2 />
            </TabPanel>
            <TabPanel value="3">
              <BuildingInfoTab3 />
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  )
}

export default CalcBuildingInformation;

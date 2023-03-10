import React from "react";
import { Grid, Typography, Box, Card } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BuildingInfoTab1 from "components/calculation/BuildingInfoTab1";
import BuildingInfoTab2 from "components/calculation/BuildingInfoTab2";
import BuildingInfoTab3 from "components/calculation/BuildingInfoTab3";
import Home from '@mui/icons-material/Home';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';

function CalcBuildingInformation() {
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
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Box width="100%" textAlign="center">
            <Typography variant="h4">Building Information</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Box sx={{ width: '100%', typography: 'body1'}}>
            <TabContext value={initTabValue}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                  onChange={handleTabChange}
                  TabIndicatorProps={{ style: { background: "#276749" } }}
                  textColor="#276749"
                  indicatorColor="#276749"
                  centered
                >
                  <Tab icon={<Home color="success" />} label="Basic Information" value="1" sx={{ textTransform: "none" }} />
                  <Tab icon={<ViewAgendaIcon color="success" />} label="Building Blocks" value="2" sx={{ textTransform: "none" }} />
                  <Tab icon={<SettingsSuggestIcon color="success" />} label="Housing System" value="3" sx={{ textTransform: "none" }} />
                </TabList>
              </Box>
              <TabPanel value="1">
                
                <BuildingInfoTab1 />
              </TabPanel>
              <TabPanel value="2">
              <Box sx={{overflowY: "auto",
              maxHeight: "900px",
              display: "flex",
              flexGrow: 1,
              flexDirection: "column", m:-1}}>
                <BuildingInfoTab2 />
                </Box>
              </TabPanel>
              <TabPanel value="3">
                <BuildingInfoTab3 />
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CalcBuildingInformation;

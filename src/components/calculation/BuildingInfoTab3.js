import React from "react";
import { StandardDropdown } from "components/standardComponents/StandardDropdown";
import StandardNumericField from "components/standardComponents/StandardNumericfield.js";
import { StandardTextField } from "components/standardComponents/StandardTextfield";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

function BuildingInfoTab3() {
  const [photo, setPhoto] = React.useState("2");

  const handleChange = (event) => {
    setPhoto(event.target.value);
    console.log(event.target.value);
  };

  const heating = [
    {
      value: "1",
      label: "Gas",
    },
    {
      value: "2",
      label: "Oil",
    },
    {
      value: "3",
      label: "Electric Heat Pump",
    },
    {
      value: "4",
      label: "District Heating",
    },
    {
      value: "5",
      label: "Pellets",
    },
  ];

  const hotWater = [
    {
      value: "1",
      label: "Gas",
    },
    {
      value: "2",
      label: "Oil",
    },
    {
      value: "3",
      label: "Electric Heat Pump",
    },
    {
      value: "4",
      label: "District Heating",
    },
    {
      value: "5",
      label: "Pellets",
    },
  ];

  const ventilation = [
    {
      value: "1",
      label: "Natural Ventilation",
    },
    {
      value: "2",
      label: "Mechanical Ventilation",
    },
  ];

  const photovoltaic = [
    {
      value: "1",
      label: "Available",
    },
    {
      value: "2",
      label: "Not Available",
    },
  ];

  const ori = [
    {
      value: "1",
      label: "South (default)",
    },
    {
      value: "2",
      label: "East",
    },
    {
      value: "3",
      label: "West",
    },
    {
      value: "4",
      label: "Nord",
    },
    {
      value: "5",
      label: "Horizontal",
    },
  ];
  const inclination = [
    {
      value: "1",
      label: "30° (default)",
    },
    {
      value: "2",
      label: "45°",
    },
    {
      value: "3",
      label: "60°",
    },
    {
      value: "4",
      label: "90°",
    },
    {
      value: "5",
      label: "0°",
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 1 }}
    >
      <Box width="100%" textAlign="center">
        <Divider sx={{ ml: 2 }}>
          <Typography variant="h6">Heating & Hot Water</Typography>
        </Divider>
      </Box>
      <StandardDropdown
        heading={"Heating System"}
        label={"Heating System"}
        data={heating}
        value={3}
      ></StandardDropdown>
      <StandardDropdown
        heading={"Hot Water System"}
        label={"Hot Water System"}
        data={hotWater}
        value={3}
      ></StandardDropdown>
      <Grid item xs={12}>
        <Box width="100%" textAlign="center" mt={2}>
          <Divider sx={{ ml: 2 }}>
            <Typography variant="h6">Other Systems</Typography>
          </Divider>
        </Box>
      </Grid>
      <StandardDropdown
        heading={"Ventilation System"}
        label={"Ventilation System"}
        data={ventilation}
        value={1}
      ></StandardDropdown>
      <StandardDropdown
        heading={"Photovoltaic Plant"}
        label={"Photovoltaic Plant"}
        data={photovoltaic}
        onChange={handleChange}
        value={photo}
      ></StandardDropdown>
      {photo === "1" && (
        <>
          <StandardDropdown
            heading={"Photovoltaic Orientation"}
            label={"Photovoltaic Orientation"}
            data={ori}
            value={1}
          ></StandardDropdown>
          <StandardDropdown
            heading={"Photovoltaic Inclination"}
            label={"Photovoltaic Inclination"}
            data={inclination}
            value={1}
          ></StandardDropdown>
        </>
      )}
    </Grid>
  );
}

export default BuildingInfoTab3;

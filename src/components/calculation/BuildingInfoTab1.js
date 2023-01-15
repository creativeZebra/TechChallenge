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

function BuildingInfoTab1() {
  const floors = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
    {
      value: "5",
      label: "5",
    },
    {
      value: "6",
      label: "6",
    },
  ];

  const apartments = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
    {
      value: "5",
      label: "5",
    },
    {
      value: "6",
      label: "6",
    },
  ];

  const heatSituationCellar = [
    {
      value: "1",
      label: "Cellar non existent (flat roof)",
    },
    {
      value: "2",
      label: "Cellar not conditioned",
    },
    {
      value: "3",
      label: "Cellar partly conditioned",
    },
    {
      value: "4",
      label: "Cellar completely conditioned",
    },
  ];

  const heatSituationAttic = [
    {
      value: "1",
      label: "Attic non existent (flat roof)",
    },
    {
      value: "2",
      label: "Attic not conditioned",
    },
    {
      value: "3",
      label: "Attic partly conditioned",
    },
    {
      value: "4",
      label: "Attic completely conditioned",
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
                <Typography variant="h6">Area</Typography>
                </Divider>
        </Box>
      <StandardDropdown
        heading={"Floors"}
        label={"Floors"}
        data={floors}
        value={4}
      ></StandardDropdown>
      <StandardNumericField
        value={"489"}
        label={"Net floor area"}
        InputAdornmentType="SquareMeter"
        DecimalScaleType="Normal"
      ></StandardNumericField>
      <StandardNumericField
        value={"2,5"}
        label={"Story height"}
        InputAdornmentType="Meter"
        DecimalScaleType="Percentage"
      ></StandardNumericField>
      <Box width="100%" textAlign="center"  sx={{ mt: 2 }}>
      <Divider sx={{ ml: 2 }}> <Typography variant="h6">Heating</Typography> </Divider>
        </Box>
      <StandardDropdown
        heading={"Heating Situation Attic Rooms"}
        label={"Heating Situation Attic Rooms"}
        data={heatSituationAttic}
        value={"2"}
      ></StandardDropdown>
      <StandardDropdown
        heading={"Heating Situation Cellar Rooms"}
        label={"Heating Situation Cellar Rooms"}
        data={heatSituationCellar}
        value={"2"}
      ></StandardDropdown>
    </Grid>
  );
}

export default BuildingInfoTab1;

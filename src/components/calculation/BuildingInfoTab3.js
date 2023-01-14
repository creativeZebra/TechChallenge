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
            label: "Electric",
        },
        {
            value: "4",
            label: "District Heating",
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
            label: "Electric",
        },
        {
            value: "4",
            label: "District Heating",
        },
    ];

    const ventilation = [
        {
            value: "1",
            label: "No",
        },
        {
            value: "2",
            label: "Bad",
        },
        {
            value: "3",
            label: "Medium",
        },
        {
            value: "4",
            label: "Good",
        },
    ];

    const photovoltaic = [
        {
            value: "1",
            label: "No",
        },
        {
            value: "2",
            label: "Bad",
        },
        {
            value: "3",
            label: "Medium",
        },
        {
            value: "4",
            label: "Good",
        },
    ];

    return (
        <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 2 }}
        >
            <Box width="100%" textAlign="center">
                <Typography variant="h6">Heating & Hot Water</Typography>
            </Box>
            <StandardDropdown
                heading={"Heating System"}
                label={"Heating System"}
                data={heating}
                value={2}
            ></StandardDropdown>
            <StandardDropdown
                heading={"Hot Water System"}
                label={"Hot Water System"}
                data={hotWater}
                value={4}
            ></StandardDropdown>
            <Grid item xs={12}>
                <Box width="100%" textAlign="center" mt={2}>
                    <Typography variant="h6">Other Systems</Typography>
                </Box>
            </Grid>
            <StandardDropdown
                heading={"Ventilation System"}
                label={"Ventilation System"}
                data={ventilation}
                value={4}
            ></StandardDropdown>
            <StandardDropdown
                heading={"Photovoltaic - Systems"}
                label={"Photovoltaic Systems"}
                data={photovoltaic}
                value={4}
            ></StandardDropdown>
        </Grid>
    );
}

export default BuildingInfoTab3;

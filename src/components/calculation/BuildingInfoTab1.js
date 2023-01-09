import { StandardDropdown } from "components/standardComponents/StandardDropdown";
import StandardNumericField from "components/standardComponents/StandardNumericfield.js";
import { StandardTextField } from "components/standardComponents/StandardTextfield";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';


function BuildingInfoTab1() {

    const floors = [
        {
            value: '1',
            label: '1',
        },
        {
            value: '2',
            label: '2',
        },
        {
            value: '3',
            label: '3',
        },
        {
            value: '4',
            label: '4',
        },
        {
            value: '5',
            label: '5',
        },
        {
            value: '6',
            label: '6',
        },
    ];

    const apartments = [
        {
            value: '1',
            label: '1',
        },
        {
            value: '2',
            label: '2',
        },
        {
            value: '3',
            label: '3',
        },
        {
            value: '4',
            label: '4',
        },
        {
            value: '5',
            label: '5',
        },
        {
            value: '6',
            label: '6',
        },
    ];

    const heatSituationCellar = [
        {
            value: 'Good',
            label: 'Good',
        },
        {
            value: 'Medium',
            label: 'Medium',
        },
        {
            value: 'Bad',
            label: 'Bad',
        },
    ];

    const heatSituationAttic = [
        {
            value: 'Good',
            label: 'Good',
        },
        {
            value: 'Medium',
            label: 'Medium',
        },
        {
            value: 'Bad',
            label: 'Bad',
        },
    ];
    return (
        <>
            <StandardDropdown
                heading={'Floors'}
                label={'Floors'}
                data={floors}
            ></StandardDropdown>
            <StandardDropdown
                heading={'Apartments'}
                label={'Apartments'}
                data={apartments}
            ></StandardDropdown>
            <StandardNumericField
                value={''}
                label={"Net floor area"}
                InputAdornmentType="SquareMeter"
                DecimalScaleType="Normal"
            >
            </StandardNumericField>
            <StandardNumericField
                value={''}
                label={"Heated floor area"}
                InputAdornmentType="SquareMeter"
                DecimalScaleType="Normal"
            >
            </StandardNumericField>
            <StandardNumericField
                value={''}
                label={"Story height"}
                InputAdornmentType="Meter"
                DecimalScaleType="Percentage"
            >
            </StandardNumericField>
            <StandardDropdown
                heading={'Heating Situation Attic Rooms'}
                label={'Apartments'}
                data={heatSituationAttic}
            ></StandardDropdown>
            <StandardDropdown
                heading={'Heating Situation Cellar Rooms'}
                label={'Apartments'}
                data={heatSituationCellar}
            ></StandardDropdown>
            <Typography>Results</Typography>
            <Card>Total volume: X m³</Card>
            <Card>Total net floor area: X m³</Card>
            <Card>Total energy procurement area: X m³</Card>
        </>
    )
}

export default BuildingInfoTab1;
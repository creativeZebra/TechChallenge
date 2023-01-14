import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { NumericFormat } from "react-number-format";
import { Grid, Box } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';


//Implements a Textfield with standard design for Number inputs
//Only allows for numeric input values
export const StandardNumericField2 = (props) => {
    const materialUiTextFieldProps = {
        required: false,
        fullWidth: true,
        variant: "outlined",
        thousandSeparator: ".",
        allowNegative: false,
        decimalSeparator: ",",
        
    };
    function getInputAdormentText(type) {
        switch (type) {
            case "Meter":
                return "m";
            case "Volume":
                return "m³";
            case "SquareMeter":
                return "m²";
                case "CentiMeter":
                return "cm";
        }
    }

    function getDecimalScale(type) {
        switch (type) {
            case "Comma":
                return 2;
            case "Normal":
                return 0;
        }
    }

    return (
        <>
            <Grid item xs={12}>
                <Box width="100%" textAlign="center">
                    <NumericFormat
                        sx={{ width: 8 / 10 }}
                        customInput={TextField}
                        value={props.value == 0 ? "" : props.value}
                        label={props.label}
                        onValueChange={props.onValueChange}
                        color="success"
                        placeholder="Please enter number"
                        inputProps={{min: 0, style: { textAlign: 'center' }}}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    {getInputAdormentText(props.InputAdornmentType)}
                                </InputAdornment>
                            ),
                        }}
                        decimalScale={getDecimalScale(props.DecimalScaleType)}
                        {...materialUiTextFieldProps}
                    />
                </Box>
            </Grid>
        </>
    );
};

export default StandardNumericField2;
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { NumericFormat } from "react-number-format";

//Implements a Textfield with standard design for Number inputs
//Only allows for numeric input values
export const StandardNumericField = (props) => {
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
            <NumericFormat
                customInput={TextField}
                value={props.value == 0 ? "" : props.value}
                label={props.label}
                onValueChange={props.onValueChange}
                placeholder="Please enter number"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            {getInputAdormentText(props.InputAdornmentType)}
                        </InputAdornment>
                    ),
                }}
                decimalScale={getDecimalScale(props.DecimalScaleType)}
                {...materialUiTextFieldProps}
            />
        </>
    );
};

export default StandardNumericField;

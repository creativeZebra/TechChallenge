import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

//Implements a Textfield with standard design for Number inputs
//Only allows for numeric input values
//-, +, ., e and E are not allowed
export const StandardTextField = (props) => {
  return (
    <TextField
    sx={{ width: 6 / 10 }}
      value={""}
      required={props.required}
      label={props.label}
      variant="outlined"
      onChange={props.onChange}
      InputProps={{
      }}
    ></TextField>
  );
};
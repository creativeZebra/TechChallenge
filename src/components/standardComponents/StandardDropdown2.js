import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Box } from '@mui/material';

//Implements a Textfield with standard design for Number inputs
//Only allows for numeric input values
//-, +, ., e and E are not allowed
export const StandardDropdown2 = (props) => {
    const heading = props.heading
    return (
        <>
            <Grid item xs={12}>
                <Box width="100%"  textAlign="center">
                    <FormControl sx={{ width: 8 / 10 }}>
                        <InputLabel color="success">
                            {heading}
                        </InputLabel>
                        <Select 
                            value={props.value}
                            label={props.label}
                            color="success"
                        >
                            {props.data.map((option) => (
                                <MenuItem  key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
        </>
    );
};
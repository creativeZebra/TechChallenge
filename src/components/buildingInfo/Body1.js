import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import styled from "styled-components";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/plus.svg";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

const FormContainer = tw.div`w-full flex-1 mt-8`;
const Form = tw.form`mx-auto max-w-xs`;
const MainContent = tw.div`min-h-10 mb-10 -m-2 mt-10 flex flex-col items-center`;

function Body1() {
  const [age, setAge] = React.useState("");

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const [type, setType] = React.useState("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const [climate, setClimate] = React.useState("");

  const handleClimateChange = (event) => {
    setClimate(event.target.value);
  };

  return (
    <MainContent>
      <Typography variant="h4" gutterBottom>
        Enter Building Information
      </Typography>
      <FormContainer>
        <Form>
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            sx={{ mt: 3, width: "32ch" }}
            color="success"
          />
          <FormControl fullWidth sx={{ mt: 3, width: "32ch" }}>
            <InputLabel id="demo-simple-select-label" color="success">
              Climate Region
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={climate}
              label="Climate Region"
              onChange={handleClimateChange}
              sx={{ width: "36ch" }}
              color="success"
            >
              <MenuItem value={1}>1 - XY</MenuItem>
              <MenuItem value={2}>2 - XY</MenuItem>
              <MenuItem value={3}>3 - XY</MenuItem>
              <MenuItem value={4}>4 - XY</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mt: 3, width: "32ch" }}>
            <InputLabel id="demo-simple-select-label" color="success">
              Building Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Building Type"
              onChange={handleTypeChange}
              sx={{ width: "36ch" }}
              color="success"
            >
              <MenuItem value={1}>Single Family House</MenuItem>
              <MenuItem value={2}>Terraced House</MenuItem>
              <MenuItem value={3}>Multi Family House</MenuItem>
              <MenuItem value={4}>Apartment Block</MenuItem>
              <MenuItem value={5}>Company Building</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mt: 3, width: "32ch" }}>
            <InputLabel id="demo-simple-select-label" color="success">
              Construction Year Class
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Construction Year Class"
              onChange={handleAgeChange}
              sx={{ width: "36ch" }}
              color="success"
            >
              <MenuItem value={10}>... 1859</MenuItem>
              <MenuItem value={20}>1860 ... 1918</MenuItem>
              <MenuItem value={30}>1919 ... 1948</MenuItem>
              <MenuItem value={40}>1949 ... 1957</MenuItem>
              <MenuItem value={50}>1958 ... 1968</MenuItem>
              <MenuItem value={60}>1969 ... 1978</MenuItem>
              <MenuItem value={70}>1979 ... 1983</MenuItem>
              <MenuItem value={80}>1984 ... 1994</MenuItem>
              <MenuItem value={90}>1995 ... 2001</MenuItem>
              <MenuItem value={100}>2002 ... 2009</MenuItem>
              <MenuItem value={110}>2010 ... 2015</MenuItem>
              <MenuItem value={120}>2016 ...</MenuItem>
            </Select>
          </FormControl>
          <Button
            sx={{ ml: 3.5, mt: 3, width: "34ch" }}
            color="success"
            component={Link} 
            to="/calculation"
            variant="contained"
          >
            Load Building
          </Button>
        </Form>
      </FormContainer>
    </MainContent>
  );
}

export default Body1;

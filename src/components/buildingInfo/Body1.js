import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/plus.svg";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Home from '@mui/icons-material/Home';
import TravelExplore from '@mui/icons-material/TravelExplore';
import HomeWork from '@mui/icons-material/HomeWork';
import CalendarMonth from '@mui/icons-material/CalendarMonth';

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

  const [zipCode, setZipCode] = React.useState("");

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  return (
    <MainContent>
      <Typography variant="h4" gutterBottom>
        Enter Basic Building Information
      </Typography>
      <Typography variant="h6" gutterBottom display="block">
        If you enter the following information, we can load the respective standard values of your reference building.
      </Typography>
      <Box
        component="img"
        sx={{
          height: 290,
          width: 350,
          maxHeight: { xs: 300, md: 290 },
          maxWidth: { xs: 350, md: 320 },
          marginLeft: 0,
        }}
        alt="Hero House Image"
        src="https://www.freevector.com/uploads/vector/preview/27652/Renovation_vector_5.jpg"
      />
      <FormContainer>
        <Form>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Home sx={{ color: 'action.active', mr: 1, my: 2 }} />
            <TextField
              id="outlined-basic"
              label="Building Postcode"
              variant="outlined"
              sx={{ mt: 0.5, width: "32ch" }}
              color="success"
              onChange={handleZipCodeChange}
            />
          </Box>
          {zipCode === "68165" && (
            <FormControl fullWidth sx={{ mt: 3, width: "32ch" }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TravelExplore sx={{ color: 'action.active', mr: 1, my: 2 }} />
                <InputLabel id="demo-simple-select-label" color="success" sx={{ ml: 4 }}>
                  Climate Region
                </InputLabel>
                <Select
                  disabled
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={12}
                  label="Climate Region"
                  onChange={handleClimateChange}
                  sx={{ width: "36ch" }}
                  color="success"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Home />
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value={1}>Region 1 - Bremerhaven</MenuItem>
                  <MenuItem value={2}>Region 2 - Rostock</MenuItem>
                  <MenuItem value={3}>Region 3 - Hamburg</MenuItem>
                  <MenuItem value={4}>Region 4 - Potsdam</MenuItem>
                  <MenuItem value={5}>Region 5 - Essen</MenuItem>
                  <MenuItem value={6}>Region 6 - Bad Marienberg</MenuItem>
                  <MenuItem value={7}>Region 7 - Kassel</MenuItem>
                  <MenuItem value={8}>Region 8 - Braunlage</MenuItem>
                  <MenuItem value={9}>Region 9 - Chemnitz</MenuItem>
                  <MenuItem value={10}>Region 10 - Hof</MenuItem>
                  <MenuItem value={11}>Region 11 - Fichtelberg</MenuItem>
                  <MenuItem value={12}>Region 12 - Mannheim</MenuItem>
                  <MenuItem value={13}>Region 13 - Passau</MenuItem>
                  <MenuItem value={14}>Region 14 - Stötten</MenuItem>
                  <MenuItem value={15}>Region 15 - Garmisch-Partenkirchen</MenuItem>
                </Select>
              </Box>
            </FormControl>
          )
          }
          <FormControl fullWidth sx={{ mt: 3, width: "32ch" }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <HomeWork sx={{ color: 'action.active', mr: 1, my: 2 }} />
              <InputLabel id="demo-simple-select-label" color="success" sx={{ ml: 4 }}>
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
            </Box>
          </FormControl>
          <FormControl fullWidth sx={{ mt: 3, width: "32ch" }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <CalendarMonth sx={{ color: 'action.active', mr: 1, my: 2 }} />
              <InputLabel id="demo-simple-select-label" color="success" sx={{ ml: 4 }}>
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
            </Box>
          </FormControl>
          <Button
            sx={{ ml: 0.5, mt: 3, width: "41ch", mb: 3 }}
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

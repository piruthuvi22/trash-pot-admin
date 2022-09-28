import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import TextBox from "./core/textField";

const RightBar = () => {
  const [age, setAge] = useState(10);
  const handleChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <>
      <Grid container spacing={2} padding={1}>
        <Grid
          item
          container
          xs={6}
          alignItems={"center"}
          className="d-flex justify-content-center align-items-center"
        >
          <HomeIcon />
          <TextField size="small" />
        </Grid>
        <Grid item xs={6}>
          <TextBox />
        </Grid>
      </Grid>
      <Container maxWidth={"lg"} sx={{ marginTop: 3 }}>
        <Paper elevation={1}>
          <Stack direction={"column"} spacing={1} paddingX={15} paddingY={3}>
            <h3>Schedule for this week</h3>
            <h4>Date ( Valid Period ) :</h4>
            {/* Date valid period */}
            <Grid container alignItems={"center"}>
              <Grid item xs={6}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={""}
                >
                  <h4>From - </h4>
                  <TextField size="small" />
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={""}
                >
                  <h4>From - </h4>
                  <TextField size="small" />
                </Stack>
              </Grid>
            </Grid>

            {/* Date valid period */}
            <h4>Time period :</h4>
            <Grid container alignItems={"center"}>
              <Grid item xs={6}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={""}
                >
                  <h4>From - </h4>
                  <TextField size="small" />
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={""}
                >
                  <h4>From - </h4>
                  <TextField size="small" />
                </Stack>
              </Grid>
            </Grid>

            <Grid container alignItems={"center"}>
              <Grid item xs={6}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={""}
                >
                  <h4>Number of working Employees : </h4>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={""}
                >
                  <FormControl fullWidth size="small">
                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      // label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <Grid container alignItems={"center"}>
              <Grid item xs={6}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={""}
                >
                  <h4>Number of working Trucks : </h4>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={""}
                >
                  <FormControl fullWidth size="small">
                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      // label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <Grid container alignItems={"center"}>
              <Grid item xs={6}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={""}
                >
                  <h4>Addition Garbage Requests for week : </h4>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={""}
                >
                  <FormControl fullWidth size="small">
                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      // label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Grid>
            </Grid>

            <Grid container alignItems={"center"}>
              <Grid item xs={6}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={""}
                >
                  <h4>Events Plan for this Week : </h4>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-evenly"}
                >
                  <Button variant="outlined">10 Times.com</Button>
                  <Button variant="outlined">Meetups.com</Button>
                </Stack>
              </Grid>
            </Grid>
            <Grid container justifyContent={"center"}>
              <Button variant="contained">Generate Time Table</Button>
            </Grid>
          </Stack>
        </Paper>

        <Grid container marginY={2}>
          <Grid item md={2}>
            <h4>Municipal Wards :</h4>
          </Grid>
          <Grid item md={10}>
            <Grid container spacing={3} direction={"row"}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((ele) => (
                <Grid item>
                  <Button variant="contained" size="small">
                    Dematagoda
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RightBar;

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
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TextBox from "../../components/core/textField";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Dashboard = () => {
  const [age, setAge] = useState(10);
  const handleChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <>
      <Grid container spacing={1} padding={1} height={"10%"}>
        <Grid
          item
          container
          xs={6}
          alignItems={"center"}
          className="d-flex justify-content-center align-items-center"
        >
          <HomeIcon />
          <h3>Dashboard</h3>
        </Grid>
        <Grid item xs={6}>
          <TextBox />
        </Grid>
      </Grid>
      {/* <Container maxWidth={"lg"} sx={{ marginTop: 3 }}> */}
      <Grid container maxWidth={"xxl"} height={"90%"} spacing={1} padding={1}>
        <Grid item xs={8}>
          <Stack
            direction={"column"}
            height="100%"
            justifyContent={"space-between"}
          >
            <Paper
              elevation={1}
              sx={{
                backgroundColor: "#D9D9D9",
                textAlign: "center",
              }}
            >
              <Box p={3}>
                <h2>Employee Summary </h2>
                <Stack direction="row" justifyContent={"space-evenly"}>
                  <Box
                    sx={{
                      backgroundColor: "#D9D9D9",
                      borderColor: "#222",
                      borderWidth: 2,
                      borderStyle: "solid",
                      textAlign: "center",
                      padding: 3,
                      width: "30%",
                    }}
                  >
                    <h5>Employee Count</h5>
                    <h1>364</h1>
                  </Box>

                  <Box
                    sx={{
                      backgroundColor: "#D9D9D9",
                      borderColor: "#222",
                      borderWidth: 2,
                      borderStyle: "solid",
                      textAlign: "center",
                      padding: 3,
                      width: "30%",
                    }}
                  >
                    <h5>Leave Count</h5>
                    <h1>67</h1>
                  </Box>
                </Stack>
              </Box>
            </Paper>

            <Paper
              elevation={1}
              sx={{
                backgroundColor: "#D9D9D9",
                textAlign: "center",
              }}
            >
              <Box p={3}>
                <h2>Upcoming Events</h2>
                <Stack
                  direction="column"
                  justifyContent={"space-between"}
                  spacing={1}
                >
                  <Box
                    sx={{
                      backgroundColor: "#D9D9D9",
                      borderColor: "#222",
                      borderWidth: 2,
                      borderStyle: "solid",
                      textAlign: "center",
                      padding: 3,
                    }}
                  ></Box>

                  <Box
                    sx={{
                      backgroundColor: "#D9D9D9",
                      borderColor: "#222",
                      borderWidth: 2,
                      borderStyle: "solid",
                      textAlign: "center",
                      padding: 3,
                    }}
                  ></Box>
                  <Box
                    sx={{
                      backgroundColor: "#D9D9D9",
                      borderColor: "#222",
                      borderWidth: 2,
                      borderStyle: "solid",
                      textAlign: "center",
                      padding: 3,
                    }}
                  ></Box>
                </Stack>
              </Box>
            </Paper>

            <Paper elevation={1}>
              <Box p={3}>
                <Stack alignItems={"space-between"} spacing={1}>
                  <Stack direction={"row"} justifyContent="space-between">
                    <Button variant="contained">Emergency Numbers</Button>
                    <Button variant="contained">Information Center</Button>
                  </Stack>
                  <Stack direction={"row"} justifyContent="space-between">
                    <Button variant="contained">
                      Fire and Rescue/Ambulance
                    </Button>
                    <Button variant="contained">
                      Garbage Collection Details
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Paper>
          </Stack>
        </Grid>
        <Grid item xs={4} height="100%">
          <Stack
            direction={"column"}
            height={"30%"}
            justifyContent="space-between"
          >
            <Button variant="contained" fullWidth>
              Bin Status
            </Button>
            <h4>Bin Level</h4>
            <Stack direction={"row"} justifyContent="center">
              <Box width={"30%"}>
                <CircularProgressbar value={74} text={`${74}%`} />
              </Box>
            </Stack>
          </Stack>

          <Stack
            direction={"column"}
            height={"30%"}
            justifyContent="space-between"
          >
            <h4>Bin Full</h4>
            <Stack
              direction={"row"}
              justifyContent="space-evenly"
              alignItems="center"
              spacing={2}
            >
              <Box width={"30%"}>
                <CircularProgressbar
                  value={35}
                  // text={`${74}%`}
                  strokeWidth={50}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: "#f54242",
                    trailColor: "#ffb0b0",
                  })}
                />
              </Box>
              <Box width={"50%"}>
                <Stack direction={"row"} alignItems={"center"}>
                  <Box height={15} width={15} bgcolor={"#f54242"} mr={2}></Box>
                  <h5>Bin Full</h5>
                </Stack>
                <Stack direction={"row"} alignItems={"center"}>
                  <Box height={15} width={15} bgcolor={"#ffb0b0"} mr={2}></Box>
                  <h5>Bin Neutral</h5>
                </Stack>
              </Box>
            </Stack>
          </Stack>

          <Stack
            direction={"column"}
            height={"40%"}
            justifyContent="space-between"
          >
            <h4>Bin Full</h4>
            <Box height={"100%"}>
              <LoadScript googleMapsApiKey="AIzaSyC7UEErM9uNLXfGOviKE5FOymLpMNcvpyI">
                <GoogleMap
                  mapContainerStyle={{
                    height: "100%",
                    width: "100%",
                  }}
                  center={{
                    lat: 6.917255,
                    lng: 79.870367,
                  }}
                  zoom={14}
                ></GoogleMap>
              </LoadScript>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      {/* </Container> */}
    </>
  );
};

export default Dashboard;

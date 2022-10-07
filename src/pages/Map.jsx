import React, { useState, useEffect } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Chip,
  Container,
  Grid,
  Stack,
  TextField,
  useAutocomplete,
} from "@mui/material";

import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerF,
  useJsApiLoader,
  LoadScriptNext,
  Polygon,
  PolygonF,
  PolylineF,
  Polyline,
} from "@react-google-maps/api";
import { makeStyles } from "@mui/styles";
import { color } from "@mui/system";
import axios from "axios";

// Imports Core components
import ChipButton from "../components/core/ChipButton";
import AutocompletePlace from "../components/core/AutoComplete";
import { placesTypesApi, areaApi, spotsApi } from "../api";

const useStyles = makeStyles({
  root: {
    color: (props) => props.color,
  },

  chipsWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#888",
    height: 100,
    padding: 12,
  },
});

const center = {
  lat: 6.917255,
  lng: 79.870367,
};
const mapContainer = {
  height: "100vh",
  width: "100%",
};

const MapWrapper = (props) => {
  const classes = useStyles();
  const [wardNames, setWardNames] = useState([]);
  const [value, setValue] = useState(wardNames[0]);
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);
  const [illegalSpots, setIllegalSpots] = useState([]);
  const [spots, setSpots] = useState([]);
  const [isShowIllegalBtn, setIsShowIllegalBtn] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedChip, setSelectedChip] = useState("");

  useEffect(() => {
    // http://192.168.8.139:1000 me
    //http://192.168.8.108:8080 tharee
    axios
      .get("http://192.168.8.139:8081/wardname", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => setWardNames(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    // axios
    //   .get("http://localhost:5000/get-place-type/hospitals")
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
  };

  const onLoad = () => {};

  const handleChip = (chip) => {
    setSelectedChip(chip);
    setChecked(false);
    axios
      .get("http://192.168.8.139:8081/locate", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        params: {
          location: chip,
        },
      })
      .then((res) => {
        setSpots(res.data);
      })
      .catch((err) => console.log(err));

    // get illegal spots
    axios
      .get("http://192.168.8.139:8081/ill_locate", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        params: {
          location: chip,
        },
      })
      .then((res) => {
        setIllegalSpots(res.data);
        setIsShowIllegalBtn(true);
      })
      .catch((err) => console.log(err));
  };

  const handleSelect = (val) => {
    setValue(val);
    setSelectedChip("");
    setChecked(false);

    axios
      .get("http://192.168.8.139:8081/loctypes", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        params: {
          WardName: val,
        },
      })
      .then((res) => setChips(res.data))
      .catch((err) => console.log(err));
  };

  const handleShowIllegalSpots = () => {
    setChecked(!checked);
  };

  return (
    <Container maxWidth={""}>
      <Grid container spacing={2}>
        <Grid item xs={2} bgcolor={"#ddd"}></Grid>
        <Grid item xs={10}>
          <LoadScript googleMapsApiKey="AIzaSyC7UEErM9uNLXfGOviKE5FOymLpMNcvpyI">
            <GoogleMap
              mapContainerStyle={mapContainer}
              center={center}
              zoom={14}
            >
              {checked &&
                illegalSpots.length > 0 &&
                illegalSpots.map((illegalSpot) => (
                  <MarkerF
                    // onLoad={onLoad}
                    key={illegalSpot.Latitude + illegalSpot.Longitude}
                    icon={{ url: "/trash-red.png" }}
                    title={illegalSpot.Location}
                    position={{
                      lat: Number(illegalSpot.Latitude),
                      lng: Number(illegalSpot.Longitude),
                    }}
                  />
                ))}
              {!checked &&
                spots.length > 0 &&
                spots.map((spot) => (
                  <MarkerF
                    // onLoad={onLoad}
                    key={spot.Latitude + spot.Longitude}
                    icon={{ url: "/trash-black.png" }}
                    title={spot.Location}
                    position={{
                      lat: Number(spot.Latitude),
                      lng: Number(spot.Longitude),
                    }}
                  />
                ))}

              <Polyline
                // visible={true}
                onLoad={onLoad}
                paths={[
                  { lat: 6.8221928, lng: 79.8648827 },
                  { lat: 6.8347911, lng: 79.9207192 },
                  { lat: 6.7913491, lng: 79.914638 },
                  { lat: 6.6613491, lng: 79.974638 },
                ]}
                options={{
                  fillColor: "#f00",
                  fillOpacity: 0,
                  strokeColor: "#0f0",
                  strokeOpacity: 1,
                  strokeWeight: 2,
                  clickable: false,
                  draggable: false,
                  editable: false,
                  geodesic: false,
                  zIndex: 1,
                }}
              ></Polyline>

              <Box className={classes.chipsWrapper}>
                <Stack direction={"row"} alignItems="center" height="50%">
                  <Autocomplete
                    value={value}
                    onChange={(event, newValue) => handleSelect(newValue)}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) =>
                      setInputValue(newInputValue)
                    }
                    id="controllable-states-demo"
                    options={wardNames}
                    size={"small"}
                    sx={{
                      width: 300,
                      padding: 0,
                      backgroundColor: "#fff",
                      borderRadius: 1,
                      //   height: 30,
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        // label="Place"
                        sx={{ padding: 0 }}
                      />
                    )}
                  />

                  {/* <AutocompletePlace /> */}
                  {selectedChip && (
                    <>
                      <Checkbox
                        checked={checked}
                        onChange={handleShowIllegalSpots}
                      />
                      <h4>Illegal Spots</h4>
                    </>
                  )}
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems="center"
                  spacing={2}
                  height="50%"
                >
                  {chips.length > 0 &&
                    chips.map((chip, index) =>
                      selectedChip == chip ? (
                        <Chip
                          key={chip + index}
                          variant="contained"
                          disableElevation
                          label={chip}
                          color="success"
                          onClick={() => handleChip(chip)}
                        />
                      ) : (
                        <Chip
                          key={chip + index}
                          variant="contained"
                          disableElevation
                          label={chip}
                          color="primary"
                          onClick={() => handleChip(chip)}
                        />
                      )
                    )}
                </Stack>
              </Box>
            </GoogleMap>
          </LoadScript>
        </Grid>
      </Grid>
    </Container>
  );
};

const options = [
  "Place 1",
  "Place 2",
  "Place 3",
  "Place 4",
  "Place 5",
  "Place 6",
  "Place 7",
];

const chipsData = [
  "Schools",
  "Hospitals",
  "Restaurent",
  "Religious Places",
  "Offices",
  "Ground",
  "Groceries",
];

export default React.memo(MapWrapper);

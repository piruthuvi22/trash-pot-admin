import React, { useState } from "react";
import {
  Autocomplete,
  Box,
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
  const [value, setValue] = useState(areaApi[1]);
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);
  const [illegalSpots, setIllegalSpots] = useState([]);

  const handleClick = () => {
    // axios
    //   .get("http://localhost:5000/get-place-type/hospitals")
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
  };
  
  const onLoad = () => {};

  const handleChip = (chip) => {
    let spots = spotsApi.filter(
      (spot) => spot.WardName === value && spot.LocationType === chip
    );
    setIllegalSpots(spots);
    console.log(spots);
  };

  const handleSelect = (val) => {
    setValue(val);
    let types = placesTypesApi.filter((placesType) => placesType.area === val);
    // console.log(types);
    setChips(types[0].types);
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
              {illegalSpots.length > 0 &&
                illegalSpots.map((illegalSpot) => (
                  <MarkerF
                    // onLoad={onLoad}
                    key={illegalSpot.Latitude + illegalSpot.Longitude}
                    icon={{ url: "/trash-icon.png" }}
                    title={illegalSpot.Location}
                    position={{
                      lat: Number(illegalSpot.Latitude),
                      lng: Number(illegalSpot.Longitude),
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
                    options={areaApi}
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
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems="center"
                  spacing={2}
                  height="50%"
                >
                  {chips.length > 0 &&
                    chips.map((chip, index) => (
                      <ChipButton
                        key={chip + index}
                        variant="contained"
                        disableElevation
                        onClick={() => handleChip(chip)}
                      >
                        {chip}
                      </ChipButton>
                    ))}
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

import React, { useState, useEffect } from "react";
import {
  Autocomplete,
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  useAutocomplete,
} from "@mui/material";

// Imports Componets

import { makeStyles } from "@mui/styles";
import CustomizedList from "../components/LeftBar";
import RightBar from "../components/RighBar";

const useStyles = makeStyles({
  leftSideBar: {
    backgroundColor: "#0F1E33",
  },
});

const ScheduleMgt = (props) => {
  let classes = useStyles();
  return (
    <Container maxWidth={""} m={0} p={0} className={"wrapper"}>
      <Grid container margin={0} height={"100vh"}>
        <Grid item xs={2} className={classes.leftSideBar}>
          <CustomizedList />
        </Grid>
        <Grid item xs={10}>
          <RightBar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ScheduleMgt;

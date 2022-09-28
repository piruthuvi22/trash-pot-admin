import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CustomizedList from "../components/LeftBar";
import Dashboard from "./sections/Dashboard";

const useStyles = makeStyles({
  leftSideBar: {
    backgroundColor: "#0F1E33",
  },
});

const CommonDashboard = () => {
  let classes = useStyles();

  return (
    <Container maxWidth={""} m={0} p={0} className={"wrapper"}>
      <Grid container margin={0} height={"100vh"}>
        <Grid item xs={2} className={classes.leftSideBar}>
          <CustomizedList />
        </Grid>
        <Grid item xs={10}>
          <Dashboard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CommonDashboard;

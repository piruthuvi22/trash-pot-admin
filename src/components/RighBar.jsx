import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import TextBox from "./core/textField";

const RightBar = () => {
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
      <Container maxWidth={"md"}>
        <Paper elevation={1}>
          <Stack direction={"column"} spacing={1} padding={2}>
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
                  <FormLabel>From - </FormLabel>
                  <TextField size="small" />
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={""}
                >
                  <FormLabel>From - </FormLabel>
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
                  <FormLabel>From - </FormLabel>
                  <TextField size="small" />
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={""}
                >
                  <FormLabel>From - </FormLabel>
                  <TextField size="small" />
                </Stack>
              </Grid>
            </Grid>

            <Stack direction={"row"} alignItems={"center"} justifyContent={""}>
              <FormLabel>From - </FormLabel>
              <TextField size="small" />
            </Stack>
            
          </Stack>
        </Paper>
      </Container>
    </>
  );
};

export default RightBar;

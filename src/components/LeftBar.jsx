import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
const data = [
  { icon: <People />, label: "Weather FOrecasting" },
  { icon: <Dns />, label: "Leave Management" },
  { icon: <PermMedia />, label: "Vehicle Condition Monitoring" },
  { icon: <Public />, label: "Additional Requests" },
  { icon: <Public />, label: "View Time Table" },
];

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function CustomizedList() {
  const [open, setOpen] = React.useState(true);
  return (
    <Stack height={"100%"} flexDirection={"column"} justifyContent={"space-between"}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "rgb(102, 157, 246)" },
            background: { paper: "rgb(5, 30, 52)" },
          },
        })}
      >
        <Paper elevation={0} sx={{ width: "100%" }}>
          <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 20 }}>
                <KeyboardBackspaceIcon />
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 20 }}>
                <img src="/logo.svg" />
              </ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="Firebash"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>

            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              fullWidth={true}
            />

            <Divider />
            <Box
              sx={{
                bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                pb: open ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Schedule Management"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                  }}
                  // secondary=""
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                  }}
                  sx={{ my: 0 }}
                />
                {/* <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                /> */}
              </ListItemButton>
              {open &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{
                      // py: 0,
                      ml: 2,
                      minHeight: 32,
                      color: "rgba(255,255,255,.8)",
                    }}
                  >
                    {/* <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon> */}
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
      <Box sx={{ position: "relative", bottom: 0, left: 0, right: 0 }}>
        hello
      </Box>
    </Stack>
  );
}

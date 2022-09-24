import { createTheme, ThemeProvider } from "@mui/material/styles";
// import logo from "./logo.svg";
import "./App.css";
import MapWrapper from "./pages/Map";
import ScheduleMgt from "./pages/ScheduleMgt";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <MapWrapper /> */}
      <ScheduleMgt />
    </ThemeProvider>
  );
}

export default App;

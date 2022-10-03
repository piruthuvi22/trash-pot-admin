import { createTheme, ThemeProvider } from "@mui/material/styles";
// import logo from "./logo.svg";
import "./App.css";
import CommonDashboard from "./pages/CommonDashboard";
import MapWrapper from "./pages/Map";
import ScheduleMgt from "./pages/ScheduleMgt";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MapWrapper />
      {/* <ScheduleMgt /> */}
      {/* <CommonDashboard /> */}
    </ThemeProvider>
  );
}

export default App;

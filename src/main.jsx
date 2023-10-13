import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
const theme = createTheme({
  palette: {
    primary: {
      main: "#010409",
    },
    secondary: {
      main: "#0D1117",
    },
    terciary: {
      main: "#30363D",
    },
    typography: {
      fontFamily: ["Consolas", "Liberation Mono", "Courier", "monospace"].join(
        ","
      ),
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

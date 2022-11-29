import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import React from "react";
import { hot } from "react-hot-loader/root";
import Header from "../components/Header.jsx";
import SideMenus from "../components/SideMenus.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
});

const useStyles = makeStyles({
  appMenu: {
    paddingLeft: "0px",
    width: "100%",
    transform: "translateZ(0)",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      
      <ThemeProvider theme={theme}>
           <SideMenus />
          <div className={classes.appMenu}>
             <Header />
          </div>
          <CssBaseline /> 
        </ThemeProvider>
    </>
  );
}

export default hot(App);

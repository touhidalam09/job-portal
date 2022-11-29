import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { AppBar, Grid, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    // backgroundColor: "#182f59",
  },
});

function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar
        position="static"
        className={classes.root}
        sx={{
          backgroundColor: "#182f59",
          height: "80px",
          padding: "8px 0px",
        }}
      >
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item>
              <WorkOutlineIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  color: "white",
                }}
              />
            </Grid>
            <Grid item sm>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                  paddingLeft: "20px",
                }}
              >
                JOB PORTAL
              </Typography>
            </Grid>
            <Grid item>
              <IconButton>
                <PowerSettingsNewIcon sx={{ color: "white" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  sideMenu: {
    // zIndex: "9",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "64px",
    height: "100%",
    backgroundColor: "#fff",
    boxShadow: "rgb(24 42 89) 1px 1px 6px",
    paddingTop: "100px",
  },
});

function SideMenus() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.sideMenu}>
        <IconButton>
          <HomeOutlinedIcon />
        </IconButton>
      </div>
    </>
  );
}
export default SideMenus;

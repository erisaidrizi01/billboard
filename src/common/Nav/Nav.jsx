import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sider from "../Sider/Sider";
import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar 
    position="static" style={{ background: 'black' }}>
      <Toolbar
      position="static"
        xs={12}
        sm={12}
        md={12}
        lg={12}          
        xl={12} 
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="div" sx={{ flexGrow: 1 }}

        style={{fontSize:"28px", fontWeight: "900", fontFamily: "verdana", margin:"15px"}}>
          billboard 
        </Typography>
        <FavoriteBorderIcon sx={{ ':hover': {cursor:"pointer"}}}/>
      </Toolbar>
    </AppBar>
  </Box>
  <Sider
        open={isOpen}
        handleClose={() => setIsOpen(false)}/>
    </div>
  );
}

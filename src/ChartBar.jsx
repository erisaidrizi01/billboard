import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ChartBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'black' }}>
        <Toolbar
          xs={1}
          sm={1}
          md={1}
          lg={1}          
          xl={1} 
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="div" 

          style={{fontSize:"28px", fontWeight: "900", fontFamily: "verdana", margin:"15px"}} sx={{ flexGrow: 1 }}>
            billboard 
          </Typography>
  
        </Toolbar>
      </AppBar>
    </Box>
  );
}

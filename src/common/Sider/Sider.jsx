import React from 'react'
import { Drawer, Grid, Button } from "@mui/material";
import { useHistory} from "react-router-dom";


const Sider = ({open, handleClose}) => {
  const history = useHistory();

  return (
    <Drawer anchor={"left"} 
    PaperProps={{
      sx: { width: "18%", height:"25%", marginTop: "72px" },
    }}
     open={open} onClose={handleClose}>
      <Grid container style={{width:"100%", height:"100%", backgroundColor: "black", color: "white"}}>
          <Grid item xs={12}
              style={{fontSize: "18px", 
                textAlign:"center", 
                marginTop:"2px", 
                textDecoration: "underline",
              }}>
              Billboard Charts 
          </Grid>
          <Grid item xs={12}>
            <Button  
            variant="text"
            sx={{ 
              width:"100%",
              color:'white',
              ':hover': {
              backgroundColor: '#eeeeee',
              color: 'black'}}}
              onClick={() => history.push("/")}>
              The Hot 100
              </Button>
          </Grid>
          <Grid item xs={12}>
              <Button 
              sx={{ 
                width:"100%",
                color:'white',
                ':hover': {
                backgroundColor: '#eeeeee',
                color: 'black'}}} 
              onClick={() => history.push("/topalbums")}>
              Top Albums
              </Button>
            </Grid>
    
      </Grid>
    </Drawer>
  );
}
    
export default Sider;
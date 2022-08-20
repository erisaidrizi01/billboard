import React from 'react';
import {Grid} from '@material-ui/core';
import { CardContent, Card} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './Album.css';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function Song({listed, artistImage, artist, albumTitle}){  
    const [open, setOpen] = React.useState(false);
    const [click, setClick] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
        click ? setClick (false) : setClick(true)
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    return(
    <div>
    <Grid container alignItems="center" justifyContent="space-evenly" >
        <Grid item  sx={{  marginBottom:"5px", display: "flex", justifyContent: "center", flexWrap:"wrap" }} >
            <Card sx={{height:"80px", width: "700px", verticalAlign: 'middle', alignItems:"center"}} >
                <CardContent sx={{ display: "flex", justifyContent: "space-around"}}>
                <span className="nrListed"> 
                    {listed} 
                </span>

                <span className="artistImage">
                    <img src={artistImage} alt="imazh"/>  
                </span>
                
                <span className="albumTitle">
                     {albumTitle} 
                </span>
                <span style={{width:"20%", textAlign:"center", textSize:"80%", lineHeight: "200%"}}>
                 {artist}
                </span>
                <span style={{width:"10%", textAlign:"center", textSize:"80%", lineHeight: "333%"}}>
                <StarIcon color={click? "warning" : "black"} sx={{ ':hover': {cursor:"pointer"}}} onClick={handleClick}/> 
                </span>

                </CardContent>
            </Card>
            <br/>
        </Grid>
    </Grid>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor:"goldenrod" }}>
        `{albumTitle}` album by {artist} was starred!
        </Alert>
      </Snackbar>
      </div>
    )
}
import * as React from 'react';
import {Grid} from '@material-ui/core';
import { CardContent, Card} from "@mui/material";
//import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './Song.css';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


export default function Song({listed, artistImage, artist, songTitle}){
    const [open, setOpen] = React.useState(false);

    const [clicked, setClicked] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
        clicked ? setClicked (false) : setClicked(true)
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
              <Card sx={{height:"80px", width: "900px", verticalAlign: 'middle', alignItems:"center"}} >
                  <CardContent sx={{ display: "flex", justifyContent: "space-around"}}>
                    <span className="nr"> 
                        {listed} 
                    </span>

                    <span className="artistImage">
                        <img src={artistImage} alt="imazh"/>  
                    </span>
                    
                    <span className="songTitle">
                        {songTitle} 
                    </span>
                    <span style={{width:"20%", textAlign:"center", textSize:"80%", lineHeight: "200%"}}>
                    {artist}
                    </span>
                    <span style={{width:"10%", textAlign:"center", textSize:"80%", lineHeight: "333%"}}>
                      <FavoriteIcon color={clicked? "error" : "black"} sx={{ ':hover': {cursor:"pointer"}}} 
                        onClick={handleClick}
            
                      />
                    </span>
                  </CardContent>
              </Card>
              <br/>
          </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor:"#D2042D" }}>
          `{songTitle}` song by {artist} is one of your favorites!
          </Alert>
        </Snackbar>
      </div>
    )
}
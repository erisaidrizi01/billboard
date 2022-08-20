import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from "./common/Nav/Nav";
import TopAlbums from "./components/AlbumsChart/Albums/TopAlbums";
import TopSongs from "./components/SongsChart/components/SongData/TopSongs";
function App() {
  return (
    <Router>
      <Nav/>
       <Switch>
          <Route exact path="/">
           <TopSongs/> 
          </Route>
          <Route path="/topalbums">
            <TopAlbums/>
          </Route>   
        </Switch>
    </Router>   
  );
}

export default App;

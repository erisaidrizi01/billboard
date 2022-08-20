import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Song from './Song';
import {Stack, LinearProgress} from '@mui/material';
import SearchAppBar from '../../../../common/Search/SearchAppBar';
import './TopSongs.css';

export default function TopSongs(){
    const [isLoading, setIsLoading] = useState(true);
     
    const [songs, setSongs] = useState([]);

    const [searchWord, setSearchWord]= useState("");
    let myObject = [];

    const fetchsongs = async () => {
        const response = await axios.get(
        `https://itunes.apple.com/us/rss/topsongs/limit=100/json`
        );

         myObject = response.data.feed.entry;
        setSongs(myObject);   
    };

    useEffect(() => {
        fetchsongs();
    }, []);

    useEffect(() => {
        if (songs && songs.length >= 0) {
        setIsLoading(false);
        }
    }, [songs]);

    songs.forEach((song, i) => song.position = i + 1);
   
    return (
        <div>   
        {isLoading
            ? (<Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                  <LinearProgress color="secondary" />
                  <LinearProgress color="success" />
                  <LinearProgress color="inherit" />
                </Stack>
            ) : (  
              <div>
                <SearchAppBar onChange={(event) => setSearchWord(event.target.value)} />
                <div className="h1">The Hot 100</div>
                <div className="line"/>
                  
                  {songs.filter((song) =>{
                    if(searchWord === ""){
                      return song
                    } else if (song["im:name"].label.toLowerCase().includes(searchWord.toLowerCase()) 
                              || song["im:artist"].label.toLowerCase().includes(searchWord.toLowerCase()))
                      return song
                  }
                ).map((song, _index) => {               
                  return (
                  <Song 
                  listed={song.position}
                  artistImage={song["im:image"][1].label}
                  songTitle={song["im:name"].label}
                  artist={song["im:artist"].label}
                  />
              );
          })}
          </div> ) 
        }
        </div>
    );
}
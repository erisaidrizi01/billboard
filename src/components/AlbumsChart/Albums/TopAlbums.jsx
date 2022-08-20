import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Album from './Album';
import {Stack, LinearProgress} from '@mui/material';
import SearchAppBar from '../../../common/Search/SearchAppBar';
import './TopAlbums.css';

export default function TopAlbums(){
    const [isLoading, setIsLoading] = useState(true);
     
    const [albums, setAlbums] = useState([]);

    const [searchWord, setSearchWord]= useState("");

    const fetchalbums = async () => {
  
        const response = await axios.get(
        `https://itunes.apple.com/us/rss/topalbums/limit=100/json`
        );
        
        const myObject = response.data.feed.entry;
        //console.log("Objekti", myObject);
        setAlbums(myObject);
    };

    useEffect(() => {
        fetchalbums();
    }, []);

    useEffect(() => {
        if (albums && albums.length >= 0) {
        console.log(albums);
        setIsLoading(false);
        }
    }, [albums]);
 
    albums.forEach((album, i) => album.position = i + 1);

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
                <div className="header">Top Albums</div>
                <div className="bottomLine"/>
                  {albums.filter((album) =>
                  {
                    if(searchWord === ""){
                      return album
                    } else if (album["im:name"].label.toLowerCase().includes(searchWord.toLowerCase()) 
                              || album["im:artist"].label.toLowerCase().includes(searchWord.toLowerCase()))
                      return album
                  }
                 ).map((album, _index) => {       
                  return (
                  <Album 
                    listed={album.position}
                    artistImage={album["im:image"][1].label}
                    albumTitle={album["im:name"].label}
                    artist={album["im:artist"].label}
                  />
                  );
                })} 
              </div> ) 
      }
        </div>
    );
}
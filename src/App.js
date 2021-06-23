
import React, { useEffect } from 'react';
import './App.css';
import Login from './login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [{ user,token},dispatch]= useDataLayerValue();
  // runs the code with condition
  useEffect( ()=> {
    const hash= getTokenFromUrl();
    
    window.location.hash ="";
    const _token =hash.access_token;
    if (_token){
      dispatch({
        type:"SET_TOKEN",
        token:_token,
      });
  
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) =>{
        dispatch({
          type: 'SET_USER',
          user: user ,
        });
      });
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch(
          {
            type:'SET_PLAYLISTS',
            playlists: playlists ,
          });
        });
        spotify.getPlaylist('7gmFbi6uAy6hVv4JxEXhCG').then(response =>
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
        );
    }
  }, []);

  return (
    <div className="app">
      {
        token? 
          <Player spotify ={spotify} /> :
          <Login/>
      }
    </div>
  );
}

export default App;

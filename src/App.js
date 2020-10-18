import React, { useEffect, useState, useReducer } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./components/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./components/stateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash["access_token"];
    if (_token) {
      dispatch({ type: "SET_TOKEN", token: _token });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => dispatch({ type: "SET_USER", user }));

      spotify
        .getUserPlaylists()
        .then((playlist) => dispatch({ type: "SET_PLAYLIST", playlist }));
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

import React from "react";
import {
  Shuffle,
  SkipPrevious,
  PlayCircleOutline,
  SkipNext,
  Repeat,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumLogo"
          src="https://loremflickr.com/640/360"
          alt=""
        />
        <div className="footer_songInfo">
          <h4>Abaar</h4>
          <p>Minar</p>
        </div>
      </div>

      <div className="footer_center">
        <Shuffle className="footer_green" />
        <SkipPrevious className="footer_icon" fontSize="small" />
        <PlayCircleOutline fontSize="large" className="footer_icon" />
        <SkipNext className="footer_icon" fontSize="small" />
        <Repeat className="footer_green" />
      </div>

      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;

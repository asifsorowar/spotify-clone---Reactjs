import React from "react";
import Header from "./Header";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import "./playerBody.css";
import SongRow from "./SongRow";

let track = [
  { name: "Abar" },
  { name: "Jhoom" },
  { name: "Let me go" },
  { name: "Hariye giyechi" },
];

const PlayerBody = ({ spotify }) => {
  return (
    <div className="playerBody">
      <Header spotify={spotify} />

      <div className="body_info">
        <img src="https://picsum.photos/300/200/" alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>description...</p>
        </div>
      </div>

      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilled className="body_shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        <div className="songDiv">
          {track.map((track) => (
            <SongRow track={track} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerBody;

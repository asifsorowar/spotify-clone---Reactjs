import React from "react";
import Footer from "./Footer";
import "./player.css";
import PlayerBody from "./PlayerBody";
import Sidebar from "./Sidebar";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <PlayerBody />
      </div>

      <Footer />
    </div>
  );
};

export default Player;

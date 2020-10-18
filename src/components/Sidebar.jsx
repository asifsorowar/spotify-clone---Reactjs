import React from "react";
import { Home, LibraryMusic, Search } from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import "./sidebar.css";
import { useStateValue } from "./stateProvider";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        alt=""
      />

      <SidebarOption title="Home" Icon={Home} />
      <SidebarOption title="Search" Icon={Search} />
      <SidebarOption title="Your Library" Icon={LibraryMusic} />

      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist.name} title={playlist.name} />
      ))}

      <div className="playlistsDiv">
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
        <SidebarOption title="test" />
      </div>
    </div>
  );
};

export default Sidebar;

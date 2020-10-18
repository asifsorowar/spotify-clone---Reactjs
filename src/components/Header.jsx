import React from "react";
import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import "./header.css";
import { useStateValue } from "./stateProvider";

const Header = ({ spotify }) => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <Search />
        <input type="text" placeholder="Search for Artists, Songs" />
      </div>

      <div className="header_right">
        <Avatar src={user?.images[0]?.url} altt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;

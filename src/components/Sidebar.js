import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";
import { useStateValue } from "../StateProvider";

const Sidebar = () => {
  const [{ playlists }] = useStateValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon} />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist.id} title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;

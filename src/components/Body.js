import React from "react";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useStateValue } from "../StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Body = ({ spotify }) => {
  const [{ global_top }, dispatch] = useStateValue();

  const playPlaylist = () => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      })
      .catch((err) => {
        if (err.status === 403) {
          alert("You do not have PREMIUM.");
        }
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      })
      .catch((err) => {
        if (err.status === 403) {
          alert("You do not have PREMIUM.");
        }
      });
  };

  return (
    <div className="body">
      <Header />

      <div className="body__info">
        <img src={global_top?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Global Top 50</h2>
          <p>{global_top?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {/* List of songs */}
        {global_top?.tracks.items.map((item) => (
          <SongRow key={item.track.id} playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;

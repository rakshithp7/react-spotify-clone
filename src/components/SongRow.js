import React from "react";
import "./SongRow.css";
import ExplicitIcon from "@material-ui/icons/Explicit";

const SongRow = ({ track, playSong }) => {
  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <div className="songRow" onClick={() => playSong(track.id)}>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <div className="songRow__songDetails">
          <p>
            {track.explicit && <ExplicitIcon fontSize="small" />}
            {track.artists.map((artist) => artist.name).join(", ")} •{" "}
            {track.album.name}
          </p>
          <p>{millisToMinutesAndSeconds(track.duration_ms)}</p>
        </div>
      </div>
    </div>
  );
};

export default SongRow;

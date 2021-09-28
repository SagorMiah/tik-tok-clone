import React from "react";
import "../css/videoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => {
              return <p>{song}</p>;
            }}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__logo"
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/574c4e86485708c323087d2acfda47a0~c5_100x100.jpeg?x-expires=1632870000&x-signature=hIqkx8cS6oJ8E2xns52LBVzxiV4%3D"
        alt=""
      />
    </div>
  );
};

export default VideoFooter;

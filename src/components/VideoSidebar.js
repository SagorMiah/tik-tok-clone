import React, { useState } from "react";
import "../css/videoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__options">
        <div className="videoSidebar__button">
          {liked ? (
            <FavoriteIcon
              fontSize="large"
              className="videoSidebar__icon"
              onClick={() => setLiked(false)}
            />
          ) : (
            <FavoriteBorderIcon
              fontSize="large"
              className="videoSidebar__icon"
              onClick={() => setLiked(true)}
            />
          )}
          <p>{liked ? likes + 1 : likes}</p>
        </div>
        <div className="videoSidebar__button">
          <MessageIcon fontSize="large" className="videoSidebar__icon" />
          <p>{messages}</p>
        </div>
        <div className="videoSidebar__button">
          <ShareIcon fontSize="large" className="videoSidebar__icon" />
          <p>{shares}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSidebar;

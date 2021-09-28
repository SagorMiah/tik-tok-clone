import React, { useEffect, useState } from "react";
import Video from "./components/Video";
import "./css/app.css";
import db from "./firebase";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="app">
      <div className="videos">
        {videos.map(
          ({ url, channel, description, song, likes, shares, messages }) => {
            return (
              <Video
                url={url}
                channel={channel}
                description={description}
                song={song}
                likes={likes}
                shares={shares}
                messages={messages}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default App;

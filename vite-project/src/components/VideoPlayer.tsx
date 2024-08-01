import YouTube from "react-youtube";
import { FC } from "react";

interface VideoPlayerProps {
  id: string;
}
export const VideoPlayer: FC<VideoPlayerProps> = ({ id }) => {
  const playlistId = id; // Замените YOUR_PLAYLIST_ID на реальный ID вашего плейлиста
  const opts = {
    width:
      window.screen.width <= 500
        ? "319"
        : window.screen.width <= 1024
        ? "500"
        : "478",
    height:
      window.screen.width <= 500
        ? "550"
        : window.screen.width <= 1024
        ? "680"
        : "850",
    playerVars: {
      listType: "playlist",
      list: playlistId,
      autoplay: "1",
    },
    suggestedQuality: "hd720",
  };
  return <YouTube opts={opts} />;
};

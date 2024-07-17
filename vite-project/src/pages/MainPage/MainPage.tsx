import VideoBackground from "../../components/VideoBackground";
import neverlandVideo from "../../assets/neverlandVideo.mp4";
import mistakeVideo from "../../assets/mistakeVideo.mp4";
import { TrackButton } from "../../components/TrackButton";
export const MainPage = () => {
  return (
    <div className="mainpage">
      <VideoBackground />
      <div className="mainpage_tracks">
        <div className="buttons_container">
          <TrackButton
            url={mistakeVideo}
            linkTo="/mistake"
            title="первая ошибка"
          />
          <TrackButton
            url={neverlandVideo}
            linkTo="/neverland"
            title="неверленд"
          />
        </div>
      </div>
    </div>
  );
};

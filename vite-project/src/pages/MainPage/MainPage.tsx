import VideoBackground from "../../components/VideoBackground";
import neverlandVideo from "../../assets/neverlandVideo.mp4";
import mistakeVideo from "../../assets/mistakeVideo.mp4";
import { TrackButton } from "../../components/TrackButton";
import GifWithTextOverlay from "../../components/MainGif";
import { TrackButtonGif } from "../../components/TrackButtonGif";
import neverlandGif from "../../assets/never.gif";
import mistakeGif from "../../assets/mistake.gif";
export const MainPage = () => {
  return (
    <div className="mainpage">
      {window.screen.width > 1100 ? (
        <VideoBackground />
      ) : (
        <GifWithTextOverlay />
      )}

      <div className="mainpage_tracks">
        <div className="buttons_container">
          {window.screen.width < 1100 ? (
            <>
              <TrackButtonGif
                url={mistakeGif}
                linkTo="/mistake"
                title="последняя ошибка"
              />
              <TrackButtonGif
                url={neverlandGif}
                linkTo="/neverland"
                title="неверленд"
              />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

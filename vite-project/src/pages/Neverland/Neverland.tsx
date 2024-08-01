import { VideoPlayer } from "../../components/VideoPlayer";
import neverlandVideo from "../../assets/neverlandVideo.mp4";
import { Button } from "../../components/Button";
import neverlandGif from "../../assets/never.gif";
export const Neverland = () => {
  return (
    <div className="track_page">
      {window.screen.width < 700 ? (
        <div className="track_page_top_block">
          <div className="track_page_track_info">
            <span className="track_page_track_name"> первая ошибка</span> <br />
            <br /> <span className="track_page_band_name">без обид</span>
          </div>
          <img
            src={neverlandGif}
            alt="неверленд"
            className="track_page_video"
          />

          <Button to="https://band.link/bb_error" />
        </div>
      ) : (
        <div className="track_page_top_block">
          {window.screen.width < 1100 ? (
            <img
              src={neverlandGif}
              alt="неверленд"
              className="track_page_video"
            />
          ) : (
            <video autoPlay loop muted className="track_page_video">
              <source src={neverlandVideo} type="video/mp4" />
            </video>
          )}

          <div className="track_info_and_play_button">
            <div className="track_page_track_info">
              <span className="track_page_track_name"> первая ошибка</span>{" "}
              <br />
              <br /> <span className="track_page_band_name">без обид</span>
            </div>
            <Button to="https://band.link/bb_error" />
          </div>
        </div>
      )}
      <div className="track_page_bottom_block">
        <div className="youtube_video">
          <VideoPlayer id="TLGGzcZsibIY4D0zMTA3MjAyNA" />
        </div>
        <div className="track_text">
          М
          <br />
          <br />
          не в моих привычках приветствовать, я, как правило, предпочитаю
          прощаться. Полночь – не курорт, как ты понимаешь, у каждого, кто так
          или иначе тут остаётся, есть свои причины. конечно, все понимают, что
          покинув это место, вернуться они уже никогда не смогут. уж я своё дело
          знаю. а главное, что они меня знают. возможно, даже лучше, чем им бы
          хотелось. ведь каждый ушедший сближает меня с оставшимися.
          <br />
          <br />
          <br />
          <br />
          нет, меня не интересует разница между страхом и уважением. меня
          интересует другое. я уверен, что знаю каждого арестанта, самовольно
          запертого здесь. и твоё лицо вроде знакомое, но в то же время
          абсолютно чужое. забавно, мы с тобой как школьные друзья, увидевшиеся
          на смертном одре. долго же ты от меня прятался. непозволительно долго
          для старого друга. так и быть, можешь не захлёбываться в раскаяниях.
          лучше скажи мне, зачем ты здесь?
        </div>
      </div>
    </div>
  );
};

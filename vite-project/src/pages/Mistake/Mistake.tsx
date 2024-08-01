import { VideoPlayer } from "../../components/VideoPlayer";
import mistakeVideo from "../../assets/mistakeVideo.mp4";
import { Button } from "../../components/Button";
import mistakeGif from "../../assets/mistake.gif";
export const Mistake = () => {
  return (
    <div className="track_page">
      {window.screen.width < 700 ? (
        <div className="track_page_top_block">
          <div className="track_page_track_info">
            <span className="track_page_track_name"> первая ошибка</span> <br />
            <br /> <span className="track_page_band_name">без обид</span>
          </div>
          <img
            src={mistakeGif}
            alt="первая ошибка"
            className="track_page_video"
          />

          <Button to="https://band.link/bb_error" />
        </div>
      ) : (
        <div className="track_page_top_block">
          {window.screen.width < 1100 ? (
            <img
              src={mistakeGif}
              alt="первая ошибка"
              className="track_page_video"
            />
          ) : (
            <video autoPlay loop muted className="track_page_video">
              <source src={mistakeVideo} type="video/mp4" />
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
          <VideoPlayer id="TLGG92Dr1RSxdOEzMTA3MjAyNA" />
        </div>
        <div className="track_text">
          … не уверен, что смог бы объяснить кому-то. уже сложно восстановить по
          памяти что-то конкретное, только образы и очертания, но даже они не
          сходятся с тем, что я увидел.
          <br />
          <br />
          тут кромешная тьма. глазам нужно было время, чтобы привыкнуть.
          говорят, слепота обостряет слух. звучит странно, но в темноте тишина и
          правда становилась громче.
          <br />
          <br />
          первым, что я увидел, была девушка. поначалу, мне показалось, что она
          плачет, хотя в её молчании не было ни намёка на тоску. мой наивный
          вопрос “у вас что-то случилось?” был резко прерван моим же воплем,
          когда я разглядел алый оттенок в её “слезах”. пойми меня правильно, в
          темноте цвета совершенно неразличимы.
          <br />
          <br />
          уже потом мне рассказали, что это была “первая”. они её так прозвали,
          потому что она первая поняла, как остаться здесь навсегда. у неё даже
          целый культ есть. его последователи в попытках подражать своей мессии…
          ну ты понял.
          <br />
          <br />
          да, тут многое изменилось. кстати, про способ остаться здесь навсегда,
          это не шутки. когда я начал расспрашивать, мне очень неохотно, но всё
          же объяснили, что уйти-то я могу в любой момент, знать бы ещё куда, но
          вот вернуться уже никак. у них есть предание, согласно которому, стоит
          лишь шаг сделать за пределы тени, тотчас ослепнешь от яркого света и
          уже никогда не увидишь дорогу назад. красивое предание, хоть и
          иронически опровергается моим существованием. я уж не стал
          расстраивать местных, что когда-то уже бывал здесь. хотя с каждым
          часом мне становится всё труднее самому в это поверить, настолько
          здесь всё изменилось. может я вовсе не здесь был…
        </div>
        <br />
      </div>
    </div>
  );
};

import youtube from "../assets/youtube.svg";
import tg from "../assets/tg.svg";
import vk from "../assets/vk.svg";
import tiktok from "../assets/tiktok.svg";
import insta from "../assets/insta.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_buttons">
        <a href="https://vk.com/bezobid_music" target="_blank">
          <img src={vk} className="footer_svg" />
        </a>
        <a href="https://t.me/bezobidmusic" target="_blank">
          <img src={tg} className="footer_svg" />
        </a>
        <a href="https://www.instagram.com/bezobid_music" target="_blank">
          <img src={insta} className="footer_svg" />
        </a>
        <a href="https://www.tiktok.com/@bezobid_music" target="_blank">
          <img src={tiktok} className="footer_svg" />
        </a>
        <a href="https://www.youtube.com/@bez_obid" target="_blank">
          <img src={youtube} className="footer_svg" />
        </a>
      </div>
    </div>
  );
};

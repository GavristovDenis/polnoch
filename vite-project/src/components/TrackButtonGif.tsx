import { FC } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface TrackButtonProps {
  url: string;
  linkTo: string;
  title: string;
}

export const TrackButtonGif: FC<TrackButtonProps> = ({
  url,
  linkTo,
  title,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="video_button_container">
      <Link
        to={linkTo}
        className="link"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={url} alt={title} className="gif_button" />
        {window.screen.width < 1200 ? null : (
          <div
            className="video_button_content"
            style={{ opacity: hovered ? 1 : 0 }}
          >
            <div className="hero-container">
              <h2 className="hero glitch layers" data-text={title}>
                <span>{title}</span>
              </h2>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

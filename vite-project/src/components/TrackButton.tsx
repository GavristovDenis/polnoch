import { FC } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface TrackButtonProps {
  url: string;
  linkTo: string;
  title: string;
}

export const TrackButton: FC<TrackButtonProps> = ({ url, linkTo, title }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="video_button_container">
      <Link
        to={linkTo}
        className="link"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <video autoPlay loop muted className="video_button">
          <source src={url} type="video/mp4" />
        </video>
        <div
          className="video_button_content"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          {title}
        </div>
      </Link>
    </div>
  );
};

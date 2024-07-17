import mainPageVideo from "../assets/mainPageVideo.mp4";
const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={mainPageVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="title">
          добро пожаловать <br /> в полночь
        </div>
        <div className="sub_title">
          место, где исполняются желания <br />
          но готов ли ты к цене?
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;

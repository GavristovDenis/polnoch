import GifBackground from "../assets/main.gif";

const GifWithTextOverlay = () => {
  return (
    <div className="gif-container">
      <img src={GifBackground} alt="Gif Background" className="main_gif" />
      <div className="text-overlay">
        <div className="title">
          добро пожаловать <br /> в полночь
        </div>
        <br />
        <div className="sub_title">
          место, где исполняются желания <br />
          но готов ли ты к цене?
        </div>
      </div>
    </div>
  );
};

export default GifWithTextOverlay;

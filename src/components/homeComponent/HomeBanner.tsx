import React from "react";
import "./HomeBanner.scss";
const HomeBanner: React.FC = () => {
  return (
    <div className="home_banner">
      <div className="bg_layout"></div>
      <div className="banner_content">
        <div className="left_content">
          <div className="title">Celebrate Love at GourmetGrove</div>
          <div className="text">
            Treat your special someone to our exclusive Valentine's menu.
          </div>
        </div>
      </div>

      <div className="right_content"></div>
    </div>
  );
};

export default HomeBanner;

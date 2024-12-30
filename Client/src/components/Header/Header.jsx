import React from "react";
import NavBar from "./Navbar";
import Text from "./Text";

const Header = () => {
  return (
    <div className="relative">
      <NavBar />
      <video
        muted
        preload="true"
        autoPlay
        loop
        src="/Coffee-Video.mp4"
        className="w-full h-[71vh] lg:h-[80vh] object-cover"
      />
      <div className="absolute inset-0">
        <Text />
      </div>
    </div>
  );
};

export default Header;

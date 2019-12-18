import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function Home() {
  const [hideLogo, setHideLogo] = useState(false);
  return (
    <div>
      <div
        hidden={hideLogo}
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          backgroundColor: "black"
        }}
      >
        <ReactPlayer
          url="Logoproxy.mp4"
          playing
          muted
          width="88.5%"
          height="30%"
          onEnded={e => {
            setHideLogo(true);
          }}
        />
      </div>
      <div hidden={!hideLogo}>herre</div>
    </div>
  );
}

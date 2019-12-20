import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Toolbar from '../components/Toolbar/Toolbar';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/BackDrop/BackDrop';
const Home = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const drawerToggleClickHandler = e => {
    e.preventDefault();
    setSideDrawerOpen(!sideDrawerOpen)
  };
  const backDropClickHandler = e => {
    e.preventDefault();
    setSideDrawerOpen(false)
  };

  const [hideLogo, setHideLogo] = useState(false);
  let backDrop;
  if (sideDrawerOpen) {
    backDrop = <Backdrop click={backDropClickHandler} />
  }
  return (
    <div>
      <div
        hidden={hideLogo}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "fixed",
          width: "100%",
          height: '100%',
          backgroundColor: 'black'
        }}
      >
        <ReactPlayer
          url="Logoproxy.mp4"
          playing
          muted
          width="100%"
          height="100%"
          onEnded={(e) => {
            setHideLogo(true);
          }}
        />
      </div>
      <div hidden={!hideLogo} style={{ height: "100%" }}>
        <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
        <SideDrawer show={sideDrawerOpen} section="home" />
        {backDrop}

        <main style={{ marginTop: "64px" }}><p>This is the page content</p></main>
      </div>
    </div>
  );
}

export default Home;
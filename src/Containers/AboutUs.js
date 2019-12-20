import React from 'react';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Carousel from '../components/Carousel/Carousel';

const AboutUs = () => {


    return (
        <div>
            <SideDrawer show={true} />
            <div style={{ background: "black", position: "fixed", display: "flex", justifyContent: "center", flexDirection: "height", width: "100%", height: "100%" }}>
                <div style={{ flex: "1" }}></div>
                <Carousel />
                <div style={{ flex: "1" }}></div>
            </div>

        </div>
    );
}

export default AboutUs;
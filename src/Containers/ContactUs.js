import React from 'react';
import SideDrawer from '../components/SideDrawer/SideDrawer';

const ContactUs = () => {
    return (
        <div>
            <SideDrawer show={true} section="contactus" />
            <div style={{ position: "persistent", display: "flex", justifyContent: "right", width: "100%" }}>ContactUs</div>
        </div>
    );
}
export default ContactUs;
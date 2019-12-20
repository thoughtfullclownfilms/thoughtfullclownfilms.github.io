import React from 'react';
import "./SideDrawer.css";
import { NavLink } from 'react-router-dom';

const sideDrawer = ({ show }) => {
    let drawerClasses = "side-drawer";
    if (show) {
        drawerClasses = "side-drawer open";
    }
    return (
        <div>
            <nav className={drawerClasses}>
                <div className="side-drawer-logo"><NavLink to="/"><img alt="" src="TFClogo.png" /></NavLink></div>

                <ul>
                    <li>
                        <NavLink exact to="/" activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}>
                            Home
                    </NavLink></li>
                    <li>
                        <NavLink to="/films" activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}>
                            Films
                    </NavLink></li>
                    <li>
                        <NavLink to="/news" activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}>
                            News
                    </NavLink></li>
                    <li>
                        <NavLink to="/services" activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}>
                            Services
                    </NavLink></li>
                    <li>
                        <NavLink to="/about_us" activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}>
                            About Us
                    </NavLink></li>
                    <li>
                        <NavLink to="/contact_us" activeStyle={{
                            fontWeight: "bold",
                            color: "black"
                        }}>
                            Contact Us
                        </NavLink></li>
                </ul>
            </nav>

        </div >
    );
}
export default sideDrawer;
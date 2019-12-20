import React from 'react';
import "./Toolbar.css";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import { Link } from 'react-router-dom';

const toolbar = ({ drawerToggleClickHandler }) => {
    return (
        <header className="toolbar">
            <nav className="toolbar-navigation">
                <div>
                    <DrawerToggleButton click={drawerToggleClickHandler} />
                </div>
                <div className="spacer" />
                <div className="toolbar-logo"><Link to="/"><img alt="" src="TFClogo.png" /></Link></div>
                <div className="spacer" />

            </nav>
        </header>
    )
}

export default toolbar;
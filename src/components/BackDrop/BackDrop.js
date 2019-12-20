import React from 'react';
import './BackDrop.css';

const backdrop = ({ click, color }) => {
    return (
        <div className="backdrop" onClick={click} />
    );
}

export default backdrop;

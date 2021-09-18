import React from 'react';
import "./Sidenav.css";

function SideNav() {
    return (
        <div className="sidenav">
            <a href="#section">About</a>
            <a href="#section">Technologies</a>
            <a href="#section">Projects</a>
            <a href="#section">Contact</a>
        </div>
    );
}
export default SideNav;
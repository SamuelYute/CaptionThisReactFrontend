import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow">
        <Link to="/" className="navbar-brand mb-0 h1 w3-text-white">CaptionTh <i className="fa fa-camera shadow w3-text-khaki"></i> s </Link>
        <span className="mr-sm-2">
            <i className="fa fa-ellipsis-v w3-text-white"></i>
        </span>
    </nav>
);

export default Header;
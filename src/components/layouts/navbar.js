import React from 'react'
import { Link } from 'react-router-dom'; 

const Navbar = () => (
    <nav className="navbar navbar-expand-lg fixed-bottom navbar-dark bg-dark shadow" >
        <span className="navbar-brand"><i className="fa fa-smile-o w3-xlarge"></i> <span className="w3-large">Samuel Yute</span></span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-chevron-up"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link w3-large"><i className="fa fa-random"></i> Randoms</Link>
                </li>
                <li className="nav-item">
                    <Link to="/briefly" className="nav-link w3-large"><i className="fa fa-clock-o"></i> Briefly</Link>
                </li>
                <li className="nav-item">
                    <Link to="/whats-new" className="nav-link w3-large"><i className="fa fa-bell"></i> What's New</Link>
                </li>
                <li className="nav-item">
                    <Link to="/me" className="nav-link w3-large"><i className="fa fa-user"></i> Meee!</Link>
                </li>  
            </ul>
        </div>
    </nav>
);

export default Navbar;
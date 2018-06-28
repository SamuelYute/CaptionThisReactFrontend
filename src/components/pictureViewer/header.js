import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                <Link to="/" className="navbar-brand mb-0 h1 w3-text-white">
                    <i className="fa fa-chevron-left"></i>
                </Link>
            </nav>
        );
    }

export default Header;
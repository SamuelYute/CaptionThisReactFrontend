import React, { Component } from 'react';
import Header from './layouts/header.js';
import Navbar from './layouts/navbar.js';

class MeSection extends Component
{

    render() {
        return (
            <div>
                <div className="container-fluid no-padding-container">
                    <Header />
                    <Navbar />
                </div>
                <div id="main-content">
                    
                </div>

                <div className="w3-margin" style={{height:'50px'}}>
                </div>
            </div>
        );
    }

}

export default MeSection;
import React, { Component } from 'react';

import Header from '../components/layouts/header.js';
import Navbar from '../components/layouts/navbar.js';
import CaptionWrapper from '../components/captionWrapper/index.js';

import { getRandomCaptions } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class RandomsSection extends Component
{
    constructor(props){
        super(props)

        this.state = {
            captions : [ ]
        }

        this.renderCaptions.bind(this);
    }

    componentWillMount() {
        this.setState({ captions : this.props.captions});
        this.setBodyPadding();
    }

    componentDidMount() {
        this.props.getRandomCaptions();
    }

    componentWillUnmount() {
        this.removeBodyPadding();
    }
    
    setBodyPadding () {
        document.body.classList.add('body-padding-top');
        document.body.classList.add('body-padding-bottom');
    }

    removeBodyPadding () {
        document.body.classList.remove('body-padding-top');
        document.body.classList.remove('body-padding-bottom');
    }

    renderCaptions (){
        return this.props.captions.map((caption) => (<CaptionWrapper key={caption.id} caption={caption} />));
    }

    render() {
        return (
            <div>
                <div className="container-fluid no-padding-container">
                    <Header />
                    <Navbar />
                </div>
                <div id="main-content">
                    <div className="animated fadeIn container-fluid" id="random">
                        <div className="w3-margin-top">
                            <div className="row justify-content-center">
                                <div className="col-md-9 col-xs-12">                                
                                    { this.renderCaptions() }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w3-margin" style={{height:'50px'}}>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state){
    return {
        captions : state.randomCaptions
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getRandomCaptions: getRandomCaptions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomsSection);
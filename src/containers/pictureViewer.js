import React, { Component } from 'react'
import Header from '../components/pictureViewer/header.js';
import Image from '../components/captionWrapper/image.js';
import Owner from '../components/pictureViewer/owner.js';
import Info from '../components/pictureViewer/info.js';
import Captions from '../components/pictureViewer/captions.js';
import { getPicture } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PictureViewer extends Component {

    constructor(props){
        super(props)

        this.state = {
            id : '',
            url : '',
            postedAt : '',
            owner : {
                id: ''
            }
        }
    }


    componentWillMount (){
        this.removeBodyPadding();
    } 

    componentDidMount (){
        this.props.getPicture(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            id : nextProps.picture.id,
            url : nextProps.picture.url,
            postedAt : nextProps.picture.postedAt,
            owner : nextProps.picture.owner
        })
    }

    removeBodyPadding (){
        document.body.classList.remove('body-padding-top');
    }

    render (){
        return (
            <div id="big-wrapper">
                <div className="header">
                    <Header />
                </div>
                <div className="container-fluid no-padding-container" style={{padding:0,backgroundColor:'#F5F3EE'}}>
                    <Image id={this.state.id} url={this.state.url} className="animated pulse" />

                    <div className="picture-info w3-padding w3-padding-bottom w3-white">
                        <div className="container-fluid">
                            <div className="row w3-padding-top" style={{paddingTop:'10px'}}>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <Owner owner={this.state.owner}  postedAt={this.state.postedAt} />
                                </div>

                                <div className="hidden-md hidden-lg w3-padding">
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <Info />
                                </div>
                            </div>
                        </div>
                    </div>

            <div className="picture-other">
                <Captions pictureID={this.props.match.params.id} />
            </div>
        </div>
    </div>
        );
    }
}

function mapStateToProps(state){
    return {
        picture : state.activePicture
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getPicture: getPicture}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PictureViewer);
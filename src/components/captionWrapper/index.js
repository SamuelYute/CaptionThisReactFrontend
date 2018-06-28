import React, { Component } from 'react'

import Caption from './caption.js'
import Image from './image.js'
import Owner from './owner.js'
import Info from './info.js'
import { Link } from 'react-router-dom';

class CaptionWrapper extends Component {
    constructor(props){
        super(props)

        this.state = {
            caption : {},
            picture : {},
            owner : {}
        }
    };

    componentWillMount (){
        this.setState({
            caption : this.props.caption,
            picture : this.props.caption.picture,
            owner : this.props.caption.picture.owner
        })
    }

    render (){
        return (
                <div className="picture-wrapper w3-margin-bottom">
                    <Caption  content={this.state.caption.content} owner={this.state.caption.owner} />

                    <Link to={`/pictures/${this.state.picture.id}`}>
                        <Image id={this.state.picture.id} url={this.state.picture.url} />
                    </Link>
                    
                    <div className="picture-details w3-padding w3-margin-top">
                        <Owner owner={this.state.owner} postedAt={this.state.picture.postedAt} />
                    </div>    
                </div>
        );
    }
}

export default CaptionWrapper;

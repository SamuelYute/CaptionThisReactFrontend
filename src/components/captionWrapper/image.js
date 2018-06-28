import React, { Component } from 'react'
import Lazyload from 'react-lazyload';

class Image extends Component {
    constructor(props){
        super(props)

        this.state = {
            imageStatus: 'Loading',
            visibility : 'hidden',
            display : 'inherit'
        }
    };

    componentWillMount() {
        console.log(this.state);
    }

    handleImageLoaded() {

        this.setState({ imageStatus: 'Done loading',display : 'none', visibility : 'inherit' });
    }
 
    handleImageErrored(err) {
        this.setState({ imageStatus: 'Failed to load, check your network' });
    }

    render (){
        return (
            <Lazyload offset={10}>
                
                <div className="loader"  style={{ display : this.state.display }}> 
                    <div className="ball-scale">
                        <div className="w3-cyan"></div>
                    </div>
                </div>

                { this.state.imageStatus == 'Loading' ? console.log(this.state.imageStatus) : console.log(this.state.imageStatus)}

                <img 
                src={this.props.url} 
                className="img-fluid mx-auto d-block animated fadeIn" 
                alt="" 
                style={{ minHeight:"150px", background: "lightgray",visibility : this.state.visibility}} 
                onLoad={this.handleImageLoaded.bind(this)}
                onError={this.handleImageErrored.bind(this)}
                />
            </Lazyload>
        );
    }
}

export default Image;
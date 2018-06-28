import React, { Component } from 'react'

class Caption extends Component {
  
    render (){
        return (
            <div className="picture-caption w3-padding">
                <div className="row">
                    <div className="col w3-center align-self-center">
                        <div className="w3-large">@</div>
                        <div className="w3-large">{this.props.owner.username}</div>
                    </div>

                    <div className="col w3-center align-self-center">
                        <i className="fa fa-heart-o w3-xlarge"></i>
                    </div>

                    <div className="col w3-center align-self-center">
                        <i className="fa fa-camera w3-large"></i>
                    </div>
                    
                    <div className="col-12  w3-center align-self-center w3-padding">
                        <div className="w3-medium">{this.props.content}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Caption;


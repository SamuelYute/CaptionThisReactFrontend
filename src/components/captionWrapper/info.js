import React, { Component } from 'react'

class Info extends Component {

    render (){
        return (
            <div className="col-xs-12 col-sm-12 col-md-6">
                <div className="row w3-center">
                    <div className="col align-self-center" >
                        <span id="1" className="badge w3-medium w3-text-grey">
                            <i className="fa fa-quote-left"></i> {this.props.likes.length}
                        </span>
                    </div>
                    <div className="col align-self-center" >
                        <span id="1" className="badge w3-medium w3-text-grey">
                            <i className="fa fa-reply"></i> {this.props.replies.length}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;
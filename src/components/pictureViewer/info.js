import React, { Component } from 'react'

class Info extends Component {
    constructor(props){
        super(props)

        this.state = {
            captions : 0,
            replies : 0,
        }
    };

    render (){
        return (
            <div className="row w3-center">
                <div className="col align-self-center" >
                    <span className="badge w3-medium w3-text-grey">
                        <i className="fa fa-quote-left"></i> {this.state.captions}
                    </span>
                </div>
                <div className="col align-self-center" >
                    <span className="badge w3-medium w3-text-grey">
                        <i className="fa fa-reply fa-flip-horizontal"></i> {this.state.replies}
                    </span>
                </div>
            </div>
        );
    }
}

export default Info;
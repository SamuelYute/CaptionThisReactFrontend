import React, { Component } from 'react'


const Captioner = (props) => {
    return (
        <div className="captioner">
            <div className="row"> 
                <div className="col-2">
                    <i className="fa fa-smile-o w3-xlarge"></i>
                </div>
                <div className="col">
                    {props.fullName}
                </div>
                <div className="col-4 w3-tiny text-muted align-self-center">
                    <i className="fa fa-clock-o "></i> {props.updatedAt}
                </div>
            </div>
        </div>
    );
}

class Caption extends Component {
    constructor(props){
        super(props)

        this.state = {
            id : '',
            content : '',
            likes : 0,
            replies : 0,
            updatedAt : '',
            captioner : {
                fullName : '',
                avatar : '',
            },
        }
    };

    componentWillMount (){
        this.setState({
            id : this.props.id,
            content : this.props.content,
            likes : this.props.likes,
            replies : this.props.replies,
            captioner : {
                fullName : `${this.props.captioner.firstname} ${this.props.captioner.lastname}`,
                avatar : this.props.captioner.avatar,
            },
        })
    }

    render (){
        return (
            <div className="caption w3-padding w3-margin w3-white" style={{border:'1px solid transparent',borderRadius:'2px'}}>
                <Captioner fullName={this.state.captioner.fullName} updatedAt={this.state.updatedAt} avatar={this.state.captioner.avatar} />
                    
                <div className="w3-padding"></div>

                <div className="description">
                    <i className="fa fa-quote-left w3-text-grey w3-large fa-pull"></i> {this.state.content}
                </div>

                <div className="div-divider"></div>
                    
                <div className="row w3-center">
                    <div className="col align-self-center" >
                        <a id="{{ $picture->id }}" className="fa fa-heart-o w3-large w3-text-grey">
                            {this.state.likes}
                        </a>
                    </div>
                    <div className="col align-self-center w3-text-grey w3-large " >
                        <a id="{{ $picture->id }}" className="fa fa-mail-reply fa-flip-horizontal ">
                        </a>
                            {this.state.replies}
                    </div>
                </div>
            </div>
        );
    }
}

export default Caption;
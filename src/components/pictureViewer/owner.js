import React, { Component } from 'react'
import Moment from 'react-moment';

class Owner extends Component {

    render (){

        return (
            <div className="row">
                <div className="col-2">
                    <i className="fa fa-smile-o fa-2x"></i>
                </div>
                <div className="col">
                    <div className="w3-medium">{this.props.owner.fullName}</div>
                    <div className="w3-small text-muted">
                        <Moment parse="YYYY-MM-DD HH:mm" fromNow> { this.props.postedAt.date } </Moment>
                    </div>
                </div>
                {/* <div className="col-4 align-self-center">
                    <button className="btn btn-info btn-sm"><i className="fa fa-plus"></i> Follow</button>
                </div> */}
            </div>
        );
    }
}

export default Owner;
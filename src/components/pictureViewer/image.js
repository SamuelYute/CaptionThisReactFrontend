import React, { Component } from 'react'

class Image extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: '',
            url : ''
        }
    }

    componentWillMount() {
        this.setState({ id: this.props.id, url: this.props.url })
    }

    render (){
        return (
            <div className="a">
                <img id={this.state.id} src={this.state.url} className="img-fluid mx-auto d-block" alt="Loading ..." />
            </div>
        );
    }
}

export default Image;
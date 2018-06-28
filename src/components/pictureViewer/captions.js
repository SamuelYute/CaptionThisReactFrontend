import React, { Component } from 'react'
import Caption from './caption.js'
import { getPictureCaptions } from '../../actions/index.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Captions extends Component {
    constructor(props){
        super(props)

        this.state = {
            captions : [ ]
        }

        this.renderCaptions.bind(this);
    }

    componentWillMount() {
        this.setState({ captions : this.props.captions});
    }

    componentDidMount(){
         this.props.getPictureCaptions(this.props.pictureID);
    }

    renderCaptions (){
        return this.props.captions.map((caption) => (
                <Caption 
                    key={caption.id}
                    content={caption.content}
                    updatedAt={caption.updated_at}
                    captioner={caption.user} 
                    />
            ));
    }

    render (){
        return (
            <div className="picture-captions">
                <p className="w3-margin-top w3-margin-left text-muted">Captions below ... </p>

               { this.renderCaptions() }
            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        captions : state.activeCaptions
    }
}

function mapDispatchToProps (dispatch){
    return bindActionCreators({ getPictureCaptions : getPictureCaptions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Captions);
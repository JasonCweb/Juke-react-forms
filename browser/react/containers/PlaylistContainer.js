import React, {Component} from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

class PlaylistContainer extends Component {

    constructor() {
        super();
        this.state = {
            inputValue: '',
            disabled: true,
            inputTooLong: false,
            inputTooShort: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event) {
        const val = event.target.value;
        this.setState({
            inputValue: val
        });
        if (val.length < 1) {
            this.setState({
                disabled: true,
                inputTooShort: true
            });
        }
        else if (val.length > 16) {
            this.setState({
                disabled: true,
                inputTooLong: true
            });
        }
        else {
            this.setState({
                disabled: false,
                inputTooLong: false,
                inputTooShort: false
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addPlaylist(this.state.inputValue);

        this.setState({
            inputValue: ''
        });
    }

    render() {
        return (
            <div>
                <NewPlaylist 
                    inputTooShort={ this.state.inputTooShort }
                    inputTooLong={ this.state.inputTooLong }
                    buttonDisabled={ this.state.disabled } 
                    inputValue={ this.state.inputValue } 
                    handleSubmit={ this.handleSubmit } 
                    handleChange={ this.handleChange } 
                />
            </div>
        )
    }

}

export default PlaylistContainer;
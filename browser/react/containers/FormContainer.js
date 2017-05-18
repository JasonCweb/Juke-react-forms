import React, {Component} from 'react';

class FormController extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const val = event.target.value;
        this.setState( {
            inputValue: val
        })
    }

}
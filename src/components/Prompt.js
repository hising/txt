import React from 'react';
import './prompt.css';
import classNames from 'classnames';

class Prompt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            active: false
        };
        this._handleKeyPress = this._handleKeyPress.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }

    render() {
        let promptClasses = classNames('prompt', {
            'active': this.state.active
        });
        return (<div className={promptClasses}>
            <input type="text"
                   placeholder={this.props.placeholder}
                   value={this.state.message}
                   onChange={this.handleMessage}
                   onKeyPress={this._handleKeyPress}
                   onFocus={this.onFocus}
                   onBlur={this.onBlur}
            />
            <i>
                >
            </i>
        </div>);
    }

    _handleKeyPress(event) {
        if (event.key === 'Enter') {
            if (this.props.onMessage && this.state.message.length > 0) {
                this.props.onMessage(this.state.message);
            }
            this.setState({
                message: ''
            });
        }
    }

    handleMessage(event) {
        this.setState({
            message: event.target.value
        });
    }

    onFocus() {
        this.setState({
            active: true
        });
    }

    onBlur() {
        this.setState({
            active: false
        });
    }
}

export default Prompt;
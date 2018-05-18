import React from 'react';
import './prompt.css';

class Prompt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this._handleKeyPress = this._handleKeyPress.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
    }

    render() {
        return (<div className="prompt">
            <input type="text"
                   placeholder={this.props.placeholder}
                   value={this.state.message}
                   onChange={this.handleMessage}
                   onKeyPress={this._handleKeyPress}
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
}

export default Prompt;
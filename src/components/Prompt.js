import React from 'react';
import './prompt.css';

class Prompt extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="prompt">
            <input type="text" placeholder={this.props.placeholder} />
        </div>);
    }
}

export default Prompt;
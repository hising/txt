import React from 'react';
import './log.css';

class GameLog extends React.Component {
    render() {
        return (<div className="game-log">
            <ul>
                {this.getMessages()}
            </ul>
        </div>);
    }

    getMessages() {
        let i = 0;
        return this.props.messages.map(message => {
            return <li key={i++} className={message.type}>{message.message}</li>
        });
    }
}

export default GameLog;
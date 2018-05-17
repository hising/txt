import React from 'react';
import './log.css';

class GameLog extends React.Component {
    render() {
        return (<div className="game-log">
            <ul>
                <li className="you">go west</li>
                <li className="game">can't do that</li>
                <li className="you">pick up axe</li>
                <li className="game">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur enim error explicabo fugit illo maxime mollitia numquam obcaecati omnis, provident qui quis sint sunt, ullam vel voluptate voluptates voluptatibus?</li>
            </ul>
        </div>);
    }
}

export default GameLog;
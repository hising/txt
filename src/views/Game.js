import React from 'react';
import '../game.css';
import Prompt from "../components/Prompt";
import GameLog from "../components/GameLog";

class Game extends React.Component {
    render () {
        return (<div id="Game">
            <Prompt placeholder="What do you want to do?"/>
            <GameLog />
        </div>);
    }
}

export default Game;
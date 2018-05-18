import React from 'react';
import '../game.css';
import Prompt from "../components/Prompt";
import GameLog from "../components/GameLog";

class Game extends React.Component {

    constructor() {
        super();
        this.state = {
            messages: []
        };
        this.handleMessage = this.handleMessage.bind(this);
    }

    render () {
        return (<div id="Game">
            <GameLog messages={this.state.messages} />
            <Prompt placeholder="What do you want to do?" onMessage={this.handleMessage}/>
        </div>);
    }

    handleMessage(message) {
        this.setState(prevState => ({
            messages: [...prevState.messages, message]
        }));
    }
}

export default Game;
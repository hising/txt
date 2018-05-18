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

    updateScroll(){
        let element = document.querySelector('.game-log');
        element.scrollIntoView(false);
    }

    render () {
        return (<div id="Game">
            <GameLog messages={this.state.messages} />
            <Prompt placeholder="What do you want to do?" onMessage={this.handleMessage}/>
        </div>);
    }

    handleMessage(message) {
        let messageType = {
            message,
            type: 'you'
        };
        this.setState(prevState => ({messages: [...prevState.messages, messageType]}));
        setTimeout(this.updateScroll, 100);

        // TODO: Send command to game
        this.replyToCommand(message);
    }

    replyToCommand(message) {
        let messageType = {
            message: '...',
            type: 'game'
        };
        this.setState(prevState => ({messages: [...prevState.messages, messageType]}));
    }
}

export default Game;
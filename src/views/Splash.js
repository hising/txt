import React from 'react';
import { Link } from 'react-router-dom';
import '../splash.css';

class Splash extends React.Component {
    render () {
        return (<div id="Splash">
            <h1>I am Splash</h1>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aperiam cum exercitationem facere ipsum iusto laudantium mollitia nihil nulla numquam, odit perferendis praesentium quasi quisquam repudiandae, saepe veritatis vitae.</div>
            <p><Link to="/game">Play</Link></p>
        </div>);
    }
}

export default Splash;
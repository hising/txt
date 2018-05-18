import React from 'react';
import { Link } from 'react-router-dom';
import './user.css';

class User extends React.Component {
    render () {
        return (<div id="User">
            <h1>I am User</h1>
            <div>User info</div>
            <p><Link to="/game">Back to game</Link></p>
        </div>);
    }
}

export default User;
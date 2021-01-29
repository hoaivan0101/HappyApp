import React from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import '../style/logo.css';

class logoIcon extends React.Component {
    render() {
        return (
            <div className="logo flex-align">
                <Link to="/">
                    <img src={logo} />
                </Link>
            </div>
        )
    }
}

export default logoIcon;



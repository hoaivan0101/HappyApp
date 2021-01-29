import React from 'react';
import LogoIcon from './logo.js';
import UserName from './username.js';


import '../style/header.css'

class header extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="header headerlogin flex-align">
                <LogoIcon />
            </div>
        )
    }
}

export default header;
import React from 'react';

import '../style/header.css'

class footer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="footer flex-center" styte='text-align: center'>
                <div>
                COPYRIGHT (c) NAL - 2020
                </div>
            </div>
        )
    }
}

export default footer;
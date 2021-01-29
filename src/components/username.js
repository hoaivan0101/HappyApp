import React from 'react';
import icon from '../img/accountIcon.png';
import '../style/username.css';
import { Redirect } from "react-router-dom";
import ShowMoreText from 'react-show-more-text';

class AccountIcon extends React.Component {
    constructor(props) {
        super(props);
        this.logOutFn = this.logOutFn.bind(this);
        this.state = {
            islogout: false
        }
    }

    logOutFn() {
        sessionStorage['username'] = '';
        this.setState({islogout: true});
    }

    render() {
        const username = sessionStorage['username'];
        return (
            <div className="account flex-align">
                {this.state.islogout?(<Redirect to='/' />):null}
                {username ? (
                    <ShowMoreText
                /* Default options */
                lines={2}
                more='...'
                less=''
                className='content-css'
                anchorClass='my-anchor-css-class'
                onClick={this.executeOnClick}
                expanded={false}
                width={100}
                >{username}</ShowMoreText>
                ) : <a>Log In</a>}
                <img  onClick={this.logOutFn} src={icon} alt='pic' />
            </div>
        )
    }
}

export default AccountIcon;



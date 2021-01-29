import React, { cloneElement } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import icon from '../img/accountIcon1.png';
import apiPost from '../utils/axiosPostMock.js'
import '../style/loginForm.css';

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
const defaultState = {
  username: '',
  password: '',
  usernameError: '',
  passwordError: '', 
  isLogin: false
}



class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleChange = event => {
    this.setState({[event.target.name]:event.target.value})
  }

  validate = () => {
    let usernameError = '';
    let passwordError = '';

    let regexUsername = /^[0-9a-zA-Z]+$/;
    let regexPassword = /(?=.*[0-9])(?=.*[a-zA-Z])/;
    if (!regexUsername.test(this.state.username)) {
      usernameError = 'Alphanumeric only';
    }
    
    if (this.state.username.length<6||this.state.username.length>20) {
      usernameError = `Username must between 6 and 20 characters long`;
    }

    if (!this.state.username) {
      usernameError = 'This field is required';
    }

    if (!regexPassword.test(this.state.password)) {
      passwordError = 'Must have alphabets and digits';
    }

    if (this.state.password.length<8||this.state.password.length>255) {
      passwordError = `Password must between 8 and 255 characters long`;
    }

    if (!this.state.password) {
      passwordError = 'This field is required';
    }

    if (usernameError || passwordError) {
      this.setState({ usernameError, passwordError });
      return false;
    }
    return true;
  }

  
  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const user = { username: this.state.username, password: this.state.password };
      this.setState({ usernameError: '', passwordError: '' });
      const responseApi = apiPost('http://localhost:3000/api/v0.1/login', user);
      if (responseApi.success) {
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('token', responseApi.token);
        this.setState({ isLogin: true });
      } else {
        this.setState({usernameError: responseApi.error,passwordError: responseApi.error})
      }
    }
  }

  render() {
    return (
      <div className="form flex">
        {this.state.isLogin?(<Redirect to='/questionlist' />):null}
        <div className="accountIcon">
          <img src={icon}></img>
          <h1>LOG IN</h1>
        </div>
      <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                 <Label for="exampleEmail">Your Name</Label>
                  <Input
                      type="text"
                      name="username"
                      placeholder="Your ID"
                      onChange={this.handleChange}
                      value={this.state.username}
                  />
                  {this.state.usernameError ? (<div className="ErrorMessage">{this.state.usernameError}</div>) : null}
              </FormGroup>
              <FormGroup>
                 <Label for="exampleEmail">Your Password</Label>
                  <Input
                      type="password"
                      name="password"
                      placeholder="Your Password"
                      onChange={this.handleChange}
                      value={this.state.password}
                  />
                  {this.state.passwordError ? (<div className="ErrorMessage">{this.state.passwordError}</div>) : null}
              </FormGroup>
              <Button className="submitBtn">Login</Button>
      </Form>
      </div>
    );
  }
}

export default Example;

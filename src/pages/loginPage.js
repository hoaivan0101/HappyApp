import React from 'react';
import Header from '../components/headerLogin.js';
import Footer from '../components/footer.js';
import Menu from '../components/commonMenu.js';
import LoginForm from '../components/loginForm.js';
import '../style/loginPage.css'

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const checkLogin = sessionStorage['username'];
    return (
      <div className="App">
        <Header></Header>
        <div className="main flex">
        <Menu className="Menu" />
          {!checkLogin ?   <LoginForm/>: <div><h1>HELLO {checkLogin}</h1></div>}
         
         
        </div>
        <Footer></Footer>
      </div>
    );
  }

}

export default LoginPage;

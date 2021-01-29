import React from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Menu from '../components/commonMenu.js';

class QuestionEdit extends React.Component{
    render() {
        return (
          <div className="App">
            <Header></Header>
            <div className="main flex">
              <Menu className="Menu" />
              <div>THIS IS QUESTIONPAGELIST</div>
            </div>
            <Footer></Footer>
          </div>
        );
    }
}
export default QuestionEdit;
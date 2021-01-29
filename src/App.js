import LoginPage from './pages/loginPage';
import QuestionList from './pages/questionListPage';
import QuestionEdit from './pages/questionEditPage';

import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
  
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LoginPage} />
        <Route path="/toppage" component={QuestionList}/>
        <Route path="/questionlist" component={QuestionEdit}/>
        <Route path="/detail" component={QuestionList}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

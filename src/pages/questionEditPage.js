import React from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Menu from '../components/commonMenu.js';
import QuestionTable from '../components/questionTable.js';
import QuestionList from '../components/questionList.js';
import QueryQuestion from '../utils/queryQuestion.js';
import mockdata from '../MOCK_DATA.json';
import axios from 'axios';
import '../style/questionList.css'

axios.defaults.headers.common = { 'Authorization': `Bearer ${sessionStorage['token']}` };

class QuestionPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        type: '',
        date: '',
        status: ''
      },
      posts: mockdata,
      posts1: [...mockdata].splice(0,20),
      total: mockdata.length,
      totalquery:mockdata.length,
      loading: false,
      name: '',
      date: '',
      type: '',
      status: '',
      pageSize: 20,
      currentPage: 1,
      sort:true
    };
    this.searchfn = this.searchfn.bind(this);
  }

  
    getPosts = async () => {
        this.setState({ loading: true });
      const result = await axios.get(`
        http://127.0.0.1:8000/api/v1/question/list?q_name=${this.state.name}&q_type=${this.state.type}&status=${this.state.status}&due_date=${this.state.date}
        &sort=${this.state.sort}&per_page=${this.state.pageSize}&page=${this.state.currentPage}
        `);
        this.setState({ posts: result.posts, total:result.posts.length });
        this.setState({ loading: false });
    }
    // getPosts();
  componentDidMount() {
    // this.getPosts();
  }

  solvePagination() {
    let dataFake = []
    console.log('STATE',this.state.data);
    let data1 = QueryQuestion([...this.state.posts], this.state.data);
    if ((this.state.currentPage - 1) * this.state.pageSize + this.state.pageSize > this.state.totalquery) {
      dataFake = data1.splice((this.state.currentPage - 1) * this.state.pageSize, this.state.totalquery-(this.state.currentPage - 1) * this.state.pageSize);
   }
    else dataFake = data1.splice((this.state.currentPage - 1) * this.state.pageSize, this.state.pageSize);
    console.log(dataFake);
  }

  searchfn = stateData => { 
    const data1 = QueryQuestion([...this.state.posts], stateData);
    let mockdata = [...data1].splice(0, this.state.pageSize);
    this.setState({ data: stateData, posts1: mockdata, name: stateData.name, total: data1.length, date: stateData.date, type: stateData.type, status: stateData.status, totalquery: data1.length });
  }

  sizepagefn = pageSize => {
    const data1 = QueryQuestion([...this.state.posts], this.state.data);
    const dataFake = data1.splice((this.state.currentPage - 1) * pageSize, pageSize);
    this.setState({ pageSize: pageSize, posts1: dataFake, currentPage: 1 });
  }

  sortfn = () => { 
    const data1 = QueryQuestion([...this.state.posts], this.state.data);
    if (this.state.sort) {
      data1.sort((a, b) => (new Date(a.date) > new Date(b.date))?1:-1);
    } else {
      data1.sort((a, b) => (new Date(a.date) > new Date(b.date))?-1:1);
    }
    this.setState({posts: data1,sort:!this.state.sort});
    const dataFake = [...data1].splice((this.state.currentPage - 1) * this.state.pageSize, this.state.pageSize);
    this.setState({posts1: dataFake,sort:!this.state.sort});
  }

  paginate = currentPage => {
    let dataFake = [];
    const data1 = QueryQuestion([...this.state.posts], this.state.data);
    if ((currentPage - 1) * this.state.pageSize + this.state.pageSize > this.state.totalquery) {
       dataFake = data1.splice((currentPage - 1) * this.state.pageSize, this.state.totalquery-(currentPage - 1) * this.state.pageSize);
    }
    else dataFake = data1.splice((currentPage - 1) * this.state.pageSize, this.state.pageSize);
    this.setState({ currentPage: currentPage, posts1:dataFake });
  }

  render() {
    const isLogin = sessionStorage['username'];
        return (
          <div className="App">
            <Header></Header>
            <div className="main flex">
              <Menu className="Menu" />
              {isLogin? <div className="questionpage">
                <QuestionList searchfn={this.searchfn}/>
                <QuestionTable
                  questionquery={this.state.posts1}
                  total={this.state.total}
                  sizepages={this.state.pageSize}
                  currentPage={this.state.currentPage}
                  paginate={this.paginate}
                  sizepagefn={this.sizepagefn}
                  sortfn={this.sortfn}                
                />
                
              </div> : <div><h1>YOU MUST LOGIN TO ACCESS THIS PAGE</h1></div>}
            </div>
            <Footer></Footer>
          </div>
        );
    }
}
export default QuestionPage;
import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import '../style/formQuestion.css';

class questionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            date: '',
            status: '',
            confirm: false
        }
        this.alert=this.alert.bind(this);
    }

    resetFn = ()=>{
        this.setState({ 
            name: '',
            type: '',
            date: '',
            status:''
       })
    }

    alert = () => {
        this.setState({ confirm: true });
    }

    onConfirm = () => {
        this.setState({ confirm: false });
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }

    render() {
        const searchfn = this.props.searchfn;
        let searchData = this.state;
        return (
            <div className="questionlist">
                <FormGroup className="formQuestion">
                 <Label for="exampleEmail">Question Name</Label>
                  <Input
                        type="text"
                        name="name"
                        placeholder="Question Name"
                        onChange={this.handleChange}
                        value={this.state.name}
                  />
                </FormGroup>
                <FormGroup className="formQuestion">
                 <Label for="exampleEmail">Question Type</Label>
                    <Input
                        type="select"
                        name="type"
                        onChange={this.handleChange}
                        value={this.state.type}
                    >
                        <option value="">--type--</option>
                        <option value="Input Text">Input Text</option>
                        <option value="Select Option">Select Option</option>
                    </Input>
                </FormGroup>
                <FormGroup className="formQuestion">
                 <Label for="exampleEmail">Due Date</Label>
                  <Input
                        type="date"
                        name="date"
                        onChange={this.handleChange}
                        value={this.state.date}
                  />
                </FormGroup>
                <FormGroup className="formQuestion">
                 <Label for="exampleEmail">Status</Label>
                    <Input
                        type="select"
                        name="status"
                        onChange={this.handleChange}
                        value={this.state.status}
                    >
                        <option value="">--status--</option>
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                    </Input>
                </FormGroup>
                <div className="questionlistbtn">
                    <button className="btn btn-primary" onClick={()=>{searchfn(searchData)}}>Search</button>
                    <button className="btn btn-primary" onClick={this.resetFn}>Reset</button>
                </div>
                <div className="addBtn">
                    <button className="btn btn-primary" onClick={this.alert}>Add</button>
                    {this.state.confirm?<SweetAlert title="adding_page is being developed, please try again later " onConfirm={this.onConfirm} onCancel={this.onCancel} />:null}
                </div>

            </div>
        )
    }
}

export default questionList;
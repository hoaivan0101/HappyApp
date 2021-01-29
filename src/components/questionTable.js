import React from 'react';
import { Table } from 'reactstrap';
import TableItem from './tableItem.js';
import Pagination from './pagination.js';
import '../style/questionTable.css';
import orderIcon from '../img/order.png';
import axios from 'axios';

axios.defaults.headers.common = { 'Authorization': `Bearer ${sessionStorage['token']}` };

class QuestionTable extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        total: this.props.total,
        sort: false,
        posts: this.props.questionquery,
      };
    }

    render() {
        const paginate = this.props.paginate;
        const sizepagefn = this.props.sizepagefn;
        const sortfn = this.props.sortfn;
       
        
        return (
          <div className="questionTable">
              <Pagination
                  total={this.props.total}
                  sizepage={this.props.sizepages}
                  currentPage={this.props.currentPage}
                  paginate={paginate}
                  sizepagefn={sizepagefn}
              />
            <div className="table-list">
                <Table bordered center>
                    <thead>
                        <tr>
                            <th className="tableName tableTop">Question Name</th>
                            <th className="tableTop">Status</th>
                            <th className="tableTop sort">
                                    Created Date
                                    <span onClick={sortfn}><img src={orderIcon}></img></span> 
                            </th>
                            <th className="tableTop">Due Date</th>
                            <th className="tableTop">Type</th>
                            <th className="tableTop">Details</th>
                        </tr>
                    </thead>
                        {(this.props.total === 0) ? <div className="table__noresult">
                            There are no results that match your search   
                    </div>: 
                    <tbody>
                        {this.props.questionquery.map((item, index) =>
                            <TableItem
                                name={item.name}
                                status={item.status}
                                date={item.date}
                                duedate={item.duedate}
                                type={item.type}
                                key={index}>
                            </TableItem>)}
                    </tbody>}
                </Table>
            </div>
        </div>
    );
}
 
}

export default QuestionTable;

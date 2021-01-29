import React from 'react';
import { Link } from 'react-router-dom';
import img from '../img/detail.png';
import ShowMoreText from 'react-show-more-text';

class TableItem extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const item = this.props;
      const name = this.props.name;
    
      return (
            <tr>
              <td className="tableName"><Link to="/detail">  <ShowMoreText
                /* Default options */
                lines={2}
                more='more'
                less='less'
                className='content-css'
                anchorClass='my-anchor-css-class'
                onClick={this.executeOnClick}
                expanded={false}
                width={280}
                >{name}</ShowMoreText></Link></td>
              <td><Link to="/detail">{item.status}</Link></td>
              <td><Link to="/detail">{item.date}</Link></td>
              <td><Link to="/detail">{item.duedate}</Link></td>
              <td><Link to="/detail">{item.type}</Link></td>
              <td><Link to="/detail"><img src={img}></img></Link></td>
            </tr>
      );
  }
   
  }
  
  export default TableItem;
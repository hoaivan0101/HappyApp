import React from "react";
import PaginationComponent from "react-reactstrap-pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from 'class-name';
import '../style/pagination.css'

class PaginationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelected:'20'
    }
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(event){
    this.setState({currentSelected:event.target.innerText})
    }

  render() {
    const currentSelected = this.state.currentSelected;
    const paginate = this.props.paginate;
    const sizepagefn = this.props.sizepagefn;
    const { total, sizepage, currentPage } = this.props;
    let totalItem = (currentPage - 1) * sizepage + sizepage;
    return (
      <div className="container-fluid paginationList">
            <PaginationComponent
                totalItems={String(total)}
                pageSize={String(sizepage)}
                size='3'    
                firstPageText='<<'
                previousPageText='<'
                nextPageText='>'
                lastPageText='>>'
                onSelect={(item)=>paginate(item)}
            />
        <div className="showPage">
          {totalItem < total ?
            (<div>{(currentPage - 1) * sizepage + 1} - {totalItem}/{total}</div>)
            :(<div>{(currentPage - 1) * sizepage + 1} - {total}/{total}</div>)}
                <div>
                    <span>1ページに表示する件数</span>
            <p className={classNames({ active:currentSelected ==='20' })} onClick={(e) => { sizepagefn(parseInt(e.target.innerText));this.handleClick(e)}}>20</p>
            <p className={classNames({ active:currentSelected ==='50' })} onClick={(e) => { sizepagefn(parseInt(e.target.innerText));this.handleClick(e)}}>50</p>
            <p className={classNames({ active:currentSelected ==='100' })} onClick={(e) => { sizepagefn(parseInt(e.target.innerText));this.handleClick(e)}}>100</p>
                </div>
            </div>   
      </div>
    );
  }
}

export default PaginationList

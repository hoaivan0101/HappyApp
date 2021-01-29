import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'
import '../style/commonMenu.css'

const MenuItem = (props) => {
  const isLogin = sessionStorage['username'];
  return (
    <div className="menu">
      <Nav vertical>
        <NavItem>
          <NavLink href="#"><Link to="/toppage">TOP PAGE</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"><Link to="/">USER</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            {isLogin? <Link to="/questionlist">QUESTION LIST</Link>: <Link to="/">QUESTION LIST</Link>}
            {/* <Link to="/questionlist">QUESTION LIST</Link> */}
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default MenuItem;
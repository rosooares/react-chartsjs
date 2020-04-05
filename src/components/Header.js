import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <h3 className="logo">Logo</h3>
        <div className="item">
          <Link to="/" className="menu_item">Pagina 1</Link>
          <Link to="/page2" className="menu_item">Pagina 2</Link>
        </div>
      </nav>
    );
  }
}

export default Header;
import React, { Component } from 'react';
// import Link from 'next/link';

import '../css/Header.css';


class Header extends Component {
  render() {
    return  (
      <nav className="navbar">
        <h3 className="logo">Logo</h3>
        {/* <Link href="/App" className="item">
          <a href="/App" className="menu_item">Pagina 1</a>
        </Link>
        <Link href="/page2">
          <a href="/page2" className="menu_item">Pagina 2</a>
        </Link> */}
      </nav>
    );
  }
}

export default Header;
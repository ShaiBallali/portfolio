import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className={'link'} to="/">
        About
      </Link>
      <Link className={'link'} to="portfolio">
        Portfolio
      </Link>
      <Link className={'link'} to="contact">
        Contact
      </Link>
      {/* <h3 className="about-header">About</h3>
      <h3 className="portfolio-header">Portfolio</h3>
      <h3 className="contact-header">Contact</h3> */}
    </nav>
  );
}

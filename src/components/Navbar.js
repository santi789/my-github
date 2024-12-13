import React from 'react';

const Navbar = () => (
  <header>
    <div className="container">
      <h1 className="logo">FoodWagon</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#" className="btn-get-started">Get Started</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
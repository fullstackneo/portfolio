import React, { useState } from 'react';
import Navigation from './Navigation';

function Header({ navList }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header>
        <h1>Neo Ji</h1> <span onClick={toggleMenu}></span>
        <Navigation
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          navList={navList}
        />
      </header>
    </>
  );
}

export default Header;

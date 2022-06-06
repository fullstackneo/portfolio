import React from 'react';

function Navigation({ navList, isMenuOpen, toggleMenu }) {
  return (
    <nav className={isMenuOpen ? 'nav-active' : undefined}>
      <ul>
        {navList.map(item => (
          <li onClick={toggleMenu} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

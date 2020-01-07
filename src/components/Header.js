import React from 'react';

export default function Header() {
  return (
    <header>
      <nav className="row">
        <div className="nav-left">
          <h2>Reactulator-lator</h2>
        </div>
        <div className="nav-right row">
          <a href="https://medium.com/@oluwadamilareo_" target="_blank" rel="noopener noreferrer">MEDIUM</a>
          <a href="https://twitter.com/oluwadamilareo_" target="_blank" rel="noopener noreferrer">TWITTER</a>
          <a href="https://oluwadamilareolusakin.com" target="_blank" rel="noopener noreferrer">MORE PROJECTS</a>
        </div>
      </nav>
    </header>
  );
}

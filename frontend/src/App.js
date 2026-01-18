import React, { useState } from 'react';
import Portfolio from './components/Portfolio';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">📝</span>
            <span className="logo-text">DevTrack</span>
          </div>
          <ul className="nav-menu">
            <li>
              <button
                className={`nav-link ${currentPage === 'portfolio' ? 'active' : ''}`}
                onClick={() => setCurrentPage('portfolio')}
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${currentPage === 'dashboard' ? 'active' : ''}`}
                onClick={() => setCurrentPage('dashboard')}
              >
                Dashboard
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'dashboard' && <Dashboard />}
      </main>

      <footer className="footer">
        <p>&copy; 2026 DevTrack. Built with React, Node.js & MongoDB. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

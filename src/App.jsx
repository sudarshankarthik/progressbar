import React, { useState } from 'react';
import './App.css';
import YearProgress from './components/YearProgress.jsx';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    updateTheme(!isDarkMode);
  };

  // Update CSS variables based on the theme
  const updateTheme = (isDark) => {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty('--primary-background', '#02111B');
      root.style.setProperty('--container-background', '#0B1D1D');
      root.style.setProperty('--primary-text', '#F6F0ED');
    } else {
      root.style.setProperty('--primary-background', '#FFFFFF');
      root.style.setProperty('--container-background', '#F0F0F0');
      root.style.setProperty('--primary-text', '#02111B');
    }
  };

  return (
    <div className="app-container">
      {/* Header with Theme Toggle Button */}
      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: 'var(--primary-background)' }}>
        <h1 style={{ color: 'var(--primary-theme)' }}>Year Progress Tracker</h1>
        <button
          onClick={toggleTheme}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: 'var(--primary-text)',
          }}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />} {/* Toggle between sun and moon icons */}
        </button>
      </header>

      {/* Main Content */}
      <main>
        <YearProgress />
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: 'var(--primary-background)', marginTop: 'auto' }}>
        <p style={{ color: 'var(--primary-text)' }}>© 2025 Progress Bar</p>
      </footer>
    </div>
  );
}

export default App;
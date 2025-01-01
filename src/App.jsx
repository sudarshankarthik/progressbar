import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YearProgress from "./components/YearProgress.jsx";

function App() {

  return (
    <div className="app-container">
      <YearProgress />
    </div>
  )
}

export default App

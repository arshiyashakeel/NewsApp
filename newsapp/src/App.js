import './App.css';
import React, { Component, useState } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar';

const App = () => {
  const [progress, setProgress] = useState(0)
  // apiKey = process.env.REACT_APP_API_KEY
  const apiKey = "80bbd54f742a47428ca7129ffc3edfe4"
  const setProg = (progress) => {
    setProgress(progress)
  }
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color='#f11946' progress={progress} />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProg} apiKey={apiKey} key="general" pageSize={6} country="us" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProg} apiKey={apiKey} key="business" pageSize={6} country="us" category="business" />} />
          <Route exact path="/sports" element={<News setProgress={setProg} apiKey={apiKey} key="sports" pageSize={6} country="in" category="sports" />} />
          <Route exact path="/science" element={<News setProgress={setProg} apiKey={apiKey} key="science" pageSize={6} country="us" category="science" />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App

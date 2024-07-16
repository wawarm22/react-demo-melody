// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SearchBar/>        
      </div>
    </Router>
  );
}

export default App;

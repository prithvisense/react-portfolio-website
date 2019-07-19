import React from 'react';


import Header from './components/header/header'
import PersonalInfo from './components/personal-info/personal-info'
import './components/personal-info/personal-info.css'
import './components/header/header.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <PersonalInfo/>
    </div>
  );
}

export default App;

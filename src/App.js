import React from 'react';


import Header from './components/header/header'
import PersonalInfo from './components/personal-info/personal-info'
import TechnicalQualifications from './components/technical-qualifications/technical-qualifications'
import './components/personal-info/personal-info.css'
import './components/header/header.css'
import './components/technical-qualifications/technical-qualifications.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <PersonalInfo/>
      <TechnicalQualifications/>
    </div>
  );
}

export default App;

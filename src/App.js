import React from 'react';


import Header from './components/header/header'
import PersonalInfo from './components/personal-info/personal-info'
import TechnicalQualifications from './components/technical-qualifications/technical-qualifications'
import PrevQualification from './components/prev-qualification/prev-qualification'
import Tabbar from './components/tab-bar/tab-bar'
import './components/personal-info/personal-info.css'
import './components/header/header.css'
import './components/technical-qualifications/technical-qualifications.css'
import './components/prev-qualification/prev-qualification.css'
import './components/tab-bar/tab-bar.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Tabbar/>
      <Header/>
      <PersonalInfo/>
      <TechnicalQualifications/>
      <PrevQualification/>
    </div>
  );
}

export default App;

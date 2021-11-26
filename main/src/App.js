import React from 'react';
import NavBar from './NavBar';
import Add from './Add';
import './App.css';
import Reminders from './reminders';


function MainApp(){
  
  return (
    <div className="Main">
      <header><NavBar /></header>
      <div id="display">
        <div id="remindrs"><Reminders /></div>
      <div className="add"><Add /></div>
      </div>
    </div>
  );
}


export default MainApp;
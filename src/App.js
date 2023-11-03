import React from 'react';
import Sidebar from '../src/Sidebar.js';
import Feed from '../src/Feed.js';
import Widgets from '../src/Widgets.js';
import './App.css';


function App() {
  return (
    // BEM
    <div className="app">
      <h1>Hey Mike build a twitter clone </h1>

      {/* Sidebar */}
      <Sidebar/>
      
      {/* Feed */}
      <Feed/>

      {/* Widget */}
      <Widgets/>
    </div>
  );
}

export default App;
 
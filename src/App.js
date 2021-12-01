import React from 'react';
import './App.css';
import Header from "./features/Header/Header";
import Sidebar from './features/Sidebar/Sidebar';
import Feed from './features/Feed/Feed';

function App() {
  return (
    <div className="app">
      <Header />

      <div className = "app_body">
        <Sidebar />
        <Feed />
        {/* Widgets */}        
      </div>



    </div>
  );
}

export default App;

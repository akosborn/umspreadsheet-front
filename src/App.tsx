import React from 'react';
import './App.module.css';
import 'antd/dist/antd.css'
import TopNav from './top-nav/TopNav';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <div>
      <TopNav />
      <div style={{ margin: '20px 30px' }}>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

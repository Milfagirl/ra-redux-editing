import React from 'react'
import './App.css';
import ServiceAdd from './components/ServiceAdd'
import ServiceList from './components/ServiceList'

function App() {
  return (
    <div className="App">
     <ServiceAdd />
     <ServiceList />
    </div>
  );
}

export default App;

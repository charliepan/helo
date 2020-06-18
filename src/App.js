import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './Components/Auth';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Post from './Components/Post';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Auth/>
      <Dashboard/>
      <Form/>
      <Post/>
      <Nav/>
    </div>
  );
}

export default App;

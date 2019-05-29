import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Post from './components/Post'
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Post />
        </div>
      </div>
    );
  }
}
export default App;
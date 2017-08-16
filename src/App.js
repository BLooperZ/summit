import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/editor/style.css'
import Editor from 'components/editor/edit.js'
import TinyMCE from 'react-tinymce'
import Buttons from 'components/editor/buttons.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Welcome to SummIt</h2>
        <Editor />
        <p className="App-intro">

          Use buttons below


        </p>
        <Buttons/>

      </div>
    )
  }
}

export default App;

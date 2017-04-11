import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './data/configureStore'
import './App.css';
import Sidebar from './sidebar/'
import Content from './content/'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <h2>Drag and Drop demo</h2>
          </div>
          <div className="App-main">
            <Sidebar />
            <div className="App-content">
              <Content />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import store from './data/configureStore'
import Sidebar from './sidebar/'
import Content from './content/'
import './App.css'

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

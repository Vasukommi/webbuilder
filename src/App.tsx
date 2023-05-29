import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider } from 'react-redux'

import PageBuilder from './pages/PageBuilder';

import store from './app/store';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <PageBuilder />
        </div>
      </DndProvider>
    </Provider>
  );
}

export default App;
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import store from './app/store';
import CanvasPage from './pages/canvas-page/CanvasPage';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <CanvasPage />
        </div>
      </DndProvider>
    </Provider>
  );
}

export default App;
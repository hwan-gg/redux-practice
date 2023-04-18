import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./store.js";
import thunk from 'redux-thunk';
import Zoo from './Zoo.js';
import './App.css';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <div> 
            <h1>Zoo</h1>
            <Zoo />
          </div>
        </header>
      </div>
    </Provider>
  );
}

export default App;

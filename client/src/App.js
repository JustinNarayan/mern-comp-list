import React from 'react';
import model from './models/model'
import { StoreProvider, createStore } from 'easy-peasy';
import Comps from './components/Comps';
import AddComp from './components/AddComp';
import './App.css';

const store = createStore(model);

const App = () => {
  return (
    <StoreProvider store={store}>
      <div>
        <Comps />
        <AddComp />
      </div>
    </StoreProvider>
  );
}

export default App;
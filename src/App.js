import React from 'react';

import UseStateExample from './tutorial/1-useState/UseStateExample';
import CounterExample from './tutorial/2-counter/CounterExample';

import './App.css';

const App = () => (
  <div className="mainDiv">
    <>
      <UseStateExample />
      <CounterExample />
    </>
  </div>
);

export default App;

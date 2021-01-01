import React from 'react';

import UseStateExample from './tutorial/1-useState/UseStateExample';
import CounterExample from './tutorial/1-useState/counter/CounterExample';
import UseEffectBasics from './tutorial/2-useEffect/UseEffectBasics';
import UseEffectCleanup from './tutorial/2-useEffect/UseEffectCleanup';

import './App.css';

const App = () => (
  <div className="mainDiv">
    <>
      {/* <UseStateExample />
      <CounterExample /> */}
      <UseEffectBasics />
      <UseEffectCleanup />
    </>
  </div>
);

export default App;

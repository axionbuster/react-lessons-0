import React, { useState } from 'react';

const CounterExample = () => {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    // two seconds
    setTimeout(() => {
      setValue((latestValue) => latestValue + 1);
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value - 1)}
        >
          Decrease
        </button>
        <button type="button" className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value + 1)}
        >
          Increase
        </button>
      </section>

      <section style={{ margin: '4rem 0' }}>
        <h2>Delayed counter (only Increase impl.)</h2>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value - 1)}
        >
          Decrease
        </button>
        <button type="button" className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={complexIncrease}
        >
          Increase
        </button>
      </section>
    </>
  );
};

export default CounterExample;

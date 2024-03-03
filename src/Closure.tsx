import React, { useReducer, useRef } from "react";
import { flushSync } from "react-dom";

function updateValue(
  currentValue: number,
  dispatch: React.DispatchWithoutAction,
) {
  if (currentValue >= 3) {
    return;
  }

  dispatch();
}

export function Closure() {
  const [value, dispatch] = useReducer((prev) => prev + 1, 0);
  const latestValue = useRef(value);
  latestValue.current = value;

  function increment() {
    if (value >= 3) {
      return;
    }

    flushSync(() => {
      dispatch();
    });

    updateValue(latestValue.current, dispatch);
  }

  return (
    <section>
      <h2>Closure</h2>
      <p>
        <button onClick={increment}>Increment</button>
        <span role="presentation">{value}</span>
      </p>
    </section>
  );
}

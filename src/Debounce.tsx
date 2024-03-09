/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";

export function Debounce() {
  const [value, setValue] = useState(0);
  const debounceFuncRef = useRef(
    (() => {
      let timeout: NodeJS.Timeout | null = null;

      return (fn: () => void, delay: number) => {
        if (timeout) {
          clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
          fn();
          timeout = null;
        }, delay);
      };
    })()
  );

  const increment = () => {
    debounceFuncRef.current(() => {
      console.log("increment");
      setValue(value + 1);
    }, 3000);
  };

  return (
    <div>
      <section>Debounce</section>
      <p>Value: {value}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

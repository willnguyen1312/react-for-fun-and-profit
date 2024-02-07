import { useCallback, useState } from "react";

export function Playground() {
  const [count, setCount] = useState(0);

  const alertFunc = useCallback(() => {
    alert("Hello, world!");
  }, []);

  return (
    <>
      <section>Fast code</section>

      <p onClick={alertFunc}>Value: {count}</p>

      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
    </>
  );
}

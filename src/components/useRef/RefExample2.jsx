import { useRef, useState } from "react";

const RefExample2 = () => {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const incrementCountWithRef = () => {
    console.log(countRef.current.value);
  };

  const incrementCountWithState = () => {
    setCount(count + 1);
    console.log(count)
  };

  console.log(countRef)

  return (
    <div>
      <h1>useRef Hook</h1>
      <p>Example 2: It does not cause re-renders</p>
      <div>
        <label>Increment without Re-Render (useRef)</label>
        <input ref={countRef} onChange={incrementCountWithRef} type="number" />
        <p>Counter useRef: {countRef.current.value}</p>
      </div>
      <div>
        <label>Increment with Re-Render (useState)</label>
        <input onChange={incrementCountWithState} type="number" />
        <p>Counter useState: {count}</p>
      </div>
    </div>
  );
};

export default RefExample2;

import { useMemo, useState } from "react";

const MemoExample = () => {
  // const [count, setCount] = useState(4);
  const [count2, setCount2] = useState(0);

  const expensiveCounter = useMemo(() => {
    // Simulating a costly computation
    console.log("Computing expensive value...");
    for (let i = 0; i < 1000000000; i++);
    console.log("Expensive value computed!");
    return 327652783;
  }, []);

  const fastCounter = (input) => {
    console.log("Computing fast value...");
    // Simulating an easy computation
    return input * 2;
  };

  console.log("rendering")

  return (
    <div>
      {/* <p>Count: {count}</p> */}
      <p>Memoized Value: {expensiveCounter}</p>
      {/* <button onClick={() => setCount(count + 1)}>Increment Count</button> */}
      <p>Count2: {count2}</p>
      <p>Fast Counter: {fastCounter(count2)}</p>
      <button onClick={() => setCount2(count2 + 1)}>Increment Count2</button>
    </div>
  );
};

export default MemoExample;

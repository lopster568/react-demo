import { useEffect, useState } from "react";

const EffectExample3 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Side Effect Triggered");
  }, [count]);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>useEffect</h1>
      <p>Example 3: Side Effects</p>
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment Count</button>
      </div>
    </div>
  );
};

export default EffectExample3;

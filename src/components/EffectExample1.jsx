import { useEffect, useState } from "react";

const EffectExample1 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      // Cleanup function - it run when the component is unmounted
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Component Updated");
  }, [count, name]);


  return (
    <div>
      <h1>useEffect</h1>
      <p>Example 1: Similar to lifecycle methods</p>
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment Count</button>
      </div>
    </div>
  );
};

export default EffectExample1;

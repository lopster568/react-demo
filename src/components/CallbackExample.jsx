import { useCallback, useState } from "react";

const CallbackExample = () => {
  const [count, setCount] = useState(0);

  const memoizedCallback = useCallback(() => {
    console.log("Memoized callback:", count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <button onClick={memoizedCallback}>Memoized Callback</button>
    </div>
  );
};

export default CallbackExample;

import { useReducer } from "react";

const ACTION = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };
  }
};

const INITIAL_STATE = {
  count: 0,
};

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <h1>Reducer Example</h1>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>
        Decrement
      </button>
    </div>
  );
};

export default ReducerExample;

import { createContext, useState } from "react";
import Child1 from "./children/Child1";

export const SecretContext = createContext();

const ContextExample1 = () => {
  const secret = "This is a secret";
  return (
    <div>
      <h1>Context Example 1</h1>
      <SecretContext.Provider value={secret} >
        <Child1 />
      </SecretContext.Provider>
    </div>
  );
};

export default ContextExample1;

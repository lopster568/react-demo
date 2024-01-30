import Content from "./ContextContent";
import { ThemeProvider } from "./contexts/ThemeContext";

const ContextExample2 = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Context Example 2</h1>
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default ContextExample2;

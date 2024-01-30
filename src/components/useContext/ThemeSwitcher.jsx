import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

const ThemSwitcher = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div>Theme Toggle</div>
      <button onClick={toggleTheme} >Toggle Theme</button>
    </>
  );
};

export default ThemSwitcher;

import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import ThemSwitcher from "./ThemeSwitcher";

const Content = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: `${theme === "light" ? "#fff" : "#333"}`, color: `${theme === "light" ? "#333" : "#fff"}` }}>
      <h2>Content</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, quibusdam, quae, voluptatum quos doloremque quia
        consequuntur voluptate quod iusto voluptas. Quisquam, quibusdam, quae,
        voluptatum quos doloremque quia consequuntur voluptate quod iusto
        voluptas.
      </p>
      <ThemSwitcher />
    </div>
  );
};

export default Content;

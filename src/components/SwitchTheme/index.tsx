import { useContext } from "react";
import { ThemeContext } from "../../App";

const SwitchTheme = () => {

  const currentTheme = useContext(ThemeContext);

  const handleClick = () => {
	 if (currentTheme?.theme === "dark") {
		currentTheme.setTheme("light");
	} else {
		currentTheme?.setTheme("dark");
	}

  }
  return (
    <div className="theme-switch-wrapper">
      <div onClick={handleClick}>
        {currentTheme?.theme === "dark" ? "Light" : "Dark"} theme
      </div>
    </div>
  );
};
export default SwitchTheme;

import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
	const defaultTheme = "(default-theme: dark)";

	const initialTheme = () => {
		(matchMedia(defaultTheme).matches ? "dark" : "light") ||
			localStorage.getItem("theme");
	};

	const [theme, setTheme] = useState(initialTheme());

	const toggleTheme = () => {
		setTheme((theme) => (theme === "light" ? "dark" : "light"));
	};

	useEffect(() => {
		if (theme === "light") {
			document.documentElement.setAttribute("theme-attribute", "light");
		} else {
			document.documentElement.setAttribute("theme-attribute", "dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ toggleTheme, theme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, useTheme };

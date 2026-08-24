const Toggle = ({ darkMode, setDarkMode }) => {
	return (
		<button
			type="button"
			className="theme-toggle"
			onClick={() => setDarkMode(!darkMode)}
			aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
			title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
		>
			{darkMode ? "☀" : "☾"}
		</button>
	);
};

export default Toggle;
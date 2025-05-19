import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
    >
      {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;

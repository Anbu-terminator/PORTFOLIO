import { useTheme } from '@/hooks/useTheme';

interface ThemeToggleProps {
  isMobile?: boolean;
}

const ThemeToggle = ({ isMobile = false }: ThemeToggleProps) => {
  const { isDarkMode, toggleTheme } = useTheme();

  if (isMobile) {
    return (
      <button onClick={toggleTheme} className="flex items-center py-2">
        {isDarkMode ? (
          <>
            <i className="fa-solid fa-sun mr-2"></i>
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <i className="fa-solid fa-moon mr-2"></i>
            <span>Dark Mode</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <i className="fa-solid fa-sun"></i>
      ) : (
        <i className="fa-solid fa-moon"></i>
      )}
    </button>
  );
};

export default ThemeToggle;

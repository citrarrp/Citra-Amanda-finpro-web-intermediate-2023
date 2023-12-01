import React from "react";
import { useTheme } from "app/theme/themeContext";

const LoadingPage = () => {
  const isDarkMode = useTheme();
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`animate-spin rounded-full h-16 w-16 border-t-4 border-solid" ${
          isDarkMode ? "border-light" : "border-dark"
        }`}
      ></div>
      <p
        className={`ml-4 ${
          isDarkMode ? "text-light" : "text-dark"
        } font-semibold text-lg`}
      >
        Loading...
      </p>
    </div>
  );
};

export default LoadingPage;

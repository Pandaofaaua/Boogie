"use client";

import { useState, useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <NextThemesProvider
      attribute="class"
      enableSystem={true} // Enable system theme detection
      defaultTheme="system" // Default to system preference
    >
      {mounted && children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;

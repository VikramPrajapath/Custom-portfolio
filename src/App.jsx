import React, { useState, useEffect } from "react";
import { Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? "#3b82f6" : "#60a5fa",
      dark: mode === "light" ? "#1e40af" : "#3b82f6",
      light: mode === "light" ? "#60a5fa" : "#93c5fd",
    },
    background: {
      default:
        mode === "light"
          ? "linear-gradient(135deg, #e8f1ff 0%, #f0f7ff 50%, #e8f1ff 100%)"
          : "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      paper: mode === "light" ? "#ffffff" : "#1e293b",
    },
    text: {
      primary: mode === "light" ? "#1f2937" : "#f8fafc",
      secondary: mode === "light" ? "#64748b" : "#94a3b8",
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});

export default function App() {
  const [mode, setMode] = useState("light");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const toggleTheme = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: theme.palette.background.default,
        }}
      >
        <Navbar
          isDark={mode === "dark"}
          onThemeToggle={toggleTheme}
          scrollY={scrollY}
        />
        <Hero isDark={mode === "dark"} />
        <Services isDark={mode === "dark"} />
        <Projects isDark={mode === "dark"} />
        <Testimonials isDark={mode === "dark"} />
        <Contact isDark={mode === "dark"} />
        <Footer isDark={mode === "dark"} />
      </Box>
    </ThemeProvider>
  );
}

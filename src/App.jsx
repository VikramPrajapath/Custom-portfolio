import { useEffect, useState } from "react";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3b82f6",
      dark: "#1e40af",
      light: "#60a5fa",
    },
    secondary: {
      main: "#6366f1",
    },
    background: {
      default: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#3b82f6",
    },
  },
  typography: {
    fontFamily: '"Raleway", "Roboto", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4.5rem" },
    },
    h2: {
      fontWeight: 600,
      fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
    },
    h3: {
      fontWeight: 600,
      fontSize: { xs: "1.75rem", md: "2rem", lg: "2.5rem" },
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          scrollBehavior: "smooth",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: "50px",
          transition: "all 0.3s ease",
        },
      },
    },
  },
});

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll position
      const sections = [
        "home",
        "services",
        "projects",
        "testimonials",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: theme.palette.background.default,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100%",
            background:
              "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Navbar scrollY={scrollY} activeSection={activeSection} />
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

import React from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Typography,
  Button,
  useTheme,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Toolbar,
  Stack,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const navLinks = [
  { name: "Animations", url: "#animations" },
  { name: "Podcast Editing", url: "#podcast" },
  { name: "Long videos", url: "#videos" },
  { name: "Reels", url: "#reels" },
  { name: "Thumbnail", url: "#thumbnail" },
  { name: "Client Love", url: "#testimonials" },
];

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? "#D4AF37" : "#9F7E23",
    },
    background: {
      default: mode === "light" ? "#ffffff" : "#1a1a1a",
      paper: mode === "light" ? "#ffffff" : "#1a1a1a",
    },
    text: {
      primary: mode === "light" ? "#2D2D2D" : "#E0E0E0",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      marginBottom: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          padding: "8px 16px",
        },
      },
    },
  },
});

export default function App() {
  const [mode, setMode] = React.useState("light");
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Container>
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Typography variant="h1" component="h1">
                Vikram Prajapat
              </Typography>
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>

        <Container>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
              my: 4,
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.name}
                href={link.url}
                variant="contained"
                color="primary"
              >
                {link.name}
              </Button>
            ))}
          </Stack>

          <Box
            sx={{
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
              my: 8,
            }}
          >
            <Typography variant="h2" gutterBottom>
              Hi, I'm Vikram Prajapat!
            </Typography>
            <Typography variant="h5" color="text.secondary">
              I love what I do and I am here to build something big. Creating
              impactful digital experiences through creative development.
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

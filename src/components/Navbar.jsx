import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { Moon, Sun } from "lucide-react";

export const Navbar = ({ isDark, onThemeToggle, scrollY }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        background:
          scrollY > 50
            ? isDark
              ? "rgba(18, 18, 18, 0.8)"
              : "rgba(255, 255, 255, 0.8)"
            : "transparent",
        backdropFilter: scrollY > 50 ? "blur(10px)" : "none",
        boxShadow: scrollY > 50 ? 1 : "none",
        transition: "all 0.3s",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          maxWidth: "lg",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h6"
          component="h1"
          sx={{
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(to right, #2563eb, #1e40af)"
                : "linear-gradient(to right, #7c3aed, #db2777)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Vikram Prajapat
        </Typography>

        <IconButton
          onClick={onThemeToggle}
          sx={{
            bgcolor:
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.05)"
                : "white",
            "&:hover": {
              bgcolor:
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.05)",
            },
            transition: "all 0.3s",
            boxShadow: theme.shadows[2],
          }}
        >
          {isDark ? (
            <Sun className="w-5 h-5" style={{ color: "#fbbf24" }} />
          ) : (
            <Moon className="w-5 h-5" style={{ color: "#7c3aed" }} />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

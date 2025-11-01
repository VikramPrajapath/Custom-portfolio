import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = ({ scrollY, activeSection }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    handleClose();
  };

  const isActive = (href) => {
    return activeSection === href.replace("#", "");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrollY > 50 ? "rgba(248, 250, 252, 0.9)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(10px)" : "none",
        boxShadow: scrollY > 50 ? 1 : "none",
        transition: "all 0.3s ease",
        borderBottom: scrollY > 50 ? "1px solid rgba(0,0,0,0.1)" : "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          maxWidth: "lg",
          width: "100%",
          margin: "0 auto",
          padding: { xs: "0 16px", sm: "0 24px" },
        }}
      >
        <Typography
          variant="h6"
          component="h1"
          sx={{
            background: "linear-gradient(to right, #3b82f6, #6366f1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
          }}
          onClick={() => handleNavClick("#home")}
        >
          Narendra Prajapati
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{
                  "& .MuiPaper-root": {
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(10px)",
                  },
                }}
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      color: isActive(item.href) ? "#3b82f6" : "grey.700",
                      fontWeight: isActive(item.href) ? 600 : 400,
                      background: isActive(item.href)
                        ? "rgba(59, 130, 246, 0.1)"
                        : "transparent",
                    }}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    color: isActive(item.href) ? "#3b82f6" : "grey.700",
                    fontWeight: isActive(item.href) ? 600 : 500,
                    fontSize: "0.9rem",
                    padding: "6px 16px",
                    borderRadius: "20px",
                    background: isActive(item.href)
                      ? "rgba(59, 130, 246, 0.1)"
                      : "transparent",
                    "&:hover": {
                      background: "rgba(59, 130, 246, 0.1)",
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

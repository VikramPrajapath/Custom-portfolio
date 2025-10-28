import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";

export const Hero = ({ isDark }) => {
  const stats = [
    { label: "Projects", value: "250+" },
    { label: "Clients", value: "100+" },
    { label: "Views", value: "5M+" },
    { label: "Awards", value: "15+" },
  ];

  return (
    <Box component="section" sx={{ pt: 15, pb: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box
            sx={{
              display: "inline-block",
              mb: 4,
              p: "2px",
              borderRadius: "50px",
              background: isDark
                ? "linear-gradient(to right, #2563eb, #1e40af)"
                : "linear-gradient(to right, #3b82f6, #1e40af)",
            }}
          >
            <Box
              sx={{
                px: 3,
                py: 1,
                borderRadius: "50px",
                bgcolor: isDark ? "background.paper" : "white",
              }}
            >
              <Typography variant="subtitle2">
                ✨ Available for Freelance
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", md: "4.5rem" },
              fontWeight: "bold",
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Creating
            <Box
              component="span"
              sx={{
                display: "block",
                background: isDark
                  ? "linear-gradient(to right, #2563eb, #1e40af, #0d2473)"
                  : "linear-gradient(to right, #3b82f6, #2563eb, #1e40af)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Visual Magic
            </Box>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              mb: 6,
              color: isDark ? "grey.400" : "grey.700",
            }}
          >
            Video editor & motion designer crafting impactful digital
            experiences that captivate and inspire.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: "50px",
                px: 4,
                py: 2,
                background: isDark
                  ? "linear-gradient(to right, #2563eb, #1e40af)"
                  : "linear-gradient(to right, #3b82f6, #1e40af)",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                transition: "all 0.3s",
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderRadius: "50px",
                px: 4,
                py: 2,
                borderColor: isDark ? "#2563eb" : "#3b82f6",
                color: isDark ? "#2563eb" : "#3b82f6",
                "&:hover": {
                  transform: "scale(1.05)",
                  borderColor: isDark ? "#2563eb" : "#3b82f6",
                  backgroundColor: isDark
                    ? "rgba(37, 99, 235, 0.1)"
                    : "rgba(59, 130, 246, 0.1)",
                },
                transition: "all 0.3s",
              }}
            >
              Get In Touch
            </Button>
          </Box>
        </Box>

        <Grid container spacing={3} sx={{ mt: 8 }}>
          {stats.map((stat, i) => (
            <Grid item xs={6} md={3} key={i}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 4,
                  bgcolor: isDark
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    bgcolor: isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(255, 255, 255, 0.9)",
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    background: isDark
                      ? "linear-gradient(to right, #2563eb, #1e40af)"
                      : "linear-gradient(to right, #3b82f6, #1e40af)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  color={isDark ? "grey.400" : "grey.600"}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

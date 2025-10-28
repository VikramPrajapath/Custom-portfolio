import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

const sections = [
  { id: "animations", title: "Animations", emoji: "✨" },
  { id: "podcast", title: "Podcast Editing", emoji: "🎙️" },
  { id: "videos", title: "Long Videos", emoji: "🎬" },
  { id: "reels", title: "Reels", emoji: "📱" },
  { id: "thumbnail", title: "Thumbnails", emoji: "🖼️" },
  { id: "testimonials", title: "Client Love", emoji: "💝" },
];

export const Services = ({ isDark }) => {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 6,
            fontWeight: "bold",
          }}
        >
          Services
        </Typography>

        <Grid container spacing={2}>
          {sections.map((section) => (
            <Grid item xs={6} md={4} lg={2} key={section.id}>
              <Box
                component="a"
                href={`#${section.id}`}
                sx={{
                  display: "block",
                  p: 3,
                  textAlign: "center",
                  borderRadius: 4,
                  bgcolor: isDark
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s",
                  textDecoration: "none",
                  "&:hover": {
                    transform: "scale(1.1) translateY(-8px)",
                    bgcolor: isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(255, 255, 255, 0.9)",
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 2,
                    transform: "scale(1)",
                    transition: "transform 0.3s",
                    ".MuiBox-root:hover &": {
                      transform: "scale(1.25)",
                    },
                  }}
                >
                  {section.emoji}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: isDark ? "grey.300" : "grey.700",
                    fontWeight: "medium",
                  }}
                >
                  {section.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

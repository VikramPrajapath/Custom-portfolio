import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

const services = [
  {
    id: "animations",
    title: "Animations",
    emoji: "✨",
    description: "Bringing ideas to life with smooth motion",
  },
  {
    id: "podcast",
    title: "Podcast Editing",
    emoji: "🎙️",
    description: "Crystal clear audio experiences",
  },
  {
    id: "videos",
    title: "Long Videos",
    emoji: "🎬",
    description: "Engaging long-form content",
  },
  {
    id: "reels",
    title: "Reels",
    emoji: "📱",
    description: "Viral short-form content",
  },
  {
    id: "thumbnail",
    title: "Thumbnails",
    emoji: "🖼️",
    description: "Click-worthy thumbnail designs",
  },
  {
    id: "testimonials",
    title: "Client Love",
    emoji: "💝",
    description: "Proven track record",
  },
];

export const Services = ({ isDark }) => {
  return (
    <Box component="section" id="services" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            What I Do
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: isDark ? "grey.400" : "grey.600",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Specialized services to elevate your content and engage your
            audience
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid item xs={6} md={4} lg={2} key={service.id}>
              <Box
                component="a"
                href={`#${service.id}`}
                sx={{
                  display: "block",
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  bgcolor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  transition: "all 0.4s ease",
                  textDecoration: "none",
                  cursor: "pointer",
                  height: "100%",
                  "&:hover": {
                    transform: "scale(1.05) translateY(-8px)",
                    bgcolor: "rgba(59, 130, 246, 0.1)",
                    boxShadow: "0 15px 35px rgba(59, 130, 246, 0.1)",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    mb: 2,
                    transform: "scale(1)",
                    transition: "transform 0.3s ease",
                    ".MuiBox-root:hover &": {
                      transform: "scale(1.2) rotate(5deg)",
                    },
                  }}
                >
                  {service.emoji}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: isDark ? "grey.100" : "grey.800",
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? "grey.400" : "grey.600",
                    fontSize: "0.75rem",
                    opacity: 0,
                    transform: "translateY(10px)",
                    transition: "all 0.3s ease",
                    ".MuiBox-root:hover &": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

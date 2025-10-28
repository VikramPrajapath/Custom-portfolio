import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Play, Eye, Heart } from "lucide-react";

const projects = [
  {
    title: "Motion Graphics Showreel",
    category: "animations",
    views: "125K",
    likes: "8.5K",
  },
  {
    title: "Tech Podcast Series",
    category: "podcast",
    views: "89K",
    likes: "6.2K",
  },
  {
    title: "Documentary Feature",
    category: "videos",
    views: "250K",
    likes: "15K",
  },
  {
    title: "Viral Marketing Reel",
    category: "reels",
    views: "500K",
    likes: "42K",
  },
  {
    title: "YouTube Thumbnails Pack",
    category: "thumbnail",
    views: "95K",
    likes: "7.8K",
  },
  {
    title: "Brand Identity Animation",
    category: "animations",
    views: "156K",
    likes: "11K",
  },
];

export const Projects = ({ isDark }) => {
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
          Featured Work
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, i) => (
            <Grid item xs={12} md={6} lg={4} key={i}>
              <Card
                sx={{
                  borderRadius: 6,
                  bgcolor: isDark
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.5s",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.05) translateY(-8px)",
                    bgcolor: isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(255, 255, 255, 0.9)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    paddingTop: "56.25%", // 16:9 aspect ratio
                    background: isDark
                      ? "linear-gradient(135deg, #4c1d95 0%, #831843 100%)"
                      : "linear-gradient(135deg, #ddd6fe 0%, #fbcfe8 100%)",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      opacity: 0,
                      transition: "opacity 0.3s",
                      ".MuiCard-root:hover &": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Play
                      className={isDark ? "text-white" : "text-gray-900"}
                      size={48}
                    />
                  </Box>
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 3,
                      color: isDark ? "grey.400" : "grey.600",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Eye size={16} />
                      <Typography variant="body2">{project.views}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Heart size={16} />
                      <Typography variant="body2">{project.likes}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

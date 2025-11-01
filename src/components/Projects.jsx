import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
  Button,
} from "@mui/material";
import { Play, Eye, Heart, Clock, ExternalLink } from "lucide-react";

// Define categories
const categories = ["all", "movies", "webseries", "reels", "commercials"];

export const Projects = ({ projects = [], onLoadMore, hasMore }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleCategoryChange = (event, newCategory) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

  const handleProjectClick = (project) => {
    if (project.projectLink && project.projectLink !== "#") {
      window.open(project.projectLink, "_blank");
    }
  };

  return (
    <Box component="section" id="projects" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Featured Projects
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "grey.600",
              maxWidth: "600px",
              mx: "auto",
              mb: 4,
            }}
          >
            A showcase of my work across major films, web series, and commercial
            projects
          </Typography>

          {/* Category Filter */}
          <ToggleButtonGroup
            value={selectedCategory}
            exclusive
            onChange={handleCategoryChange}
            aria-label="project categories"
            sx={{
              mb: 4,
              flexWrap: "wrap",
              gap: 1,
              "& .MuiToggleButton-root": {
                border: "1px solid rgba(103, 159, 157, 0.3)",
                borderRadius: "20px",
                padding: "8px 16px",
                textTransform: "capitalize",
                "&.Mui-selected": {
                  background: "linear-gradient(135deg, #679f9d, #26325b)",
                  color: "white",
                  "&:hover": {
                    background: "linear-gradient(135deg, #679f9d, #26325b)",
                  },
                },
              },
            }}
          >
            {categories.map((category) => (
              <ToggleButton key={category} value={category}>
                {category === "all" ? "All Projects" : category}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid key={project.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <Card
                sx={{
                  borderRadius: 4,
                  bgcolor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(103, 159, 157, 0.2)",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  overflow: "hidden",
                  position: "relative",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(103, 159, 157, 0.2)",
                  },
                }}
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Thumbnail */}
                <Box
                  sx={{
                    position: "relative",
                    paddingTop: "56.25%",
                    background: project.color,
                    overflow: "hidden",
                  }}
                >
                  {/* Play Button Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(0,0,0,0.3)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Play size={48} style={{ color: "white" }} fill="white" />
                  </Box>

                  {/* Project Type Badge */}
                  <Chip
                    label={project.type}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      bgcolor: "rgba(103, 159, 157, 0.9)",
                      color: "white",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      lineHeight: 1.3,
                      color: "#26325b",
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "grey.600",
                      mb: 2,
                      fontSize: "0.875rem",
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Tags */}
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    {project.tags.map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: "#679f9d",
                          color: "#679f9d",
                          fontSize: "0.7rem",
                          height: 24,
                        }}
                      />
                    ))}
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: 3,
                        color: "grey.600",
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Eye size={16} />
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "0.875rem" }}
                        >
                          {project.views}
                        </Typography>
                      </Box>
                    </Box>

                    <Chip
                      label={project.category}
                      size="small"
                      sx={{
                        bgcolor: "rgba(103, 159, 157, 0.1)",
                        color: "#679f9d",
                        fontWeight: 600,
                        textTransform: "capitalize",
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Load More Button */}
        {hasMore && (
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="outlined"
              onClick={onLoadMore}
              sx={{
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                borderColor: "#679f9d",
                color: "#679f9d",
                "&:hover": {
                  bgcolor: "rgba(103, 159, 157, 0.1)",
                },
              }}
            >
              Load More Projects
            </Button>
          </Box>
        )}

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Typography variant="h6" color="grey.500">
              No projects found in this category.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

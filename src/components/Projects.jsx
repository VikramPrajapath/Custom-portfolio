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

// Dynamic projects data
export const allProjects = [
  {
    id: 1,
    title: "Motion Graphics Showreel",
    category: "animations",
    views: "125K",
    likes: "8.5K",
    duration: "2:30",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    description: "A stunning showcase of motion graphics and visual effects",
    tags: ["After Effects", "Cinema 4D", "Visual Effects"],
    projectLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Tech Podcast Series",
    category: "podcast",
    views: "89K",
    likes: "6.2K",
    duration: "45:00",
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    description: "Professional podcast editing for tech industry leaders",
    tags: ["Audition", "Sound Design", "Mixing"],
    projectLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Brand Documentary",
    category: "videos",
    views: "210K",
    likes: "12.5K",
    duration: "15:20",
    color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    description: "Long-form brand storytelling documentary",
    tags: ["Premiere Pro", "Color Grading", "Storytelling"],
    projectLink: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media Reels",
    category: "reels",
    views: "350K",
    likes: "25K",
    duration: "0:45",
    color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    description: "Viral social media content series",
    tags: ["Mobile Editing", "Trend Analysis", "Engagement"],
    projectLink: "#",
    featured: true,
  },
  {
    id: 5,
    title: "YouTube Thumbnail Pack",
    category: "thumbnail",
    views: "75K",
    likes: "4.2K",
    duration: "N/A",
    color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    description: "Custom thumbnail designs for YouTube creators",
    tags: ["Photoshop", "Illustrator", "Design"],
    projectLink: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Product Launch Video",
    category: "videos",
    views: "180K",
    likes: "9.8K",
    duration: "3:15",
    color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    description: "Dynamic product launch campaign video",
    tags: ["Motion Graphics", "Sound Design", "Marketing"],
    projectLink: "#",
    featured: true,
  },
];

export const Projects = ({ projects = allProjects, onLoadMore, hasMore }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

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
            Featured Work
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
            A collection of my latest projects that showcase creativity and
            technical excellence
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
            {PROJECT_CATEGORIES.map((category) => (
              <ToggleButton key={category} value={category}>
                {category === "all" ? "All Projects" : category}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
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
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
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
                  className="project-image"
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
                      opacity: hoveredProject === project.id ? 1 : 0,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Play size={48} style={{ color: "white" }} fill="white" />
                  </Box>

                  {/* Duration Chip */}
                  {project.duration !== "N/A" && (
                    <Chip
                      icon={<Clock size={14} />}
                      label={project.duration}
                      size="small"
                      sx={{
                        position: "absolute",
                        bottom: 12,
                        right: 12,
                        bgcolor: "rgba(0,0,0,0.8)",
                        color: "white",
                        fontSize: "0.75rem",
                      }}
                    />
                  )}

                  {/* External Link */}
                  {project.projectLink && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        bgcolor: "rgba(255,255,255,0.9)",
                        borderRadius: "50%",
                        width: 32,
                        height: 32,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: hoveredProject === project.id ? 1 : 0,
                        transition: "all 0.3s ease",
                      }}
                    >
                      <ExternalLink size={16} />
                    </Box>
                  )}

                  {/* Featured Badge */}
                  {project.featured && (
                    <Chip
                      label="Featured"
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
                  )}
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
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Heart size={16} />
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "0.875rem" }}
                        >
                          {project.likes}
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
      </Container>
    </Box>
  );
};

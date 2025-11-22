import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Play,
  Eye,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const categories = ["all", "movies", "webseries", "reels", "commercials"];

export const Projects = ({ projects = [], onLoadMore, hasMore }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleCategoryChange = (event, newCategory) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
      setCurrentSlide(0);
    }
  };

  const handleProjectClick = (project) => {
    if (project.projectLink && project.projectLink !== "#") {
      window.open(project.projectLink, "_blank");
    }
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = isMobile ? 320 : 380;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      const newSlide =
        direction === "left"
          ? Math.max(0, currentSlide - 1)
          : Math.min(filteredProjects.length - 1, currentSlide + 1);
      setCurrentSlide(newSlide);
    }
  };

  const goToSlide = (index) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = isMobile ? 320 : 380;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  return (
    <Box
      component="section"
      id="projects"
      sx={{ py: { xs: 6, md: 8 }, overflow: "hidden" }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 1.5,
              fontSize: { xs: "2rem", md: "2.5rem" },
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
              mb: 3,
              fontSize: { xs: "1rem", md: "1.1rem" },
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
              mb: 3,
              flexWrap: "wrap",
              gap: 1,
              "& .MuiToggleButton-root": {
                border: "1px solid rgba(103, 159, 157, 0.3)",
                borderRadius: "20px",
                padding: "6px 14px",
                textTransform: "capitalize",
                fontSize: { xs: "0.85rem", md: "0.9rem" },
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

        {/* Carousel Container */}
        <Box sx={{ position: "relative", mb: 4 }}>
          {/* Navigation Buttons */}
          {!isMobile && filteredProjects.length > 3 && (
            <>
              <IconButton
                onClick={() => scroll("left")}
                disabled={currentSlide === 0}
                sx={{
                  position: "absolute",
                  left: -20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  bgcolor: "white",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  "&:hover": {
                    bgcolor: "white",
                    transform: "translateY(-50%) scale(1.1)",
                  },
                  "&.Mui-disabled": {
                    opacity: 0.3,
                  },
                }}
              >
                <ChevronLeft size={28} />
              </IconButton>
              <IconButton
                onClick={() => scroll("right")}
                disabled={currentSlide >= filteredProjects.length - 3}
                sx={{
                  position: "absolute",
                  right: -20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  bgcolor: "white",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  "&:hover": {
                    bgcolor: "white",
                    transform: "translateY(-50%) scale(1.1)",
                  },
                  "&.Mui-disabled": {
                    opacity: 0.3,
                  },
                }}
              >
                <ChevronRight size={28} />
              </IconButton>
            </>
          )}

          {/* Scrollable Cards Container */}
          <Box
            ref={scrollContainerRef}
            sx={{
              display: "flex",
              gap: 3,
              overflowX: "auto",
              overflowY: "hidden",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              pb: 2,
              px: isMobile ? 0 : 2,
            }}
          >
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                sx={{
                  minWidth: { xs: "300px", md: "360px" },
                  maxWidth: { xs: "300px", md: "360px" },
                  flexShrink: 0,
                  borderRadius: 4,
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(103, 159, 157, 0.2)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  overflow: "hidden",
                  position: "relative",
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  "&:hover": {
                    transform: "translateY(-12px) scale(1.02)",
                    boxShadow: "0 25px 50px rgba(103, 159, 157, 0.25)",
                    "& .play-overlay": {
                      opacity: 1,
                      background: "rgba(0,0,0,0.6)",
                    },
                    "& .play-icon": {
                      transform: "scale(1.2) rotate(360deg)",
                    },
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
                    className="play-overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(0,0,0,0.4)",
                      transition: "all 0.4s ease",
                      opacity: 0.7,
                    }}
                  >
                    <Box
                      className="play-icon"
                      sx={{
                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <Play size={56} style={{ color: "white" }} fill="white" />
                    </Box>
                  </Box>

                  {/* Featured Badge */}
                  {project.featured && (
                    <Chip
                      label="FEATURED"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        bgcolor: "rgba(220, 38, 38, 0.95)",
                        color: "white",
                        fontSize: "0.65rem",
                        fontWeight: "bold",
                        letterSpacing: "0.5px",
                      }}
                    />
                  )}

                  {/* Project Type Badge */}
                  <Chip
                    label={project.type}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      bgcolor: "rgba(103, 159, 157, 0.95)",
                      color: "white",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 2.5 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 1.5,
                      lineHeight: 1.3,
                      color: "#26325b",
                      minHeight: "48px",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "grey.600",
                      mb: 1.5,
                      fontSize: "0.85rem",
                      minHeight: "40px",
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Tags */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.75,
                      mb: 1.5,
                      minHeight: "28px",
                    }}
                  >
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: "#679f9d",
                          color: "#679f9d",
                          fontSize: "0.7rem",
                          height: 22,
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
                          sx={{ fontSize: "0.85rem", fontWeight: 600 }}
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
                        fontSize: "0.75rem",
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Slide Indicators */}
          {filteredProjects.length > 1 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                mt: 2,
              }}
            >
              {filteredProjects.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => goToSlide(index)}
                  sx={{
                    width: currentSlide === index ? 32 : 8,
                    height: 8,
                    borderRadius: 4,
                    bgcolor:
                      currentSlide === index
                        ? "#679f9d"
                        : "rgba(103, 159, 157, 0.3)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#679f9d",
                    },
                  }}
                />
              ))}
            </Box>
          )}
        </Box>

        {/* Load More Button */}
        {hasMore && (
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              variant="outlined"
              onClick={onLoadMore}
              sx={{
                borderRadius: "50px",
                px: 4,
                py: 1.25,
                borderColor: "#679f9d",
                color: "#679f9d",
                borderWidth: 2,
                fontWeight: 600,
                fontSize: "0.95rem",
                "&:hover": {
                  bgcolor: "rgba(103, 159, 157, 0.1)",
                  borderWidth: 2,
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(103, 159, 157, 0.2)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Load More Projects
            </Button>
          </Box>
        )}

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="h6" color="grey.500" fontSize="1rem">
              No projects found in this category.
            </Typography>
          </Box>
        )}
      </Container>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
};

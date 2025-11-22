import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
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
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "2rem", md: "2.75rem" },
              background: "linear-gradient(135deg, #0f172a 0%, #679f9d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Featured Projects
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#64748b",
              maxWidth: "600px",
              mx: "auto",
              mb: 4,
              fontSize: { xs: "0.95rem", md: "1rem" },
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            Explore my portfolio of work across diverse projects, showcasing
            expertise in production and creative direction
          </Typography>

          {/* Category Filter */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1.5,
              mb: 2,
            }}
          >
            {categories.map((category) => (
              <Box
                key={category}
                onClick={() => handleCategoryChange(null, category)}
                sx={{
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                  fontWeight: 600,
                  cursor: "pointer",
                  textTransform: "capitalize",
                  transition: "all 0.3s ease",
                  border:
                    selectedCategory === category
                      ? "2px solid #679f9d"
                      : "1px solid rgba(103, 159, 157, 0.2)",
                  bgcolor:
                    selectedCategory === category
                      ? "linear-gradient(135deg, rgba(103, 159, 157, 0.1), rgba(38, 50, 91, 0.1))"
                      : "rgba(255, 255, 255, 0.5)",
                  color: selectedCategory === category ? "#679f9d" : "#64748b",
                  boxShadow:
                    selectedCategory === category
                      ? "0 4px 12px rgba(103, 159, 157, 0.15)"
                      : "0 2px 4px rgba(0,0,0,0.05)",
                  "&:hover": {
                    border: "2px solid #679f9d",
                    color: "#679f9d",
                    boxShadow: "0 4px 12px rgba(103, 159, 157, 0.15)",
                  },
                }}
              >
                {category === "all" ? "All Projects" : category}
              </Box>
            ))}
          </Box>
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
                  borderRadius: 3,
                  bgcolor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(103, 159, 157, 0.15)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  overflow: "hidden",
                  position: "relative",
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 16px 32px rgba(103, 159, 157, 0.15)",
                    border: "1px solid rgba(103, 159, 157, 0.3)",
                    "& .play-overlay": {
                      opacity: 1,
                      background: "rgba(0,0,0,0.65)",
                    },
                    "& .play-icon": {
                      transform: "scale(1.15)",
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
                    background:
                      project.color ||
                      "linear-gradient(135deg, #679f9d, #26325b)",
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
                      background: "rgba(0,0,0,0.5)",
                      transition: "all 0.3s ease",
                      opacity: 0.6,
                    }}
                  >
                    <Box
                      className="play-icon"
                      sx={{
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <Play size={32} style={{ color: "white" }} fill="white" />
                    </Box>
                  </Box>

                  {/* Featured Badge */}
                  {project.featured && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        bgcolor: "#ef4444",
                        color: "white",
                        px: 2,
                        py: 0.75,
                        borderRadius: 2,
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                        boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
                      }}
                    >
                      FEATURED
                    </Box>
                  )}

                  {/* Project Type Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      bgcolor: "rgba(103, 159, 157, 0.9)",
                      color: "white",
                      px: 2,
                      py: 0.75,
                      borderRadius: 2,
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.3px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {project.type || "Project"}
                  </Box>
                </Box>

                <CardContent sx={{ p: 3 }}>
                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      lineHeight: 1.4,
                      color: "#0f172a",
                      fontSize: { xs: "1.05rem", md: "1.15rem" },
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      mb: 2,
                      fontSize: "0.875rem",
                      lineHeight: 1.5,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Divider */}
                  <Box
                    sx={{
                      height: "1px",
                      bgcolor: "rgba(103, 159, 157, 0.1)",
                      mb: 2,
                    }}
                  />

                  {/* Tags */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.75,
                      mb: 2.5,
                      minHeight: "24px",
                    }}
                  >
                    {project.tags &&
                      project.tags.slice(0, 3).map((tag, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: "inline-block",
                            bgcolor: "rgba(103, 159, 157, 0.08)",
                            color: "#679f9d",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.2px",
                          }}
                        >
                          {tag}
                        </Box>
                      ))}
                  </Box>

                  {/* Footer Stats */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      pt: 1.5,
                      borderTop: "1px solid rgba(103, 159, 157, 0.1)",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        color: "#64748b",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.75,
                          fontSize: "0.85rem",
                          fontWeight: 600,
                        }}
                      >
                        <Eye size={16} strokeWidth={1.5} />
                        <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                          {project.views || "N/A"}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "inline-block",
                        bgcolor: "rgba(103, 159, 157, 0.1)",
                        color: "#679f9d",
                        px: 1.75,
                        py: 0.5,
                        borderRadius: 1,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "0.7rem",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {project.category || "general"}
                    </Box>
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

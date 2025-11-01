import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { PlayCircle, Download, Sparkles } from "lucide-react";

export const Hero = ({ stats }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentText, setCurrentText] = useState(0);
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    clients: 0,
    views: 0,
  });

  // Professional name variations
  const nameVariations = ["Narendra Prajapati"];

  // Professional rotating texts
  const rotatingTexts = ["Excellence"];

  const formattedStats = [
    {
      label: "Projects",
      value: stats?.projects || 500,
      suffix: "Delivered",
      key: "projects",
    },
    {
      label: "Clients",
      value: stats?.clients || 25,
      suffix: "Satisfied",
      key: "clients",
    },
    {
      label: "Content Views",
      value: stats?.views || 100000,
      suffix: "Worldwide",
      key: "views",
    },
  ];

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Name carousel effect
  useEffect(() => {
    const nameInterval = setInterval(() => {
      setCurrentNameIndex((prev) => (prev + 1) % nameVariations.length);
    }, 2500);
    return () => clearInterval(nameInterval);
  }, []);

  // Professional stats animation
  useEffect(() => {
    const duration = 1800;
    const steps = 50;
    const stepDuration = duration / steps;

    formattedStats.forEach((stat) => {
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = Math.min(step / steps, 1);
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(stat.value * easeOutQuart);

        setAnimatedStats((prev) => ({
          ...prev,
          [stat.key]: currentValue,
        }));

        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, []);

  const handleDownloadCV = () => {
    // Professional CV download with error handling
    try {
      const link = document.createElement("a");
      link.href = "/narendra-prajapati-resume.pdf";
      link.download = "Narendra_Prajapati_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading CV:", error);
      // Fallback: open in new tab
      window.open("/narendra-prajapati-resume.pdf", "_blank");
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M+`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K+`;
    return `${num}+`;
  };

  return (
    <Box
      component="section"
      id="home"
      sx={{
        pt: { xs: 12, md: 15 },
        pb: { xs: 8, md: 10 },
        position: "relative",
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)",
        overflow: "hidden",
      }}
    >
      {/* Enhanced Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: { xs: "120px", md: "200px" },
          height: { xs: "120px", md: "200px" },
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite",
          filter: "blur(1px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "25%",
          left: "3%",
          width: { xs: "80px", md: "120px" },
          height: { xs: "80px", md: "120px" },
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite 1s",
          filter: "blur(1px)",
        }}
      />

      {/* Additional background element */}
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          left: "70%",
          width: "100px",
          height: "100px",
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 7s ease-in-out infinite 0.5s",
          filter: "blur(1px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          {/* Professional Badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              mb: 4,
              px: 3,
              py: 1,
              borderRadius: "50px",
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Sparkles size={16} style={{ color: "#3b82f6", marginRight: 8 }} />
            <Typography
              variant="caption"
              sx={{
                fontWeight: "600",
                color: "#3b82f6",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                fontSize: "0.75rem",
              }}
            >
              Available for Projects
            </Typography>
          </Box>

          {/* Enhanced Name Carousel */}
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { xs: "60px", md: "80px" },
                position: "relative",
                overflow: "hidden",
                mb: 2,
              }}
            >
              {nameVariations.map((name, index) => (
                <Box
                  key={name}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    opacity: index === currentNameIndex ? 1 : 0,
                    transform: `translateY(${
                      index === currentNameIndex ? 0 : "30px"
                    })`,
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: "800",
                      background:
                        "linear-gradient(135deg, #1e40af, #3b82f6, #6366f1)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontSize: { xs: "2.25rem", md: "3.5rem", lg: "4rem" },
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {name}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Professional Title */}
            <Typography
              variant="h6"
              sx={{
                color: "grey.600",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: "3px",
                fontSize: { xs: "0.8rem", md: "0.9rem" },
                mb: 3,
              }}
            >
              Video Editor & VFX Specialist
            </Typography>
          </Box>

          {/* Main Heading */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "3rem", lg: "3.5rem" },
              fontWeight: "700",
              mb: 3,
              lineHeight: 1.1,
              color: "#1e293b",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Crafting{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #1e40af, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                position: "relative",
                display: "inline-block",
              }}
            >
              {rotatingTexts[currentText]}
              <Box
                sx={{
                  position: "absolute",
                  bottom: -2,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  background:
                    "linear-gradient(90deg, transparent, #3b82f6, transparent)",
                  animation: "pulse 2s infinite",
                }}
              />
            </Box>{" "}
            Through Visual Storytelling
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h6"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              mb: 5,
              color: "grey.600",
              fontSize: { xs: "1rem", md: "1.25rem" },
              fontWeight: "400",
              lineHeight: 1.6,
            }}
          >
            Transforming creative concepts into compelling visual narratives
            with expert video editing, VFX artistry, and motion design. Bringing
            stories to life with technical excellence and creative vision.
          </Typography>

          {/* Enhanced CTA Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, md: 3 },
              justifyContent: "center",
              flexWrap: "wrap",
              mb: { xs: 6, md: 8 },
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayCircle size={20} />}
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              sx={{
                borderRadius: "50px",
                px: { xs: 4, md: 5 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: "1rem", md: "1.1rem" },
                background: "linear-gradient(135deg, #1e40af, #3b82f6)",
                boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
                  background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              Explore My Work
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Download size={20} />}
              onClick={handleDownloadCV}
              sx={{
                borderRadius: "50px",
                px: { xs: 4, md: 5 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: "1rem", md: "1.1rem" },
                borderColor: "#3b82f6",
                color: "#3b82f6",
                borderWidth: 2,
                "&:hover": {
                  transform: "translateY(-2px)",
                  borderColor: "#2563eb",
                  backgroundColor: "rgba(59, 130, 246, 0.08)",
                  borderWidth: 2,
                  boxShadow: "0 4px 12px rgba(59, 130, 246, 0.15)",
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              Download Resume
            </Button>
          </Box>
        </Box>

        {/* Enhanced Stats Grid */}
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {formattedStats.map((stat) => (
            <Grid key={stat.key} size={{ xs: 6, md: 4 }}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  bgcolor: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(59, 130, 246, 0.1)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  textAlign: "center",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                    borderColor: "rgba(59, 130, 246, 0.2)",
                    boxShadow: "0 12px 28px rgba(59, 130, 246, 0.12)",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "800",
                    background: "linear-gradient(135deg, #1e40af, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    mb: 1,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                  }}
                >
                  {formatNumber(animatedStats[stat.key] || stat.value)}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "#1e293b",
                    mb: 0.5,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  {stat.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "grey.600",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {stat.suffix}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
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

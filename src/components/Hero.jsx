import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { PlayCircle, Download } from "lucide-react";

export const Hero = ({ stats, rotatingTexts, isAvailable }) => {
  const [currentText, setCurrentText] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    clients: 0,
    views: 0,
    awards: 0,
  });

  const formattedStats = [
    {
      label: "Projects",
      value: stats?.projects || 0,
      suffix: "Completed",
      key: "projects",
    },
    {
      label: "Clients",
      value: stats?.clients || 0,
      suffix: "Worldwide",
      key: "clients",
    },
    { label: "Views", value: stats?.views || 0, suffix: "Total", key: "views" },
    {
      label: "Awards",
      value: stats?.awards || 0,
      suffix: "Won",
      key: "awards",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % (rotatingTexts?.length || 4));
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingTexts]);

  // Animate stats counting
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    formattedStats.forEach((stat) => {
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const currentValue = Math.floor(stat.value * progress);

        setAnimatedStats((prev) => ({
          ...prev,
          [stat.key]: currentValue,
        }));

        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [stats]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Vikram_Prajapat_Resume.pdf";
    link.click();
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M+`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K+`;
    return `${num}+`;
  };

  return (
    <Box
      component="section"
      id="home"
      sx={{
        pt: 15,
        pb: 10,
        position: "relative",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(103, 159, 157, 0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "100px",
          height: "100px",
          background:
            "radial-gradient(circle, rgba(249, 135, 135, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 4s ease-in-out infinite 1s",
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8, position: "relative" }}>
          {/* Availability Badge */}
          {isAvailable && (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                mb: 4,
                p: "2px",
                borderRadius: "50px",
                background: "linear-gradient(135deg, #679f9d, #f98787)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              <Box
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: "50px",
                  bgcolor: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#22c55e",
                    animation: "pulse 2s infinite",
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, color: "#26325b" }}
                >
                  Available for Freelance
                </Typography>
              </Box>
            </Box>
          )}

          {/* Main Heading with Typing Effect */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem", lg: "4.5rem" },
              fontWeight: "bold",
              mb: 3,
              lineHeight: 1.1,
              color: "#26325b",
              minHeight: { xs: "120px", md: "auto" },
            }}
          >
            Creating
            <Box
              component="span"
              sx={{
                display: "block",
                background:
                  "linear-gradient(135deg, #679f9d, #26325b, #f98787)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "fadeIn 1s ease-in",
              }}
              key={currentText}
            >
              {rotatingTexts?.[currentText] || "Creative Solutions"}
            </Box>
            That Inspires
          </Typography>

          <Typography
            variant="h6"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              mb: 6,
              color: "#26325b",
              fontSize: "1.25rem",
              fontWeight: 400,
              opacity: 0.8,
            }}
          >
            Video editor & motion designer crafting impactful digital
            experiences that captivate audiences and drive results.
          </Typography>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
              mb: 8,
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayCircle size={20} />}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              sx={{
                borderRadius: "50px",
                px: 5,
                py: 2,
                fontSize: "1.1rem",
                background: "linear-gradient(135deg, #679f9d, #26325b)",
                boxShadow: "0 4px 15px rgba(103, 159, 157, 0.3)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(103, 159, 157, 0.4)",
                },
                transition: "all 0.3s ease",
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Download size={20} />}
              onClick={handleDownloadCV}
              sx={{
                borderRadius: "50px",
                px: 5,
                py: 2,
                fontSize: "1.1rem",
                borderColor: "#679f9d",
                color: "#679f9d",
                borderWidth: 2,
                "&:hover": {
                  transform: "translateY(-2px)",
                  borderColor: "#679f9d",
                  backgroundColor: "rgba(103, 159, 157, 0.1)",
                  borderWidth: 2,
                },
                transition: "all 0.3s ease",
              }}
            >
              Download CV
            </Button>
          </Box>
        </Box>

        {/* Stats Grid */}
        <Grid container spacing={3} sx={{ mt: 8 }}>
          {formattedStats.map((stat) => (
            <Grid key={stat.key} size={{ xs: 6, md: 3 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  bgcolor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(103, 159, 157, 0.2)",
                  transition: "all 0.3s ease",
                  textAlign: "center",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                    boxShadow: "0 15px 30px rgba(103, 159, 157, 0.15)",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    background: "linear-gradient(135deg, #679f9d, #26325b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    mb: 1,
                  }}
                >
                  {formatNumber(animatedStats[stat.key] || stat.value)}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "#26325b",
                    mb: 0.5,
                  }}
                >
                  {stat.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#679f9d",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {stat.suffix}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

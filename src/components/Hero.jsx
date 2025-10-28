import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { PlayCircle, Download } from "lucide-react";

export const Hero = () => {
  const [currentText, setCurrentText] = useState(0);

  const rotatingTexts = [
    "Visual Magic",
    "Engaging Content",
    "Creative Solutions",
    "Digital Experiences",
  ];

  const stats = [
    { label: "Projects", value: "250+", suffix: "Completed" },
    { label: "Clients", value: "100+", suffix: "Worldwide" },
    { label: "Views", value: "5M+", suffix: "Total" },
    { label: "Awards", value: "15+", suffix: "Won" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    // This would typically download a PDF
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Update with actual path
    link.download = "Vikram_Prajapat_Resume.pdf";
    link.click();
  };

  return (
    <Box
      component="section"
      id="home"
      sx={{ pt: 15, pb: 10, position: "relative" }}
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
              {rotatingTexts[currentText]}
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
          {stats.map((stat, i) => (
            <Grid item xs={6} md={3} key={i}>
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
                onClick={() => {
                  // Add click functionality for stats
                  console.log(`Clicked on ${stat.label}`);
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
                  {stat.value}
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

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
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
            transform: translateY(10px);
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

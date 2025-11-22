import React from "react";
import { Box, Container, Typography, Grid, Rating } from "@mui/material";

const testimonials = [
  {
    name: "Aditya Sharma",
    text: "The editing quality is absolutely top-notch. Professional standards with quick turnaround time. This is the kind of talent you want to work with consistently.",
    rating: 5,
  },
  {
    name: "Priya Desai",
    text: "We had a simple concept in mind, but the execution was extraordinary. VFX and animations were first-class. Completely exceeded our expectations!",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    text: "My subscriber count jumped significantly after implementing this editing style. The quality speaks for itself. The turnaround time is incredibly impressive.",
    rating: 5,
  },
  {
    name: "Neha Kapoor",
    text: "Delivered corporate videos with commercial-grade quality. Very professional throughout the process. Every rupee spent was absolutely worth it. Highly satisfied!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    text: "Product videos turned out incredibly effective. Sales practically doubled after we started using this quality of content. Creative and technically brilliant work.",
    rating: 5,
  },
  {
    name: "Shreya Nair",
    text: "Wedding event coverage and highlights editing were absolutely perfect. The final video had everyone emotional. The attention to detail is remarkable. Thank you!",
    rating: 5,
  },
];

export const Testimonials = ({ isDark }) => {
  return (
    <Box
      component="section"
      id="testimonials"
      sx={{
        py: { xs: 6, md: 8 },
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "2rem", md: "2.75rem" },
              background: "linear-gradient(135deg, #1e40af, #3b82f6, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Client Testimonials 💬
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "grey.600",
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.25rem" },
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            Trusted by creators, brands, and businesses across India
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {testimonials.map((testimonial, i) => (
            <Grid key={i} size={{ xs: 12, md: 6, lg: 4 }}>
              <Box
                sx={{
                  p: 3.5,
                  borderRadius: 3,
                  bgcolor: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(59, 130, 246, 0.1)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                    border: "1px solid rgba(59, 130, 246, 0.2)",
                    boxShadow: "0 12px 28px rgba(59, 130, 246, 0.12)",
                  },
                }}
              >
                <Rating
                  value={testimonial.rating}
                  readOnly
                  sx={{
                    mb: 2.5,
                    "& .MuiRating-icon": {
                      color: "#fbbf24",
                    },
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontStyle: "italic",
                    color: "grey.700",
                    lineHeight: 1.7,
                    flex: 1,
                    fontSize: "0.95rem",
                  }}
                >
                  "{testimonial.text}"
                </Typography>
                <Box
                  sx={{ borderTop: "1px solid rgba(59, 130, 246, 0.1)", pt: 2 }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 700,
                      color: "#1e293b",
                      fontSize: "0.95rem",
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

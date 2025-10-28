import React from "react";
import { Box, Container, Typography, Grid, Rating } from "@mui/material";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    text: "Vikram transformed my content! His editing style is unmatched.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    role: "Podcast Host",
    text: "Professional, creative, and always delivers on time. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Marketing Director",
    text: "The animations brought our brand to life. Absolutely stunning work!",
    rating: 5,
  },
];

export const Testimonials = ({ isDark }) => {
  return (
    <Box component="section" id="testimonials" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 6,
            fontWeight: "bold",
          }}
        >
          Client Love 💝
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, i) => (
            <Grid key={i} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 6,
                  bgcolor: isDark
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: isDark
                    ? "1px solid rgba(139, 198, 196, 0.2)"
                    : "1px solid rgba(59, 130, 246, 0.2)",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    bgcolor: isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(255, 255, 255, 0.9)",
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)",
                  },
                }}
              >
                <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontStyle: "italic",
                    color: isDark ? "grey.300" : "grey.700",
                  }}
                >
                  "{testimonial.text}"
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? "grey.400" : "grey.600",
                  }}
                >
                  {testimonial.role}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

import React from "react";
import { Box, Container, Typography } from "@mui/material";

export const Footer = ({ isDark }) => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        borderTop: 1,
        borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "grey.200",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          align="center"
          sx={{
            color: isDark ? "grey.400" : "grey.600",
          }}
        >
          © 2024 Vikram Prajapat. Crafted with passion & creativity.
        </Typography>
      </Container>
    </Box>
  );
};

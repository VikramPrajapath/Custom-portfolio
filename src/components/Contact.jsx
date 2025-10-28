import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { MessageCircle } from "lucide-react";

export const Contact = ({ isDark }) => {
  return (
    <Box component="section" sx={{ py: 10 }}>
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            p: 6,
            borderRadius: 6,
            background: isDark
              ? "linear-gradient(135deg, rgba(167, 139, 250, 0.1), rgba(236, 72, 153, 0.1))"
              : "linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(219, 39, 119, 0.05))",
            backdropFilter: "blur(10px)",
          }}
        >
          <MessageCircle
            size={48}
            style={{
              color: isDark ? "#a78bfa" : "#7c3aed",
              marginBottom: "1.5rem",
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Let's Create Something Amazing
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              color: isDark ? "grey.300" : "grey.600",
            }}
          >
            Ready to bring your vision to life? Let's talk about your next
            project.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: "50px",
              px: 5,
              py: 2,
              background: isDark
                ? "linear-gradient(to right, #2563eb, #1e40af)"
                : "linear-gradient(to right, #7c3aed, #db2777)",
              "&:hover": {
                transform: "scale(1.1)",
              },
              transition: "all 0.3s",
            }}
          >
            Start Your Project
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

export const LoadingScreen = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          animation: "fadeIn 1s ease-in",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            background: "linear-gradient(135deg, #3b82f6, #6366f1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Vikram Prajapat
        </Typography>
        <CircularProgress
          size={40}
          sx={{
            color: "#3b82f6",
            mb: 2,
          }}
        />
        <Typography
          variant="body1"
          sx={{
            color: "#0f172a",
            opacity: 0.8,
          }}
        >
          Loading Creative Portfolio...
        </Typography>
      </Box>

      <style jsx>{`
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

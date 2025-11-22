import React from "react";
import { Box, Container, Typography, Skeleton, Stack } from "@mui/material";

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
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        zIndex: 9999,
        overflow: "auto",
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        {/* Header Skeleton */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Skeleton
            variant="text"
            sx={{
              fontSize: "3rem",
              mx: "auto",
              maxWidth: "400px",
              mb: 2,
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              fontSize: "1.5rem",
              mx: "auto",
              maxWidth: "300px",
            }}
          />
        </Box>

        {/* Stats Skeleton */}
        <Stack
          direction="row"
          spacing={3}
          sx={{
            justifyContent: "center",
            mb: 6,
            flexWrap: "wrap",
          }}
        >
          {[1, 2, 3].map((item) => (
            <Skeleton
              key={item}
              variant="rectangular"
              width={200}
              height={120}
              sx={{ borderRadius: 3 }}
            />
          ))}
        </Stack>

        {/* Services Section Skeleton */}
        <Box sx={{ mt: 8 }}>
          <Skeleton
            variant="text"
            sx={{
              fontSize: "2.5rem",
              mx: "auto",
              maxWidth: "400px",
              mb: 4,
            }}
          />
          <Stack spacing={3}>
            {[1, 2, 3, 4].map((item) => (
              <Skeleton
                key={item}
                variant="rectangular"
                height={150}
                sx={{ borderRadius: 4 }}
              />
            ))}
          </Stack>
        </Box>

        {/* Projects Section Skeleton */}
        <Box sx={{ mt: 8 }}>
          <Skeleton
            variant="text"
            sx={{
              fontSize: "2.5rem",
              mx: "auto",
              maxWidth: "400px",
              mb: 4,
            }}
          />
          <Stack
            direction="row"
            spacing={3}
            sx={{
              overflowX: "auto",
              pb: 2,
            }}
          >
            {[1, 2, 3, 4].map((item) => (
              <Skeleton
                key={item}
                variant="rectangular"
                width={300}
                height={250}
                sx={{
                  borderRadius: 4,
                  flexShrink: 0,
                }}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

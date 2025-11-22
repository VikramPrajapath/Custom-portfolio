import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const workExperience = [
  {
    id: "technicolor",
    title: "VFX Compositor",
    company: "Technicolor Creative Studios",
    description:
      "Senior VFX compositor working on major film and streaming projects",
    logo: "🎬",
    type: "studio",
  },
  {
    id: "rotomaker",
    title: "VFX Compositor",
    company: "Rotomaker Studios",
    description: "VFX compositing for commercial and film projects",
    logo: "🎥",
    type: "studio",
  },
  {
    id: "avgci",
    title: "VFX Faculty",
    company: "AVGCI Multimedia",
    description: "Teaching VFX and compositing techniques to aspiring artists",
    logo: "🎓",
    type: "education",
  },
  {
    id: "maac",
    title: "VFX Faculty",
    company: "MAAC Multimedia",
    description: "Instructing students in advanced VFX and motion graphics",
    logo: "💻",
    type: "education",
  },
  {
    id: "firstminds",
    title: "VFX Faculty",
    company: "Firstminds Academy",
    description: "Foundational VFX and editing instruction",
    logo: "📚",
    type: "education",
  },
  {
    id: "freelance",
    title: "Freelance Video Editor & Graphic Designer",
    company: "Self Employed",
    description:
      "Providing professional video editing and design services to clients worldwide",
    logo: "🚀",
    type: "freelance",
  },
];

export const Services = () => {
  return (
    <Box component="section" id="services" sx={{ py: { xs: 4, md: 3 } }}>
      {" "}
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Professional Journey
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "grey.600",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            From studio professional to educator and freelance expert - a
            comprehensive journey in visual effects and video editing
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {workExperience.map((experience) => (
            <Grid key={experience.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <Card
                sx={{
                  borderRadius: 4,
                  bgcolor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  transition: "all 0.4s ease",
                  height: "100%",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Typography
                    variant="h1"
                    sx={{
                      mb: 3,
                      fontSize: "3rem",
                    }}
                  >
                    {experience.logo}
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      color: "#26325b",
                    }}
                  >
                    {experience.title}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "#3b82f6",
                      fontWeight: "600",
                      mb: 2,
                    }}
                  >
                    {experience.company}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "grey.600",
                      lineHeight: 1.6,
                    }}
                  >
                    {experience.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

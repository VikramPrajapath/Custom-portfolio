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
    period: "2022 - Present",
    description:
      "Senior VFX compositor working on major film and streaming projects",
    logo: "🎬",
    type: "studio",
  },
  {
    id: "rotomaker",
    title: "VFX Compositor",
    company: "Rotomaker Studios",
    period: "2021 - 2022",
    description: "VFX compositing for commercial and film projects",
    logo: "🎥",
    type: "studio",
  },
  {
    id: "avgci",
    title: "VFX Faculty",
    company: "AVGCI Multimedia",
    period: "2020 - 2021",
    description: "Teaching VFX and compositing techniques to aspiring artists",
    logo: "🎓",
    type: "education",
  },
  {
    id: "maac",
    title: "VFX Faculty",
    company: "MAAC Multimedia",
    period: "2019 - 2020",
    description: "Instructing students in advanced VFX and motion graphics",
    logo: "💻",
    type: "education",
  },
  {
    id: "firstminds",
    title: "VFX Faculty",
    company: "Firstminds Academy",
    period: "2018 - 2019",
    description: "Foundational VFX and editing instruction",
    logo: "📚",
    type: "education",
  },
  {
    id: "freelance",
    title: "Freelance Video Editor & Graphic Designer",
    company: "Self Employed",
    period: "2017 - Present",
    description:
      "Providing professional video editing and design services to clients worldwide",
    logo: "🚀",
    type: "freelance",
  },
];

export const Services = () => {
  return (
    <Box component="section" id="services" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
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

                  <Box
                    sx={{
                      display: "inline-block",
                      px: 2,
                      py: 0.5,
                      borderRadius: "20px",
                      bgcolor:
                        experience.type === "studio"
                          ? "rgba(59, 130, 246, 0.1)"
                          : experience.type === "education"
                          ? "rgba(34, 197, 94, 0.1)"
                          : "rgba(249, 115, 22, 0.1)",
                      color:
                        experience.type === "studio"
                          ? "#3b82f6"
                          : experience.type === "education"
                          ? "#16a34a"
                          : "#f97316",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      mb: 2,
                    }}
                  >
                    {experience.period}
                  </Box>

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

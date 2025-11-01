import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <Box component="section" id="contact" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                }}
              >
                Let's Create Something{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #679f9d, #26325b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Amazing
                </Box>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  color: "grey.600",
                  lineHeight: 1.6,
                }}
              >
                Ready to bring your vision to life? Let's collaborate and create
                something extraordinary that resonates with your audience.
              </Typography>

              {/* Contact Info */}
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}
              >
                {[
                  { icon: Phone, text: "+91 9591915816" },
                  { icon: Mail, text: "mr.narendra416@gmail.com" },
                  { icon: MapPin, text: "Based in India" },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center", gap: 2 }}
                  >
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: "50%",
                        bgcolor: "rgba(103, 159, 157, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <item.icon size={20} style={{ color: "#679f9d" }} />
                    </Box>
                    <Typography variant="body1" sx={{ color: "grey.700" }}>
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                p: 6,
                borderRadius: 6,
                background:
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(99, 102, 241, 0.05))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background Icon */}
              <MessageCircle
                size={120}
                style={{
                  color: "rgba(103, 159, 157, 0.1)",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />

              <Box position="relative" zIndex={1}>
                <MessageCircle
                  size={48}
                  style={{
                    color: "#679f9d",
                    marginBottom: "1.5rem",
                  }}
                />

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                  }}
                >
                  Start Your Project
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: "grey.600",
                  }}
                >
                  Let's discuss your ideas and create something amazing together
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: "50px",
                    px: 5,
                    py: 2,
                    fontSize: "1.1rem",
                    background: "linear-gradient(135deg, #679f9d, #f98787)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Get In Touch
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

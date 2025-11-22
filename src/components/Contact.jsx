// In Contact.jsx - Replace with enhanced version
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSnackbar({
        open: true,
        message: "Please fill in all fields",
        severity: "error",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSnackbar({
        open: true,
        message: "Please enter a valid email address",
        severity: "error",
      });
      return;
    }

    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);

      setSnackbar({
        open: true,
        message: "Message sent successfully! I'll get back to you soon.",
        severity: "success",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to send message. Please try again.",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ animation: "fadeInLeft 0.8s ease-out" }}>
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
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
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
                sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 4 }}
              >
                {[
                  {
                    icon: Phone,
                    text: "+91 9591915816",
                    href: "tel:+919591915816",
                  },
                  {
                    icon: Mail,
                    text: "mr.narendra416@gmail.com",
                    href: "mailto:mr.narendra416@gmail.com",
                  },
                  { icon: MapPin, text: "Based in India" },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2,
                      borderRadius: 3,
                      background: "rgba(255, 255, 255, 0.7)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(103, 159, 157, 0.2)",
                      transition: "all 0.3s ease",
                      cursor: item.href ? "pointer" : "default",
                      "&:hover": item.href
                        ? {
                            transform: "translateX(8px)",
                            background: "rgba(255, 255, 255, 0.9)",
                          }
                        : {},
                    }}
                    onClick={() => item.href && window.open(item.href, "_self")}
                  >
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: "50%",
                        bgcolor: "rgba(103, 159, 157, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <item.icon size={24} style={{ color: "#667eea" }} />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{ color: "grey.700", fontWeight: 500 }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: 6,
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                position: "relative",
                overflow: "hidden",
                animation: "fadeInRight 0.8s ease-out",
              }}
            >
              {/* Background Icon */}
              <MessageCircle
                size={120}
                style={{
                  color: "rgba(102, 126, 234, 0.1)",
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
                    color: "#667eea",
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

                {/* Contact Form */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <TextField
                    name="name"
                    label="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                          borderColor: "#667eea",
                        },
                      },
                    }}
                  />

                  <TextField
                    name="email"
                    type="email"
                    label="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                          borderColor: "#667eea",
                        },
                      },
                    }}
                  />

                  <TextField
                    name="message"
                    label="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    multiline
                    rows={4}
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                          borderColor: "#667eea",
                        },
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<Send size={20} />}
                    sx={{
                      borderRadius: "12px",
                      px: 5,
                      py: 2,
                      fontSize: "1.1rem",
                      background: "linear-gradient(135deg, #667eea, #764ba2)",
                      boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 35px rgba(102, 126, 234, 0.4)",
                        background: "linear-gradient(135deg, #5a6fd8, #6a42a0)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{
            borderRadius: 3,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

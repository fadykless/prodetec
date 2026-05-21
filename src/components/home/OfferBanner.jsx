'use client';
import { Box, Container, Grid, Typography, alpha, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

const OfferBanner = () => {
  const theme = useTheme();
  const images = ['abris-bus.jpg', 'car-revetment.jpg', 'gravure.jpg', 'roll-up.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change toutes les 4 secondes

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container sx={{ py: 5 }}>
      <Box
        sx={{
          position: "relative",
          height: 300,
          overflow: "hidden",
          borderRadius: 4
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              inset: 0,
              transition: "opacity 1s ease-in-out",
              opacity: index === currentIndex ? 1 : 0,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `linear-gradient(
                to bottom,
                ${alpha('#000', 0.1)},
                ${alpha('#000', 0.8)}
              ), url(${"/images/elements/" + image})`
            }}
          />
        ))}

        {/* Contenu par-dessus */}
        <Grid
          container
          sx={{
            position: "relative",
            height: "100%",
            px: { md: 10, xs: 6 },
            alignItems: "center",
            color: "#fff"
          }}
        >
          <Grid size={12}>
            <Typography variant="h4" fontWeight={700}>
              Découvrez nos offres d'impression
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Qualité premium – Livraison rapide – Prix compétitifs
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default OfferBanner;
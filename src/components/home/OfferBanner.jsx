'use client';
import { Box, Button, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const OfferBanner = () => {
  const theme = useTheme();
  return (
    <Container sx={{ py: 5 }}>
      <Grid
        sx={{ backgroundColor: theme.palette.primary.main, p: 5 }}
        container
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item size={12}>
          <Box>
            <Typography variant="h3" sx={{ color: 'white' }}>
              Réjoignez-nous!
            </Typography>
            <Typography sx={{ color: 'white', mt: 2 }}>
              Devenez un acteur clé dans la vente de véhicules grâce à MOTUKA. Profitez d’une plateforme innovante pour connecter acheteurs et vendeurs, gagnez des commissions attractives et développez votre réseau dans le secteur automobile. Une opportunité flexible et enrichissante vous attend.
            </Typography>
            <Typography sx={{ my: 3 }}>
              <Button
                variant="contained"
                disableElevation
                component="a"
                href="https://chat.whatsapp.com/Cj5699JPU2yIJ740zqZgjo"
                sx={{
                  borderRadius: 6,
                  px: 4,
                }}
              >
                Nous réjoindre
              </Button>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OfferBanner;

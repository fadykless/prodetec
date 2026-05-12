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
              Offres publicitaires ici.
            </Typography>
            <Typography sx={{ color: 'white', mt: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, ad? Hic at quas voluptate dignissimos unde corporis aspernatur praesentium ullam eius tempore nisi consequuntur aperiam atque inventore nam, non alias.
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
                  border: '1px solid white'
                }}
              >
                Souscrire
              </Button>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OfferBanner;

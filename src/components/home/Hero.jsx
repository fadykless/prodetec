'use client';

import { Box, Container, Typography, Button, Grid, alpha } from '@mui/material';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <Box
            sx={{
                background: 'linear-gradient(90deg,#ff0f7b,#f89b29)',
                color: '#fff',
                py: 20,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `linear-gradient(
                  to bottom,
                  ${alpha('#000', 0.1)},
                  ${alpha('#000', 0.8)}
                ), url(${"/images/home/banner-intro.jpg"})`
            }}
        >
            <Container>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="h2" gutterBottom>
                                Votre solution d'impression professionnelle en RDC.
                            </Typography>

                            <Button disableElevation component='a' href='/devis' sx={{ borderRadius: 6, textTransform: 'capitalize', px: 4, fontWeight: 'bold' }} variant="contained" color="secondary">
                                Demander un devis
                            </Button>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
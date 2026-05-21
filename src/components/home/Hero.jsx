'use client';

import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    alpha
} from '@mui/material';

import { motion } from 'framer-motion';
import Slider from 'react-slick';

const images = [
    '/images/bannieres/1.jpg',
    '/images/bannieres/2.jpg',
    '/images/bannieres/3.jpg',
];

export default function HeroSection() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        arrows: false,
        pauseOnHover: false,
    };

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>

            {/* Background Slider */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                }}
            >
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <Box
                            key={index}
                            sx={{
                                height: '100vh',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage: `
                  linear-gradient(
                    to bottom,
                    ${alpha('#000', 0.3)},
                    ${alpha('#000', 0.7)}
                  ),
                  url(${image})
                `,
                            }}
                        />
                    ))}
                </Slider>
            </Box>

            {/* Content */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    color: '#fff',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Container>
                    <Grid container spacing={2}>
                        <Grid
                            size={{ xs: 12 }}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Typography
                                    variant="h2"
                                    gutterBottom
                                    sx={{
                                        fontWeight: 800,
                                        maxWidth: 900,
                                        textAlign: { xs: "center", md: "left" },

                                        fontSize: {
                                            xs: "1.8rem",   // mobile
                                            sm: "2.4rem",
                                            md: "3.2rem",
                                            lg: "3.8rem",
                                        },

                                        lineHeight: 1.2,
                                    }}
                                >
                                    Votre solution d'impression professionnelle en RDC.
                                </Typography>

                                <Box mt={4}>
                                    <Button
                                        disableElevation
                                        component='a'
                                        href='/devis'
                                        sx={{
                                            borderRadius: 6,
                                            textTransform: 'capitalize',
                                            px: 4,
                                            m: 1,
                                            fontWeight: 'bold'
                                        }}
                                        variant="contained"
                                        color="secondary"
                                    >
                                        Demander un devis
                                    </Button>

                                    <Button
                                        disableElevation
                                        component='a'
                                        href='/contact'
                                        sx={{
                                            borderRadius: 6,
                                            ml: 2,
                                            m: 1,
                                            textTransform: 'capitalize',
                                            px: 4,
                                            fontWeight: 'bold',
                                            borderColor: '#fff',
                                            color: '#fff',
                                            '&:hover': {
                                                borderColor: '#fff',
                                            }
                                        }}
                                        variant="outlined"
                                    >
                                        Nous contacter
                                    </Button>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
'use client';

import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    alpha
} from '@mui/material';

import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';

const slides = [
    {
        image: '/images/bannieres/1.jpg',
        title: "Votre solution d'impression professionnelle en RDC.",
        subtitle:
            "Des impressions de haute qualité pour vos marques, entreprises et événements.",
    },

    {
        image: '/images/bannieres/2.jpg',
        title: "Pas de barrière pour imprimer sur tout support",
        subtitle:
            "Flyers, affiches, bâches et branding pour booster votre visibilité.",
    },

    {
        image: '/images/bannieres/3.jpg',
        title: "Broderie professionelle & Sérigraphie",
        subtitle:
            "Nous accompagnons les entreprises avec des solutions printing innovantes.",
    },
    {
        image: '/images/bannieres/4.jpg',
        title: "Impression numérique & digitale",
        subtitle:
            "Nous accompagnons les entreprises avec des solutions printing innovantes.",
    },
];

export default function HeroSection() {

    const [currentSlide, setCurrentSlide] = useState(0);

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

        beforeChange: (_, next) => {
            setCurrentSlide(next);
        },
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
                    {slides.map((slide, index) => (
                        <Box
                            key={index}
                            sx={{
                                height: '100vh',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage: `
                  linear-gradient(
                    to bottom,
                    ${alpha('#000', 0.45)},
                    ${alpha('#000', 0.75)}
                  ),
                  url(${slide.image})
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

                            <AnimatePresence mode="wait">

                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.7 }}
                                >

                                    <Typography
                                        variant="h2"
                                        gutterBottom
                                        sx={{
                                            fontWeight: 800,
                                            maxWidth: 900,
                                            textAlign: "center",

                                            fontSize: {
                                                xs: "2rem",
                                                sm: "2.5rem",
                                                md: "3.5rem",
                                                lg: "4.2rem",
                                            },

                                            lineHeight: 1.15,
                                        }}
                                    >
                                        {slides[currentSlide].title}
                                    </Typography>
                                    {/* 
                                    <Typography
                                        sx={{
                                            maxWidth: 700,
                                            mx: 'auto',
                                            opacity: 0.85,
                                            mt: 2,

                                            fontSize: {
                                                xs: '1rem',
                                                md: '1.2rem'
                                            }
                                        }}
                                    >
                                        {slides[currentSlide].subtitle}
                                    </Typography> */}

                                    <Box mt={5}>

                                        <Button
                                            disableElevation
                                            component='a'
                                            href='/devis'
                                            sx={{
                                                borderRadius: 6,
                                                textTransform: 'capitalize',
                                                px: 4,
                                                py: 1.4,
                                                m: 1,
                                                fontWeight: 'bold',
                                                fontSize: 16,
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
                                                py: 1.4,
                                                fontWeight: 'bold',
                                                borderColor: '#fff',
                                                color: '#fff',

                                                '&:hover': {
                                                    borderColor: '#fff',
                                                    backgroundColor: alpha('#fff', 0.08),
                                                }
                                            }}
                                            variant="outlined"
                                        >
                                            Nous contacter
                                        </Button>

                                    </Box>

                                </motion.div>

                            </AnimatePresence>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
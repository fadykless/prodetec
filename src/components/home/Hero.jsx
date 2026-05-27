'use client';

import {
    Box,
    Typography,
    Button,
    alpha,
} from '@mui/material';

import Slider from 'react-slick';

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
        <Box
            sx={{
                width: '100%',
                overflow: 'hidden',
                backgroundColor: '#000',
            }}
        >

            <Slider {...settings}>

                {slides.map((slide, index) => (

                    <Box
                        key={index}
                        sx={{
                            position: 'relative',
                            width: '100%',
                        }}
                    >

                        {/* Image */}
                        <Box
                            component="img"
                            src={slide.image}
                            alt={slide.title}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                            }}
                        />

                        {/* Overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,

                                background: `
                                    linear-gradient(
                                        to bottom,
                                        ${alpha('#000', 0.35)},
                                        ${alpha('#000', 0.7)}
                                    )
                                `,
                            }}
                        />

                        {/* Content */}
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                zIndex: 2,

                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',

                                px: {
                                    xs: 2,
                                    md: 8,
                                },

                                textAlign: 'center',
                                color: '#fff',
                            }}
                        >

                            <Box
                                sx={{
                                    maxWidth: 900,
                                }}
                            >

                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: 800,

                                        fontSize: {
                                            xs: '1.8rem',
                                            sm: '2.5rem',
                                            md: '3.5rem',
                                            lg: '4.2rem',
                                        },

                                        lineHeight: 1.15,
                                    }}
                                >
                                    {slide.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        mt: 2,
                                        opacity: 0.9,

                                        fontSize: {
                                            xs: '0.95rem',
                                            md: '1.2rem',
                                        },
                                    }}
                                >
                                    {slide.subtitle}
                                </Typography>

                                <Box mt={4}>

                                    <Button
                                        disableElevation
                                        component="a"
                                        href="/devis"
                                        variant="contained"
                                        color="secondary"
                                        sx={{
                                            borderRadius: 6,
                                            textTransform: 'capitalize',
                                            px: 4,
                                            py: 1.3,
                                            fontWeight: 'bold',
                                            m: 1,
                                        }}
                                    >
                                        Demander un devis
                                    </Button>

                                    <Button
                                        disableElevation
                                        component="a"
                                        href="/contact"
                                        variant="outlined"
                                        sx={{
                                            borderRadius: 6,
                                            textTransform: 'capitalize',
                                            px: 4,
                                            py: 1.3,
                                            fontWeight: 'bold',
                                            borderColor: '#fff',
                                            color: '#fff',
                                            m: 1,

                                            '&:hover': {
                                                borderColor: '#fff',
                                                backgroundColor: alpha('#fff', 0.08),
                                            },
                                        }}
                                    >
                                        Nous contacter
                                    </Button>

                                </Box>

                            </Box>

                        </Box>

                    </Box>

                ))}

            </Slider>

        </Box>
    );
}
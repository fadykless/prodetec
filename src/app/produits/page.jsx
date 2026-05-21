'use client';

import {
    Box,
    Button,
    Chip,
    Container,
    Grid,
    Paper,
    Typography,
    alpha
} from '@mui/material';

import PrintIcon from '@mui/icons-material/Print';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PhotoIcon from '@mui/icons-material/Photo';
import StyleIcon from '@mui/icons-material/Style';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import { motion } from 'framer-motion';
import PrintingStatsSection from '@/components/home/Stats';
import PartnersSection from '@/components/home/Partners';

const products = [
    {
        title: 'Cartes de visite',
        description:
            "Des cartes professionnelles premium pour valoriser votre image et laisser une impression durable.",
        image: '/images/elements/cartes.jpg',
        icon: <PrintIcon />,
        category: 'Entreprise',
        color: '#ff0f7b',
    },
    {
        title: 'Flyers & affiches',
        description:
            "Impressions publicitaires de haute qualité pour vos campagnes marketing et événements.",
        image: '/images/elements/flyers.jpg',
        icon: <LocalOfferIcon />,
        category: 'Marketing',
        color: '#f89b29',
    },
    {
        title: 'Cadres photo',
        description:
            "Impressions photo HD et cadres décoratifs élégants pour maisons, bureaux et cadeaux.",
        image: '/images/elements/cadre-photo.jpg',
        icon: <PhotoIcon />,
        category: 'Décoration',
        color: '#00c6ff',
    },
    {
        title: 'Kakemonos',
        description:
            "Stickers personnalisés résistants pour branding, packaging et vitrines commerciales.",
        image: '/images/elements/grand-format.jpg',
        icon: <StyleIcon />,
        category: 'Branding',
        color: '#7b61ff',
    },
    {
        title: 'Calendriers',
        description:
            "Calendriers muraux et de bureau personnalisés pour entreprises et campagnes promotionnelles.",
        image: '/images/elements/calendar2.jpg',
        icon: <CalendarMonthIcon />,
        category: 'Corporate',
        color: '#00b894',
    },
    {
        title: 'Agendas personnalisés',
        description:
            "Des agendas élégants et pratiques adaptés à votre identité visuelle et vos besoins professionnels.",
        image: '/images/elements/agenda.jpg',
        icon: <MenuBookIcon />,
        category: 'Papeterie',
        color: '#e17055',
    },
];

export default function ProductsPage() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background:
                    'linear-gradient(135deg,#0f172a 0%, #111827 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background effects */}
            <Box
                sx={{
                    position: 'absolute',
                    width: 350,
                    height: 350,
                    borderRadius: '50%',
                    background: alpha('#ff0f7b', 0.12),
                    filter: 'blur(120px)',
                    top: -100,
                    left: -100,
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: alpha('#00c6ff', 0.12),
                    filter: 'blur(120px)',
                    bottom: -100,
                    right: -100,
                }}
            />

            <Container sx={{ py: 12, position: 'relative', zIndex: 2 }}>
                {/* Header */}
                <Box textAlign="center" mb={8}>
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#fff',
                            fontWeight: 800,
                            mb: 2,
                        }}
                    >
                        Nos produits
                    </Typography>

                    <Typography
                        sx={{
                            color: alpha('#fff', 0.72),
                            maxWidth: 760,
                            mb: 5,
                            fontSize: 18,
                            lineHeight: 1.8,
                        }}
                    >
                        Découvrez une large gamme de produits d’impression
                        conçus pour renforcer votre image, promouvoir votre
                        activité et valoriser vos projets professionnels.
                    </Typography>
                </Box>

                {/* Products */}
                <Grid container spacing={4}>
                    {products.map((product, index) => (
                        <Grid
                            size={{ xs: 12, sm: 6, lg: 4 }}
                            key={index}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        borderRadius: 6,
                                        overflow: 'hidden',
                                        background: alpha(
                                            '#fff',
                                            0.05
                                        ),
                                        backdropFilter: 'blur(14px)',
                                        border: `1px solid ${alpha(
                                            '#fff',
                                            0.08
                                        )}`,
                                        transition: 'all .4s ease',
                                        height: '100%',

                                        '&:hover': {
                                            transform:
                                                'translateY(-10px)',
                                            boxShadow:
                                                '0 20px 45px rgba(0,0,0,0.3)',
                                        },

                                        '&:hover .product-image': {
                                            transform: 'scale(1.08)',
                                        },

                                        '&:hover .product-icon': {
                                            transform:
                                                'rotate(-8deg) scale(1.1)',
                                        },
                                    }}
                                >
                                    {/* Image */}
                                    <Box
                                        sx={{
                                            height: 260,
                                            overflow: 'hidden',
                                            position: 'relative',
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={product.image}
                                            alt={product.title}
                                            className="product-image"
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition:
                                                    'transform .6s ease',
                                            }}
                                        />

                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                inset: 0,
                                                background:
                                                    'linear-gradient(to top, rgba(0,0,0,0.55), transparent)',
                                            }}
                                        />

                                        <Chip
                                            label={product.category}
                                            sx={{
                                                position: 'absolute',
                                                top: 20,
                                                left: 20,
                                                bgcolor: alpha(
                                                    '#fff',
                                                    0.15
                                                ),
                                                backdropFilter:
                                                    'blur(12px)',
                                                color: '#fff',
                                                fontWeight: 600,
                                            }}
                                        />
                                    </Box>

                                    {/* Content */}
                                    <Box sx={{ p: 4 }}>
                                        {/* Icon */}
                                        <Box
                                            className="product-icon"
                                            sx={{
                                                width: 75,
                                                height: 75,
                                                borderRadius: '22px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: 3,
                                                color: '#fff',
                                                background: `linear-gradient(135deg, ${product.color}, ${alpha(
                                                    product.color,
                                                    0.6
                                                )})`,
                                                boxShadow: `0 10px 30px ${alpha(
                                                    product.color,
                                                    0.35
                                                )}`,
                                                transition:
                                                    'all .4s ease',
                                            }}
                                        >
                                            {product.icon}
                                        </Box>

                                        {/* Title */}
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                color: '#fff',
                                                fontWeight: 700,
                                                mb: 2,
                                            }}
                                        >
                                            {product.title}
                                        </Typography>

                                        {/* Description */}
                                        <Typography
                                            sx={{
                                                color: alpha(
                                                    '#fff',
                                                    0.7
                                                ),
                                                lineHeight: 1.8,
                                                mb: 4,
                                            }}
                                        >
                                            {product.description}
                                        </Typography>

                                        {/* Button */}
                                        <Button
                                            variant="contained"
                                            component='a'
                                            href='/contact'
                                            sx={{
                                                borderRadius: 4,
                                                px: 3,
                                                py: 1.3,
                                                fontWeight: 700,
                                                textTransform:
                                                    'capitalize',
                                                background: `linear-gradient(90deg, ${product.color}, ${alpha(
                                                    product.color,
                                                    0.7
                                                )})`,
                                                boxShadow: `0 10px 25px ${alpha(
                                                    product.color,
                                                    0.3
                                                )}`,

                                                '&:hover': {
                                                    opacity: 0.9,
                                                },
                                            }}
                                        >
                                            Demander un devis
                                        </Button>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <PrintingStatsSection />
            <PartnersSection />
        </Box>
    );
}
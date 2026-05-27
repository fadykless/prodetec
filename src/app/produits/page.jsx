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
import FeaturedSection from '@/components/home/Featured';

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
                <FeaturedSection />

            </Container>

            <PrintingStatsSection />
            <PartnersSection />
        </Box>
    );
}
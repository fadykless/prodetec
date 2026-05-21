'use client';

import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    alpha,
    Button
} from '@mui/material';

import CheckroomIcon from '@mui/icons-material/Checkroom';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PhotoIcon from '@mui/icons-material/Photo';
import MailIcon from '@mui/icons-material/Mail';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StyleIcon from '@mui/icons-material/Style';

import { motion } from 'framer-motion';
import PrintingStatsSection from '@/components/home/Stats';
import PartnersSection from '@/components/home/Partners';

const services = [
    {
        title: "Impression textile",
        description:
            "T-shirts, polos, hoodies et vêtements personnalisés pour entreprises, événements et marques.",
        icon: <CheckroomIcon fontSize="large" />,
        color: "#ff0f7b",
    },
    {
        title: "Supports publicitaires",
        description:
            "Flyers, affiches, brochures et supports marketing pour booster votre visibilité.",
        icon: <LocalOfferIcon fontSize="large" />,
        color: "#f89b29",
    },
    {
        title: "Impression photo & déco",
        description:
            "Cadres photo, posters et impressions haute définition pour décoration intérieure et cadeaux.",
        icon: <PhotoIcon fontSize="large" />,
        color: "#00c6ff",
    },
    {
        title: "Papeterie professionnelle",
        description:
            "Enveloppes, cartes de visite et documents personnalisés pour une image de marque cohérente.",
        icon: <MailIcon fontSize="large" />,
        color: "#7b61ff",
    },
    {
        title: "Agendas & calendriers",
        description:
            "Agendas et calendriers personnalisés pour entreprises et campagnes promotionnelles.",
        icon: <MenuBookIcon fontSize="large" />,
        color: "#00b894",
    },
    {
        title: "Calendriers & branding",
        description:
            "Solutions de branding imprimé pour renforcer la présence de votre marque toute l’année.",
        icon: <CalendarMonthIcon fontSize="large" />,
        color: "#e17055",
    },
    {
        title: "Stickers & autocollants",
        description:
            "Stickers résistants pour packaging, vitrines, véhicules et communication visuelle.",
        icon: <StyleIcon fontSize="large" />,
        color: "#6c5ce7",
    },
];

export default function ServicesPage() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg,#0f172a 0%, #111827 100%)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background glow */}
            <Box
                sx={{
                    position: "absolute",
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background: alpha("#ff0f7b", 0.12),
                    filter: "blur(120px)",
                    top: -120,
                    left: -120,
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    width: 350,
                    height: 350,
                    borderRadius: "50%",
                    background: alpha("#00c6ff", 0.12),
                    filter: "blur(120px)",
                    bottom: -120,
                    right: -120,
                }}
            />

            <Container sx={{ py: 12, position: "relative", zIndex: 2 }}>
                {/* Header */}
                <Box textAlign="center" mb={8}>
                    <Typography
                        variant="h2"
                        sx={{
                            color: "#fff",
                            fontWeight: 900,
                            mb: 2,
                        }}
                    >
                        Nos services
                    </Typography>

                    <Typography
                        sx={{
                            color: alpha("#fff", 0.7),
                            maxWidth: 800,
                            mb: 5,
                            fontSize: 18,
                            lineHeight: 1.8,
                        }}
                    >
                        Nous proposons des solutions complètes d’impression et de
                        communication visuelle pour accompagner votre marque du
                        design à la production finale.
                    </Typography>
                </Box>

                {/* Grid */}
                <Grid container spacing={4}>
                    {services.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
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
                                        p: 4,
                                        height: "100%",
                                        borderRadius: 6,
                                        position: "relative",
                                        overflow: "hidden",
                                        background: alpha("#fff", 0.05),
                                        backdropFilter: "blur(14px)",
                                        border: `1px solid ${alpha("#fff", 0.08)}`,
                                        transition: "all .4s ease",

                                        "&:hover": {
                                            transform: "translateY(-10px)",
                                            boxShadow:
                                                "0 20px 45px rgba(0,0,0,0.3)",
                                        },

                                        "&:hover .iconBox": {
                                            background: `linear-gradient(135deg, ${item.color}, ${alpha(
                                                item.color,
                                                0.6
                                            )})`,
                                            color: "#fff",
                                            transform: "rotate(-6deg) scale(1.1)",
                                        },

                                        "&::before": {
                                            content: '""',
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            height: 5,
                                            width: "100%",
                                            background: item.color,
                                        },
                                    }}
                                >
                                    {/* Icon */}
                                    <Box
                                        className="iconBox"
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: "24px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mb: 3,
                                            bgcolor: alpha("#fff", 0.08),
                                            color: item.color,
                                            transition: "all .4s ease",
                                        }}
                                    >
                                        {item.icon}
                                    </Box>

                                    {/* Title */}
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: "#fff",
                                            fontWeight: 800,
                                            mb: 2,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    {/* Description */}
                                    <Typography
                                        sx={{
                                            color: alpha("#fff", 0.7),
                                            lineHeight: 1.8,
                                            mb: 3,
                                        }}
                                    >
                                        {item.description}
                                    </Typography>

                                    {/* CTA */}
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderRadius: 4,
                                            textTransform: "capitalize",
                                            fontWeight: 700,
                                            borderColor: alpha("#fff", 0.3),
                                            color: "#fff",

                                            "&:hover": {
                                                borderColor: item.color,
                                                background: alpha(item.color, 0.1),
                                            },
                                        }}
                                    >
                                        Demander un devis
                                    </Button>
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
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
import { motion } from 'framer-motion';
import PrintingStatsSection from '@/components/home/Stats';
import PartnersSection from '@/components/home/Partners';

import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PrintIcon from "@mui/icons-material/Print";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CampaignIcon from "@mui/icons-material/Campaign";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";

const services = [
    {
        title: "Infographie",
        description:
            "Création de visuels professionnels, logos, affiches, flyers et identités graphiques pour valoriser votre image de marque.",
        icon: <DesignServicesIcon fontSize="large" />,
        color: "#ff0f7b",
    },

    {
        title: "Impression numérique & offset",
        description:
            "Impression haute qualité de flyers, brochures, affiches, dépliants et supports marketing pour tous vos besoins professionnels.",
        icon: <PrintIcon fontSize="large" />,
        color: "#f89b29",
    },

    {
        title: "Impression photo & déco",
        description:
            "Impression photo HD sur différents supports pour décoration intérieure, événements, cadres et cadeaux personnalisés.",
        icon: <PhotoCameraIcon fontSize="large" />,
        color: "#00c6ff",
    },

    {
        title: "Impression grand format",
        description:
            "Conception et impression de bâches, roll-up, panneaux publicitaires et supports grand format pour maximiser votre visibilité.",
        icon: <ViewSidebarIcon fontSize="large" />,
        color: "#7b61ff",
    },

    {
        title: "Agendas & calendriers",
        description:
            "Création d’agendas et calendriers personnalisés pour entreprises, campagnes promotionnelles et cadeaux corporate.",
        icon: <CalendarMonthIcon fontSize="large" />,
        color: "#00b894",
    },

    {
        title: "Sérigraphie & Broderie",
        description:
            "Personnalisation textile par sérigraphie et broderie sur t-shirts, polos, casquettes, uniformes et vêtements professionnels.",
        icon: <CheckroomIcon fontSize="large" />,
        color: "#e17055",
    },

    {
        title: "Support publicitaire",
        description:
            "Production de supports publicitaires impactants : kakemonos, PLV, enseignes, stickers et outils de communication visuelle.",
        icon: <CampaignIcon fontSize="large" />,
        color: "#6c5ce7",
    },

    {
        title: "Papeterie",
        description:
            "Impression de cartes de visite, enveloppes, blocs-notes, facturiers et documents administratifs personnalisés.",
        icon: <BusinessCenterIcon fontSize="large" />,
        color: "#0984e3",
    },

    {
        title: "Confection d'objets publicitaires & décoratifs résine epoxy",
        description:
            "Fabrication d’objets personnalisés en résine epoxy pour cadeaux d’entreprise, décoration et branding événementiel.",
        icon: <AutoAwesomeIcon fontSize="large" />,
        color: "#fdcb6e",
    },

    {
        title: "Branding véhicule",
        description:
            "Habillage et marquage publicitaire de véhicules pour renforcer la visibilité de votre entreprise en mobilité.",
        icon: <DirectionsCarFilledIcon fontSize="large" />,
        color: "#d63031",
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
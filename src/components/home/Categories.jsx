"use client";

import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import CheckroomIcon from "@mui/icons-material/Checkroom";

import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PrintIcon from "@mui/icons-material/Print";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CampaignIcon from "@mui/icons-material/Campaign";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";


const categories = [
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

// On duplique pour effet infini fluide
const infiniteCategories = [...categories, ...categories];

export default function CategoriesSection() {
    return (
        <Container sx={{ py: 8, overflow: "hidden" }}>
            <Typography
                sx={{
                    fontWeight: 800,
                    mb: 5,
                    textAlign: "center",
                }}
                variant="h4"
            >
                Nos services
            </Typography>

            <Box sx={{ overflow: "hidden" }}>
                <motion.div
                    style={{
                        display: "flex",
                        gap: "20px",
                    }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 25,
                    }}
                >
                    {infiniteCategories.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                minWidth: {
                                    xs: "85%",
                                    sm: "60%",
                                    md: "32%",
                                    lg: "24%",
                                },
                            }}
                        >
                            <motion.div whileHover={{ y: -8 }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        height: "100%",
                                        borderRadius: 5,
                                        position: "relative",
                                        overflow: "hidden",
                                        bgcolor: "#fff",
                                        border: "1px solid",
                                        borderColor: "grey.200",
                                        transition: "all .4s ease",
                                        cursor: "pointer",

                                        "&::before": {
                                            content: '""',
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: 5,
                                            background:
                                                "linear-gradient(90deg,#ff0f7b,#f89b29,#00c6ff)",
                                            transform: "scaleX(0)",
                                            transformOrigin: "left",
                                            transition: "transform .4s ease",
                                        },

                                        "&:hover": {
                                            boxShadow: "0 20px 45px rgba(0,0,0,0.12)",
                                            borderColor: "transparent",
                                        },

                                        "&:hover::before": {
                                            transform: "scaleX(1)",
                                        },

                                        "&:hover .service-icon": {
                                            background:
                                                "linear-gradient(135deg,#ff0f7b,#f89b29)",
                                            color: "#fff",
                                            transform: "rotate(-6deg) scale(1.1)",
                                        },
                                    }}
                                >
                                    {/* Icon */}
                                    <Box
                                        className="service-icon"
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: "24px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            bgcolor: "grey.100",
                                            color: "primary.main",
                                            mb: 3,
                                            transition: "all .4s ease",
                                        }}
                                    >
                                        {item.icon}
                                    </Box>

                                    {/* Title */}
                                    <Typography
                                        variant="h6"
                                        fontWeight={700}
                                        mb={1.5}
                                    >
                                        {item.title}
                                    </Typography>

                                    {/* Description */}
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "text.secondary",
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Box>
                    ))}
                </motion.div>
            </Box>
        </Container>
    );
}
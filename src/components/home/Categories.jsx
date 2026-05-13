"use client";

import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import PhotoIcon from "@mui/icons-material/Photo";
import ImageIcon from "@mui/icons-material/Image";
import MailIcon from "@mui/icons-material/Mail";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const categories = [
    { title: "T-shirts", icon: <CheckroomIcon fontSize="large" /> },
    { title: "Magnets", icon: <LocalOfferIcon fontSize="large" /> },
    { title: "Cadres photo", icon: <PhotoIcon fontSize="large" /> },
    { title: "Enveloppes", icon: <MailIcon fontSize="large" /> },
    { title: "Agendas", icon: <MenuBookIcon fontSize="large" /> },
    { title: "Calendriers", icon: <CalendarMonthIcon fontSize="large" /> },
    { title: "Autocollants", icon: <ImageIcon fontSize="large" /> },
];

// On duplique pour effet infini fluide
const infiniteCategories = [...categories, ...categories];

export default function CategoriesSection() {
    return (
        <Container sx={{ py: 6, overflow: "hidden" }}>
            <Typography sx={{ fontWeight: 700, mb: 3 }} variant="h5">
                Catégories
            </Typography>

            <Box sx={{ overflow: "hidden" }}>
                <motion.div
                    style={{
                        display: "flex",
                        gap: "16px",
                    }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {infiniteCategories.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                minWidth: {
                                    xs: "45%",
                                    md: "20%",
                                },
                            }}
                        >
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        textAlign: "center",
                                        cursor: "pointer",
                                        borderRadius: 2,
                                        transition: "0.3s",
                                        "&:hover": {
                                            boxShadow: 3,
                                        },
                                    }}
                                >
                                    <Box mb={2}>{item.icon}</Box>
                                    <Typography fontWeight={600}>
                                        {item.title}
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
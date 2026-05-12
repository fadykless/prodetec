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
    { title: "T-Shirts", icon: <CheckroomIcon fontSize="large" /> },
    { title: "Magnets", icon: <LocalOfferIcon fontSize="large" /> },
    { title: "Photo frames", icon: <PhotoIcon fontSize="large" /> },
    { title: "Envelopes", icon: <MailIcon fontSize="large" /> },
    { title: "Diaries", icon: <MenuBookIcon fontSize="large" /> },
    { title: "Calendars", icon: <CalendarMonthIcon fontSize="large" /> },
    { title: "Stickers", icon: <ImageIcon fontSize="large" /> },
];

export default function CategoriesSection() {
    return (
        <Container sx={{ py: 6 }}>
            <Typography sx={{ fontWeight: 700, mb: 3 }} variant="h5">
                Catégories
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    overflowX: "auto",
                    scrollSnapType: "x mandatory",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                {categories.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: {
                                xs: "0 0 33.33333%", // 2 éléments en mobile
                                md: "0 0 20%", // 6 éléments en desktop
                            },
                            scrollSnapAlign: "start",
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
                                        boxShadow: 2,
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
            </Box>
        </Container>
    );
}
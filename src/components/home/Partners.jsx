"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const partners = [
    "/images/partners/1.png",
    "/images/partners/2.png",
    "/images/partners/3.png",
    "/images/partners/4.png",
    "/images/partners/5.png",
    "/images/partners/6.png",
];

// duplication pour boucle infinie fluide
const infinitePartners = [...partners, ...partners];

export default function PartnersSection() {
    return (
        <Box sx={{ py: 8, backgroundColor: "#fafafa" }}>
            <Container>
                <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, mb: 5, textAlign: "center" }}
                >
                    Ils nous ont fait confiance
                </Typography>

                <Box
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Fade gauche */}
                    <Box
                        sx={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: 100,
                            zIndex: 2,
                            background:
                                "linear-gradient(to right, #fafafa 0%, rgba(250,250,250,0) 100%)",
                        }}
                    />

                    {/* Fade droite */}
                    <Box
                        sx={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            bottom: 0,
                            width: 100,
                            zIndex: 2,
                            background:
                                "linear-gradient(to left, #fafafa 0%, rgba(250,250,250,0) 100%)",
                        }}
                    />

                    <motion.div
                        style={{
                            display: "flex",
                            gap: "60px",
                            alignItems: "center",
                        }}
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 25,
                        }}
                        whileHover={{ animationPlayState: "paused" }}
                    >
                        {infinitePartners.map((logo, index) => (
                            <Box
                                key={index}
                                component="img"
                                src={logo}
                                alt="logo partenaire"
                                sx={{
                                    height: { xs: 40, md: 60 },
                                    opacity: 0.7,
                                    transition: "0.3s",
                                    filter: "grayscale(100%)",
                                    "&:hover": {
                                        opacity: 1,
                                        filter: "grayscale(0%)",
                                    },
                                }}
                            />
                        ))}
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}
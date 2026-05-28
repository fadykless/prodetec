"use client";

import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { services } from "@/data";


// On duplique pour effet infini fluide
const infiniteCategories = [...services, ...services];

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
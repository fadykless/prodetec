'use client';

import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    Typography,
    useTheme,
    alpha,
} from "@mui/material";
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
    const theme = useTheme();

    const primaryGradient =
        "linear-gradient(90deg,#ff0f7b,#f89b29,#00c6ff)";

    const services = [
        "Impression numérique",
        "Impression offset",
        "Cartes de visite",
        "Flyers & brochures",
        "Bâches & roll-up",
        "Personnalisation textile",
        "Tampons & cachets",
    ];

    const socials = [
        { icon: <FaFacebookF />, link: "#" },
        { icon: <FaInstagram />, link: "#" },
        { icon: <FaWhatsapp />, link: "#" },
    ];

    return (
        <Box
            sx={{
                background:
                    "linear-gradient(135deg,#0f172a 0%, #111827 100%)",
                color: "#fff",
                pt: 10,
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Glow */}
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

            <Container sx={{ position: "relative", zIndex: 2 }}>
                <Grid container spacing={5}>
                    {/* Logo */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box sx={{ mb: 2 }}>
                            <img
                                src="/logo-footer.png"
                                width="55%"
                                alt="logo"
                            />
                        </Box>

                        <Typography
                            variant="body2"
                            sx={{
                                opacity: 0.75,
                                lineHeight: 1.8,
                            }}
                        >
                            Votre partenaire en impression professionnelle pour
                            tous vos supports de communication visuelle,
                            branding et marketing.
                        </Typography>
                    </Grid>

                    {/* Services */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 2,
                                fontWeight: 800,
                                background: primaryGradient,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Nos services
                        </Typography>

                        {services.map((service) => (
                            <Button
                                key={service}
                                component="a"
                                href="#"
                                disableRipple
                                sx={{
                                    color: "rgba(255,255,255,0.7)",
                                    display: "block",
                                    textTransform: "none",
                                    justifyContent: "flex-start",
                                    px: 0,
                                    mb: 0.5,
                                    fontSize: 14,
                                    transition: "all .3s ease",

                                    "&:hover": {
                                        color: "#fff",
                                        transform: "translateX(6px)",
                                    },
                                }}
                            >
                                • {service}
                            </Button>
                        ))}
                    </Grid>

                    {/* Horaires */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 2,
                                fontWeight: 800,
                                background: primaryGradient,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Horaires
                        </Typography>

                        <Typography sx={{ opacity: 0.75, mb: 1 }}>
                            Lundi - Vendredi : 8h00 - 18h00
                        </Typography>
                        <Typography sx={{ opacity: 0.75, mb: 1 }}>
                            Samedi : 9h00 - 14h00
                        </Typography>
                        <Typography sx={{ opacity: 0.75 }}>
                            Dimanche : Fermé
                        </Typography>
                    </Grid>

                    {/* Contact */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 2,
                                fontWeight: 800,
                                background: primaryGradient,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Contact
                        </Typography>

                        <Box sx={{ display: "flex", mb: 1.5 }}>
                            <LocationOnIcon
                                sx={{
                                    mr: 1,
                                    color: "#ff0f7b",
                                }}
                            />
                            <Typography sx={{ opacity: 0.75 }}>
                                44 Avenue de la Démocratie, Kinshasa - Gombe
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", mb: 1.5 }}>
                            <PhoneIcon
                                sx={{ mr: 1, color: "#f89b29" }}
                            />
                            <Typography sx={{ opacity: 0.75 }}>
                                +243 824 504 779
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex" }}>
                            <EmailIcon
                                sx={{ mr: 1, color: "#00c6ff" }}
                            />
                            <Typography sx={{ opacity: 0.75 }}>
                                contact@prodetec.com
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Divider
                    sx={{
                        my: 5,
                        borderColor: alpha("#fff", 0.1),
                    }}
                />

                {/* Bottom */}
                <Box sx={{ textAlign: "center", pb: 5 }}>
                    {/* Socials */}
                    <Box sx={{ mb: 2 }}>
                        {socials.map((social, index) => (
                            <IconButton
                                key={index}
                                component="a"
                                href={social.link}
                                sx={{
                                    color: "rgba(255,255,255,0.7)",
                                    mx: 1,
                                    transition: "all .3s ease",

                                    "&:hover": {
                                        color: "#fff",
                                        transform: "translateY(-4px) scale(1.1)",
                                        background: alpha("#fff", 0.05),
                                    },
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Box>

                    <Typography sx={{ opacity: 0.6, fontSize: 13 }}>
                        © {new Date().getFullYear()} PRODETEC — Tous droits réservés.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
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
} from "@mui/material";
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
    const theme = useTheme();

    const services = [
        "Impression numérique",
        "Impression offset",
        "Cartes de visite",
        "Flyers & brochures",
        "Bâches & roll-up",
        "Personnalisation textile",
        "Tampons & cachets",
    ];

    const companyInfos = [
        //{ label: "À propos", link: "/a-propos" },
    ];

    const socials = [
        { icon: <FaFacebookF />, link: "#" },
        { icon: <FaInstagram />, link: "#" },
        { icon: <FaWhatsapp />, link: "#" },
    ];

    return (
        <Box sx={{ backgroundColor: "#111", color: "#fff", pt: 6 }}>
            <Container>
                <Grid container spacing={4}>

                    {/* Logo + description */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            <img src={'/logo-footer.png'} width={'50%'} />
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            Votre partenaire en impression professionnelle pour tous vos
                            supports de communication.
                        </Typography>
                    </Grid>

                    {/* Services */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{ color: theme.palette.secondary.main, mb: 2 }}
                        >
                            Nos Services
                        </Typography>
                        {services.map((service) => (
                            <Button
                                key={service}
                                component="a"
                                href="#"
                                sx={{
                                    color: "#ccc",
                                    display: "block",
                                    justifyContent: "flex-start",
                                    p: 0,
                                    textTransform: "none",
                                    "&:hover": {
                                        color: theme.palette.secondary.main,
                                    },
                                }}
                            >
                                {service}
                            </Button>
                        ))}
                    </Grid>

                    {/* Horaires + Contact */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{ color: theme.palette.secondary.main, mb: 2 }}
                        >
                            Horaires d'ouverture
                        </Typography>

                        <Typography variant="body2">
                            Lundi - Vendredi : 8h00 - 18h00
                        </Typography>
                        <Typography variant="body2">
                            Samedi : 9h00 - 14h00
                        </Typography>
                        <Typography variant="body2">
                            Dimanche : Fermé
                        </Typography>


                    </Grid>

                    {/* Entreprise */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{ color: theme.palette.secondary.main, mb: 2 }}
                        >
                            Entreprise
                        </Typography>
                        <Box sx={{ mt: 3 }}>

                            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                <LocationOnIcon sx={{ fontSize: 18, mr: 1, color: theme.palette.secondary.main }} />
                                <Typography variant="body2">
                                    44 Avenue de la Démocratie, <br />
                                    Kinshasa - Gombe
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                <PhoneIcon sx={{ fontSize: 18, mr: 1, color: theme.palette.secondary.main }} />
                                <Typography variant="body2">
                                    +243 824 504 779
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <EmailIcon sx={{ fontSize: 18, mr: 1, color: theme.palette.secondary.main }} />
                                <Typography variant="body2">
                                    contact@prodetec.com
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, borderColor: "#333" }} />

                {/* Socials + copyright */}
                <Box sx={{ textAlign: "center", pb: 5 }}>
                    <Box sx={{ mb: 2 }}>
                        {socials.map((social, index) => (
                            <IconButton
                                key={index}
                                component="a"
                                href={social.link}
                                sx={{
                                    color: "#ccc",
                                    mx: 1,
                                    fontSize: 20,
                                    "&:hover": {
                                        color: theme.palette.secondary.main,
                                        transform: "scale(1.1)",
                                    },
                                    transition: "0.3s",
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Box>

                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        © {new Date().getFullYear()} PRODETEC. Tous droits réservés.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
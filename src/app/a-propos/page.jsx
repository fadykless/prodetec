'use client';

import React from "react";
import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    Button,
    useTheme,
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import BuildIcon from "@mui/icons-material/Build";
import GroupIcon from "@mui/icons-material/Group";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

export default function APropos() {
    const theme = useTheme()
    return (
        <Box sx={{ backgroundColor: "#0f0f0f", color: "#fff", minHeight: "100vh" }}>

            {/* HERO */}
            <Box
                sx={{
                    py: 10,
                    textAlign: "center",
                    background: "linear-gradient(135deg, #1c1c1c, #0f0f0f)",
                }}
            >
                <PrintIcon sx={{ fontSize: 60, color: theme.palette.primary.main }} />
                <Typography variant="h3" fontWeight="bold" mt={2}>
                    À propos de PRODETEC
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.8, mt: 2 }}>
                    Votre partenaire en impression professionnelle en RDC
                </Typography>
            </Box>

            <Container sx={{ py: 8 }}>

                {/* HISTOIRE */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h5" fontWeight="bold" mb={2}>
                        Notre histoire
                    </Typography>
                    <Typography sx={{ opacity: 0.8, lineHeight: 1.8 }}>
                        PRODETEC est née d’une ambition simple : offrir en République Démocratique du Congo
                        des solutions d’impression modernes, rapides et de qualité internationale.
                        Nous accompagnons les entreprises, marques et particuliers dans la
                        réalisation de leurs supports de communication.
                    </Typography>
                </Box>

                {/* MISSIONS */}
                <Grid container spacing={3} sx={{ mb: 6 }}>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper sx={{ p: 3, backgroundColor: "#1a1a1a", color: "#fff", height: "100%" }}>
                            <BuildIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                            <Typography variant="h6" mt={2}>
                                Grandeur
                            </Typography>
                            <Typography sx={{ opacity: 0.7, mt: 1 }}>
                                Des impressions nettes, précises et durables grâce à des équipements professionnels.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper sx={{ p: 3, backgroundColor: "#1a1a1a", color: "#fff", height: "100%" }}>
                            <GroupIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                            <Typography variant="h6" mt={2}>
                                Excellence
                            </Typography>
                            <Typography sx={{ opacity: 0.7, mt: 1 }}>
                                Un accompagnement personnalisé pour chaque client, du devis à la livraison.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper sx={{ p: 3, backgroundColor: "#1a1a1a", color: "#fff", height: "100%" }}>
                            <EmojiObjectsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                            <Typography variant="h6" mt={2}>
                                Innovation
                            </Typography>
                            <Typography sx={{ opacity: 0.7, mt: 1 }}>
                                Des solutions modernes pour répondre aux besoins des marques actuelles.
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>

                {/* EQUIPEMENTS */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h5" fontWeight="bold" mb={2}>
                        Nos équipements
                    </Typography>
                    <Typography sx={{ opacity: 0.8, lineHeight: 1.8 }}>
                        Nous disposons de machines d’impression numérique et offset,
                        permettant de produire des supports variés : flyers, cartes de visite,
                        bâches publicitaires, packaging, textiles personnalisés et bien plus.
                    </Typography>
                </Box>

                {/* CTA */}
                <Paper
                    sx={{
                        p: 4,
                        textAlign: "center",
                        backgroundColor: "#1a1a1a",
                        color: "#fff",
                        borderRadius: 3,
                    }}
                >
                    <Typography variant="h5" fontWeight="bold">
                        Besoin d’un devis rapide ?
                    </Typography>

                    <Typography sx={{ opacity: 0.7, mt: 1, mb: 3 }}>
                        Notre équipe est prête à vous accompagner dans vos projets d’impression.
                    </Typography>

                    <Button
                        component='a'
                        href="/devis"
                        variant="contained"
                        sx={{
                            px: 4,
                            py: 1.5,
                            fontWeight: "bold",
                            borderRadius: 6,
                            textTransform: 'capitalize'
                        }}
                    >
                        Demander un devis
                    </Button>
                </Paper>

            </Container>
        </Box>
    );
}
'use client';

import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const reasons = [
    {
        title: "Assurance Qualité",
        description:
            "Nous affirmons constamment nos méthodes de travail et nos techniques afin de vous fournir une qualité constante.",
        icon: <WorkspacePremiumIcon sx={{ fontSize: 40, color: "#00c6ff" }} />,
    },
    {
        title: "Services fiables",
        description:
            "Nous sommes fiers de nos réalisations. Chaque projet est respecté dans le but de vous faire économiser du temps et de l'argent",
        icon: <SupportAgentIcon sx={{ fontSize: 40, color: "#00c6ff" }} />,
    },
    {
        title: "Rapidité",
        description:
            "Grâce à notre équipe qualifiée des délais de livraison respectés et un engagement sans compromis sur la qualité. Nous garantissons un service fiable et professionnel.",
        icon: <SpeedIcon sx={{ fontSize: 40, color: "#00c6ff" }} />,
    },
];

export default function WhyChooseUs() {
    return (
        <Box sx={{ py: 10, backgroundColor: "#0f0f0f", color: "#fff" }}>
            <Container>

                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography variant="h4" fontWeight="bold">
                        Pourquoi nous choisir ?
                    </Typography>
                    <Typography sx={{ opacity: 0.7, mt: 1 }}>
                        Grandeur. Excellente. Innovation
                    </Typography>
                </Box>

                <Grid container spacing={4}>

                    {reasons.map((item, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Paper
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    backgroundColor: "#1a1a1a",
                                    color: "#fff",
                                    borderRadius: 3,
                                    textAlign: 'center',
                                    transition: '0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                    }
                                }}
                                elevation={0}
                            >
                                <Box mb={2}>
                                    {item.icon}
                                </Box>

                                <Typography variant="h6" fontWeight="bold" mb={1}>
                                    {item.title}
                                </Typography>

                                <Typography sx={{ opacity: 0.7, fontSize: 14 }}>
                                    {item.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}

                </Grid>

            </Container>
        </Box>
    );
}
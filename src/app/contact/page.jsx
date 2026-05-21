'use client';

import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    alpha
} from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

import { motion } from 'framer-motion';

const contactItems = [
    {
        title: 'Adresse',
        value: '44 Avenue de la Démocratie, Kinshasa - Gombe',
        icon: <LocationOnIcon fontSize="large" />,
        color: '#ff0f7b',
    },
    {
        title: 'Téléphone',
        value: '+243 824 504 779',
        icon: <PhoneIcon fontSize="large" />,
        color: '#f89b29',
    },
    {
        title: 'Adresse email',
        value: 'contact@prodetec.com',
        icon: <EmailIcon fontSize="large" />,
        color: '#00c6ff',
    },
];

export default function ContactPage() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                py: 10,
                position: 'relative',
                overflow: 'hidden',
                background:
                    'linear-gradient(135deg,#0f172a 0%, #111827 100%)',
            }}
        >
            {/* Background blur effects */}
            <Box
                sx={{
                    position: 'absolute',
                    width: 350,
                    height: 350,
                    borderRadius: '50%',
                    background: alpha('#ff0f7b', 0.15),
                    filter: 'blur(120px)',
                    top: -120,
                    left: -100,
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: alpha('#00c6ff', 0.12),
                    filter: 'blur(120px)',
                    bottom: -100,
                    right: -100,
                }}
            />

            <Container sx={{ position: 'relative', zIndex: 2 }}>
                {/* Header */}
                <Box textAlign="center" mb={8}>
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#fff',
                            fontWeight: 800,
                            mb: 2,
                        }}
                    >
                        Contactez-nous
                    </Typography>

                    <Typography
                        sx={{
                            color: alpha('#fff', 0.7),
                            maxWidth: 700,
                            mb: 5,
                            fontSize: 18,
                        }}
                    >
                        Besoin d’un devis, d’une impression personnalisée
                        ou d’informations supplémentaires ? Notre équipe
                        vous répond rapidement.
                    </Typography>
                </Box>

                <Grid container spacing={5}>
                    {/* Contact Infos */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Grid container spacing={3}>
                            {contactItems.map((item, index) => (
                                <Grid size={{ xs: 12 }} key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -40 }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.15,
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 3,
                                                borderRadius: 5,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 3,
                                                background: alpha(
                                                    '#fff',
                                                    0.05
                                                ),
                                                backdropFilter:
                                                    'blur(14px)',
                                                border: `1px solid ${alpha(
                                                    '#fff',
                                                    0.08
                                                )}`,
                                                transition:
                                                    'all .4s ease',

                                                '&:hover': {
                                                    transform:
                                                        'translateY(-5px)',
                                                    boxShadow:
                                                        '0 15px 35px rgba(0,0,0,0.25)',
                                                },
                                            }}
                                        >
                                            {/* Icon */}
                                            <Box
                                                sx={{
                                                    width: 70,
                                                    height: 70,
                                                    borderRadius: '22px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'center',
                                                    color: '#fff',
                                                    background: `linear-gradient(135deg, ${item.color}, ${alpha(
                                                        item.color,
                                                        0.6
                                                    )})`,
                                                    boxShadow: `0 10px 30px ${alpha(
                                                        item.color,
                                                        0.35
                                                    )}`,
                                                    flexShrink: 0,
                                                }}
                                            >
                                                {item.icon}
                                            </Box>

                                            {/* Text */}
                                            <Box>
                                                <Typography
                                                    sx={{
                                                        color: alpha(
                                                            '#fff',
                                                            0.6
                                                        ),
                                                        mb: 0.5,
                                                    }}
                                                >
                                                    {item.title}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        color: '#fff',
                                                        fontWeight: 700,
                                                        fontSize: 18,
                                                    }}
                                                >
                                                    {item.value}
                                                </Typography>
                                            </Box>
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* Contact Form */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: {
                                        xs: 3,
                                        md: 5,
                                    },
                                    borderRadius: 6,
                                    background: alpha('#fff', 0.05),
                                    backdropFilter: 'blur(14px)',
                                    border: `1px solid ${alpha(
                                        '#fff',
                                        0.08
                                    )}`,
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: '#fff',
                                        fontWeight: 700,
                                        mb: 4,
                                    }}
                                >
                                    Envoyer un message
                                </Typography>

                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Nom complet"
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Adresse email"
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            label="Sujet"
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={6}
                                            label="Votre message"
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12 }}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            endIcon={<SendIcon />}
                                            sx={{
                                                py: 1.7,
                                                px: 4,
                                                borderRadius: 4,
                                                fontWeight: 700,
                                                textTransform:
                                                    'capitalize',
                                                background:
                                                    'linear-gradient(90deg,#ff0f7b,#f89b29)',
                                                boxShadow:
                                                    '0 10px 30px rgba(248,155,41,0.35)',

                                                '&:hover': {
                                                    opacity: 0.9,
                                                },
                                            }}
                                        >
                                            Envoyer le message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
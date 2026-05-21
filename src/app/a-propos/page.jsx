'use client';

import {
    Avatar,
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    alpha
} from '@mui/material';

import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { motion } from 'framer-motion';
import PrintingStatsSection from '@/components/home/Stats';

const values = [
    {
        title: 'Notre histoire',
        description:
            "Depuis plusieurs années, notre imprimerie accompagne entreprises, marques et particuliers dans leurs besoins d’impression et de communication visuelle. Grâce à notre expertise et à des équipements modernes, nous avons su bâtir une réputation basée sur la qualité et la confiance.",
        icon: <HistoryEduIcon fontSize="large" />,
        color: '#ff0f7b',
    },
    {
        title: 'Notre mission',
        description:
            "Offrir des solutions d’impression professionnelles, rapides et créatives pour aider nos clients à valoriser leur image et leurs projets avec des supports de haute qualité.",
        icon: <RocketLaunchIcon fontSize="large" />,
        color: '#f89b29',
    },
    {
        title: 'Nos valeurs',
        description:
            "Qualité, innovation, rapidité et satisfaction client sont au cœur de notre engagement. Chaque projet est traité avec passion et attention aux détails.",
        icon: <FavoriteIcon fontSize="large" />,
        color: '#00c6ff',
    },
];

const team = [
    {
        name: 'Nadine Kabeya',
        role: 'Directrice Générale',
        image: '/images/team/team-1.jpg',
    },
    {
        name: 'Sarah Ilunga',
        role: 'Responsable Production',
        image: '/images/team/team-2.jpg',
    },
    {
        name: 'David Kanku',
        role: 'Designer Graphique',
        image: '/images/team/team-3.jpg',
    },
];

export default function AboutPage() {
    return (
        <Box
            sx={{
                background:
                    'linear-gradient(135deg,#0f172a 0%, #111827 100%)',
                minHeight: '100vh',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {/* Background effects */}
            <Box
                sx={{
                    position: 'absolute',
                    width: 350,
                    height: 350,
                    borderRadius: '50%',
                    background: alpha('#ff0f7b', 0.12),
                    filter: 'blur(120px)',
                    top: -100,
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

            {/* Hero */}
            <Container sx={{ py: 12, position: 'relative', zIndex: 2 }}>
                <Grid container spacing={6} alignItems="center">
                    {/* Text */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    color: '#fff',
                                    fontWeight: 800,
                                    mb: 3,
                                }}
                            >
                                À propos de notre imprimerie
                            </Typography>

                            <Typography
                                sx={{
                                    color: alpha('#fff', 0.72),
                                    fontSize: 18,
                                    lineHeight: 1.9,
                                    mb: 4,
                                }}
                            >
                                Nous sommes spécialisés dans les solutions
                                d’impression modernes pour les entreprises,
                                institutions et particuliers. Notre objectif
                                est d’apporter des supports visuels puissants
                                qui valorisent chaque marque et chaque idée.
                            </Typography>

                            <Typography
                                sx={{
                                    color: alpha('#fff', 0.72),
                                    lineHeight: 1.9,
                                }}
                            >
                                Grâce à une équipe passionnée et des
                                technologies de pointe, nous réalisons des
                                impressions de qualité avec des délais
                                rapides et un accompagnement personnalisé.
                            </Typography>
                        </motion.div>
                    </Grid>

                    {/* Image */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/images/elements/grand-format.jpg"
                                    alt="Imprimerie"
                                    sx={{
                                        width: '100%',
                                        height: {
                                            xs: 350,
                                            md: 500,
                                        },
                                        objectFit: 'cover',
                                        borderRadius: 8,
                                        boxShadow:
                                            '0 25px 60px rgba(0,0,0,0.35)',
                                    }}
                                />

                                <Box
                                    sx={{
                                        position: 'absolute',
                                        inset: 0,
                                        borderRadius: 8,
                                        background:
                                            'linear-gradient(to top, rgba(0,0,0,0.45), transparent)',
                                    }}
                                />
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>

            {/* Values */}
            <Container sx={{ pb: 12, position: 'relative', zIndex: 2 }}>
                <Grid container spacing={4}>
                    {values.map((item, index) => (
                        <Grid
                            size={{ xs: 12, md: 4 }}
                            key={index}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                }}
                                viewport={{ once: true }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        borderRadius: 6,
                                        background: alpha(
                                            '#fff',
                                            0.05
                                        ),
                                        backdropFilter: 'blur(14px)',
                                        border: `1px solid ${alpha(
                                            '#fff',
                                            0.08
                                        )}`,
                                        transition: 'all .4s ease',

                                        '&:hover': {
                                            transform:
                                                'translateY(-10px)',
                                            boxShadow:
                                                '0 20px 45px rgba(0,0,0,0.25)',
                                        },
                                    }}
                                >
                                    {/* Icon */}
                                    <Box
                                        sx={{
                                            width: 85,
                                            height: 85,
                                            borderRadius: '24px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 3,
                                            color: '#fff',
                                            background: `linear-gradient(135deg, ${item.color}, ${alpha(
                                                item.color,
                                                0.6
                                            )})`,
                                            boxShadow: `0 10px 30px ${alpha(
                                                item.color,
                                                0.35
                                            )}`,
                                        }}
                                    >
                                        {item.icon}
                                    </Box>

                                    <Typography
                                        variant="h5"
                                        sx={{
                                            color: '#fff',
                                            fontWeight: 700,
                                            mb: 2,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: alpha(
                                                '#fff',
                                                0.72
                                            ),
                                            lineHeight: 1.9,
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <PrintingStatsSection />

            {/* Team */}
            <Container sx={{ pb: 12, position: 'relative', zIndex: 2 }}>
                <Box textAlign="center" mb={7}>
                    <Typography
                        variant="h3"
                        sx={{
                            color: '#fff',
                            fontWeight: 800,
                            mb: 2,
                        }}
                    >
                        Notre équipe
                    </Typography>

                    <Typography
                        sx={{
                            color: alpha('#fff', 0.7),
                            maxWidth: 700,
                            mb: 5,
                            fontSize: 18,
                        }}
                    >
                        Une équipe passionnée et créative dédiée à la
                        réussite de vos projets d’impression.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {team.map((member, index) => (
                        <Grid
                            size={{ xs: 12, sm: 6, md: 4 }}
                            key={index}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                }}
                                viewport={{ once: true }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        textAlign: 'center',
                                        borderRadius: 6,
                                        background: alpha(
                                            '#fff',
                                            0.05
                                        ),
                                        backdropFilter: 'blur(14px)',
                                        border: `1px solid ${alpha(
                                            '#fff',
                                            0.08
                                        )}`,
                                        transition: 'all .4s ease',

                                        '&:hover': {
                                            transform:
                                                'translateY(-8px)',
                                            boxShadow:
                                                '0 20px 45px rgba(0,0,0,0.25)',
                                        },
                                    }}
                                >
                                    <Avatar
                                        src={member.image}
                                        alt={member.name}
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            mx: 'auto',
                                            mb: 3,
                                            border: `4px solid ${alpha(
                                                '#fff',
                                                0.1
                                            )}`,
                                        }}
                                    />

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: '#fff',
                                            fontWeight: 700,
                                            mb: 1,
                                        }}
                                    >
                                        {member.name}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: alpha(
                                                '#fff',
                                                0.65
                                            ),
                                        }}
                                    >
                                        {member.role}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
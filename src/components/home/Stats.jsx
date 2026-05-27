'use client';

import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    alpha
} from '@mui/material';

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import GroupsIcon from '@mui/icons-material/Groups';
import BoltIcon from '@mui/icons-material/Bolt';

import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const stats = [
    {
        title: "Années d’expérience",
        value: 13,
        suffix: "+",
        icon: <WorkspacePremiumIcon fontSize="large" />,
        color: "#ff0f7b",
    },
    {
        title: "Projets réalisés",
        value: 1250,
        suffix: "+",
        icon: <Inventory2Icon fontSize="large" />,
        color: "#f89b29",
    },
    {
        title: "Clients satisfaits",
        value: 980,
        suffix: "+",
        icon: <GroupsIcon fontSize="large" />,
        color: "#00c6ff",
    },
    {
        title: "Temps moyen de livraison",
        value: 24,
        suffix: "h",
        icon: <BoltIcon fontSize="large" />,
        color: "#7b61ff",
    },
];

export default function PrintingStatsSection() {
    return (
        <Box
            sx={{
                py: 10,
                position: 'relative',
                overflow: 'hidden',
                background:
                    'linear-gradient(135deg,#0f172a 0%, #111827 100%)',
            }}
        >
            {/* Decorative background */}
            <Box
                sx={{
                    position: 'absolute',
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: alpha('#ff0f7b', 0.15),
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
                    background: alpha('#00c6ff', 0.15),
                    filter: 'blur(120px)',
                    bottom: -100,
                    right: -100,
                }}
            />

            <Container sx={{ position: 'relative', zIndex: 2 }}>
                <Typography
                    variant="h3"
                    sx={{
                        color: '#fff',
                        fontWeight: 800,
                        textAlign: 'center',
                        mb: 2,
                    }}
                >
                    Une imprimerie de confiance
                </Typography>

                <Typography
                    sx={{
                        color: alpha('#fff', 0.7),
                        textAlign: 'center',
                        maxWidth: 700,
                        mx: 'auto',
                        mb: 7,
                        fontSize: 18,
                    }}
                >
                    Nous accompagnons entreprises, marques et particuliers
                    avec des impressions de qualité, des délais rapides
                    et un service professionnel.
                </Typography>

                <Grid container spacing={4}>
                    {stats.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
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
                                        borderRadius: 6,
                                        textAlign: 'center',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        backdropFilter: 'blur(14px)',
                                        background: alpha('#fff', 0.06),
                                        border: `1px solid ${alpha(
                                            '#fff',
                                            0.08
                                        )}`,
                                        transition: 'all .4s ease',

                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow:
                                                '0 20px 45px rgba(0,0,0,0.3)',
                                        },

                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: 4,
                                            background: item.color,
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
                                            mx: 'auto',
                                            mb: 3,
                                            color: '#fff',
                                            background: `linear-gradient(135deg, ${item.color}, ${alpha(
                                                item.color,
                                                0.6
                                            )})`,
                                            boxShadow: `0 10px 30px ${alpha(
                                                item.color,
                                                0.4
                                            )}`,
                                        }}
                                    >
                                        {item.icon}
                                    </Box>

                                    {/* Counter */}
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            color: '#fff',
                                            fontWeight: 800,
                                            mb: 1,
                                        }}
                                    >
                                        <CountUp
                                            end={item.value}
                                            duration={3}
                                        />
                                        {item.suffix}
                                    </Typography>

                                    {/* Label */}
                                    <Typography
                                        sx={{
                                            color: alpha('#fff', 0.7),
                                            fontWeight: 500,
                                        }}
                                    >
                                        {item.title}
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
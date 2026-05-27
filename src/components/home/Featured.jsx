'use client';

import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const products = [
    {
        name: 'Impression Abris bus',
        image: '/images/elements/abris-bus.jpg'
    },
    {
        name: 'Calendrier',
        image: '/images/elements/calendar.jpg'
    },
    {
        name: 'Branding automobile',
        image: '/images/elements/car-revetment.jpg'
    },
    {
        name: 'Impression sur t-shirts & textiles',
        image: '/images/elements/dtf.jpg'
    },
    {
        name: 'Impression grand format',
        image: '/images/elements/grand-format.jpg'
    },
    {
        name: 'Kits entreprise',
        image: '/images/elements/gravure.jpg'
    },
    {
        name: 'Stands & Roll-up',
        image: '/images/elements/roll-up.jpg'
    },
    {
        name: 'Impression tout support',
        image: '/images/elements/tout-support.jpg'
    },
    {
        name: 'Gourde & bracelet',
        image: '/images/elements/gourde.jpg'
    },
    {
        name: 'Invitations',
        image: '/images/elements/invitations.jpg'
    },
    {
        name: 'Kepis & T-shirt',
        image: '/images/elements/kepi.jpg'
    },
    {
        name: 'Médailles et trophées',
        image: '/images/elements/trophy.jpg'
    },
    {
        name: 'Porte-clé & Porte-monnaie',
        image: '/images/elements/money.jpg'
    },
    {
        name: 'Gilet & Choisuble',
        image: '/images/elements/gilet.jpg'
    },
    {
        name: 'Flyers & Dépliant',
        image: '/images/elements/depliant.jpg'
    },
    {
        name: 'Maillot personnalisé',
        image: '/images/elements/maillot.jpg'
    },
    {
        name: 'Plaque',
        image: '/images/elements/plaque.jpg'
    },
    {
        name: 'Stylo & Flash',
        image: '/images/elements/pen.jpg'
    },
    {
        title: 'Cartes de visite',
        description:
            "Des cartes professionnelles premium pour valoriser votre image et laisser une impression durable.",
        image: '/images/elements/cartes.jpg',
        category: 'Entreprise',
        color: '#ff0f7b',
    },
    {
        title: 'Flyers & affiches',
        description:
            "Impressions publicitaires de haute qualité pour vos campagnes marketing et événements.",
        image: '/images/elements/flyers.jpg',
        category: 'Marketing',
        color: '#f89b29',
    },
    {
        title: 'Cadres photo',
        description:
            "Impressions photo HD et cadres décoratifs élégants pour maisons, bureaux et cadeaux.",
        image: '/images/elements/cadre-photo.jpg',
        category: 'Décoration',
        color: '#00c6ff',
    },
    {
        title: 'Kakemonos',
        description:
            "Stickers personnalisés résistants pour branding, packaging et vitrines commerciales.",
        image: '/images/elements/grand-format.jpg',
        category: 'Branding',
        color: '#7b61ff',
    },
    {
        title: 'Calendriers',
        description:
            "Calendriers muraux et de bureau personnalisés pour entreprises et campagnes promotionnelles.",
        image: '/images/elements/calendar2.jpg',
        category: 'Corporate',
        color: '#00b894',
    },
    {
        title: 'Agendas personnalisés',
        description:
            "Des agendas élégants et pratiques adaptés à votre identité visuelle et vos besoins professionnels.",
        image: '/images/elements/agenda.jpg',
        category: 'Papeterie',
        color: '#e17055',
    },
];

export default function FeaturedSection() {
    return (
        <Container >
            <Grid container sx={{ py: 5 }} spacing={4}>
                {products.map((product, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <motion.div whileHover={{ y: -10 }}>
                            <Card elevation={0}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.image}
                                />
                                <CardContent>
                                    <Typography variant="body2">
                                        {product.name || product.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
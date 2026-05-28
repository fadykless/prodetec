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
        name: 'Cartes de visite',
        image: '/images/elements/cartes.jpg',
    },
    {
        name: 'Flyers & affiches',
        image: '/images/elements/flyers.jpg',

    },
    {
        name: 'Cadres photo',
        image: '/images/elements/cadre-photo.jpg',
    },
    {
        name: 'Kakemonos',
        image: '/images/elements/grand-format.jpg',
    },
    {
        name: 'Calendriers',
        image: '/images/elements/calendar2.jpg',
    },
    {
        name: 'Agendas personnalisés',
        image: '/images/elements/agenda.jpg',
    },
    {
        name: 'Sacs personnalisés',
        image: '/images/elements/sac.jpg',
    },
    {
        name: 'Flyers & Déplians',
        image: '/images/elements/flyer-depliant.jpg',
    },
    {
        name: 'Gourdes, Tasses & Bracelets',
        image: '/images/elements/gourde-gobelet.jpg',
    },
    {
        name: 'Magazines & Brochures',
        image: '/images/elements/magazine.jpg',
    },
    {
        name: 'Porte-clés, Carnets, Stylos',
        image: '/images/elements/confection.jpg',
    },
    {
        name: 'Impression en broderie',
        image: '/images/elements/broderie.jpg',
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
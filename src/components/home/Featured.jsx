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
                                        {product.name}
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
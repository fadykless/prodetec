'use client';

import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const products = [
    {
        name: 'Panneaux en mousse',
        image: '/images/elements/1.webp'
    },
    {
        name: 'Roll-up publicitaires',
        image: '/images/elements/2.webp'
    },
    {
        name: 'Impressions Fine Art Giclée',
        image: '/images/elements/3.jpg'
    },
    {
        name: 'Cartes de vœux',
        image: '/images/elements/4.jpg'
    },
    {
        name: 'Brochures & livrets',
        image: '/images/elements/5.webp'
    },
    {
        name: 'Cartes de visite',
        image: '/images/elements/6.webp'
    },
    {
        name: 'Affiches',
        image: '/images/elements/7.webp'
    },
    {
        name: 'Dépliants & flyers',
        image: '/images/elements/8.webp'
    },
];

export default function FeaturedSection() {
    return (
        <Container >
            <Grid container sx={{ py: 5 }} spacing={4}>
                {products.map((product, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <motion.div whileHover={{ y: -10 }}>
                            <Card>
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
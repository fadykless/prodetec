'use client';

import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const products = Array(8).fill({
    name: '5 x 2 feet standard flex roll up standee',
    price: '$108.30',
    image: '/placeholder.jpg',
});

export default function FeaturedSection() {
    return (
        <Container sx={{ py: 8 }}>
            <Typography variant="h3" gutterBottom={2}>
                Votre solution d'impression professionnelle.
            </Typography>

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
                                    <Typography fontWeight={600}>
                                        {product.price}
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
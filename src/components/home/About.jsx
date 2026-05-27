import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function HomeAbout() {
    return (
        <Container sx={{ my: 4 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography sx={{ textAlign: 'center' }}>
                        <img src={'/images/elements/home-about.jpg'} style={{ borderRadius: 6 }} width={400} />
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Box>
                        <Typography sx={{ fontWeight: 'bold' }} gutterBottom={2} variant='h3'>PRODETEC</Typography>
                        <Typography>
                            Bienvenue chez New Prodetec <br />
                            Votre imprimeur de choix en impression graphisme, supports publicitaires, objets décoratifs en résine epoxy et papeterie.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomeAbout
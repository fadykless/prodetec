import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function HomeAbout() {
    return (
        <Container sx={{ my: 4 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography sx={{ textAlign: 'center' }}>
                        <img src={'/images/elements/grand-format.jpg'} style={{ borderRadius: 6 }} width={400} />
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
                            Nous sommes motivés par une mission claire d'être la plus grande industrie de l'impression par l'innovation. <br />
                            Nous visons à être partenaire incontournable des entreprises qui cherchent à élever la présence de leur marque grâce à des solutions d'impression innovantes et durables.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomeAbout
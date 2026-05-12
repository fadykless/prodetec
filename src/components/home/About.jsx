import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function HomeAbout() {
    return (
        <Container sx={{ my: 2 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography>
                        <img src={'/about-home.jpg'} style={{ borderRadius: 20 }} width={500} />
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
                        <Typography gutterBottom={2} variant='h3'>Qui sommes-nous?</Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cumque, tempore error assumenda modi beatae, distinctio officiis quia in esse odio rem porro quod voluptas! Officiis architecto ratione rem nulla?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cumque, tempore error assumenda modi beatae, distinctio officiis quia in esse odio rem porro quod voluptas! Officiis architecto ratione rem nulla?
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomeAbout
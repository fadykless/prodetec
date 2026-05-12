'use client';

import React, { useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
    Paper,
    useTheme,
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

const servicesList = [
    "Impression numérique",
    "Impression offset",
    "Cartes de visite",
    "Flyers & brochures",
    "Bâches & roll-up",
    "Personnalisation textile",
    "Tampons & cachets",
];

export default function DemandeDevis() {
    const [selectedServices, setSelectedServices] = useState([]);
    const theme = useTheme()
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        quantity: "",
        details: "",
    });

    const handleCheckboxChange = (service) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter((s) => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = "Demande de devis - PRODETEC";
        const body = `
Nom : ${form.name}
Email : ${form.email}
Téléphone : ${form.phone}

Services demandés :
${selectedServices.join(", ")}

Quantité : ${form.quantity}

Détails supplémentaires :
${form.details}
`;

        window.location.href = `mailto:contact@printex.cd?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    };

    return (
        <Box
            sx={{
                background: "linear-gradient(135deg, #111, #1c1c1c)",
                minHeight: "100vh",
                py: 8,
            }}
        >
            <Container maxWidth="md">
                <Paper
                    elevation={6}
                    sx={{
                        p: 5,
                        borderRadius: 4,
                        background: "#fff",
                    }}
                >
                    <Box sx={{ textAlign: 'center' }} mb={4}>
                        <PrintIcon sx={{ fontSize: 80, color: theme.palette.primary.main }} />
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            Demande de devis
                        </Typography>
                        <Typography sx={{ mb: 4 }} variant="body1">
                            Remplissez le formulaire ci-dessous pour recevoir une estimation rapide.
                        </Typography>
                    </Box>

                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Nom complet"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Téléphone"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Quantité estimée"
                                    name="quantity"
                                    value={form.quantity}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid size={{ xs: 12 }}>
                                <Typography variant="h6" mb={1}>
                                    Services souhaités
                                </Typography>

                                {servicesList.map((service) => (
                                    <FormControlLabel
                                        key={service}
                                        control={
                                            <Checkbox
                                                checked={selectedServices.includes(service)}
                                                onChange={() => handleCheckboxChange(service)}
                                            />
                                        }
                                        label={service}
                                    />
                                ))}
                            </Grid>

                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label="Détails du projet"
                                    name="details"
                                    value={form.details}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid size={{ xs: 12 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    sx={{
                                        py: 1.5,
                                        fontWeight: "bold",
                                        fontSize: 16,
                                        borderRadius: 6
                                    }}
                                >
                                    Envoyer la demande
                                </Button>
                            </Grid>

                        </Grid>
                    </form>
                </Paper>
            </Container>
        </Box>
    );
}
import React from "react";
import { Box } from "@mui/material";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    return (
        <main>
            <Header />
            <Box sx={{ mt: { xs: 5, md: 10 } }}>{children}</Box>
            <Footer />
        </main>
    );
};

export default Layout;

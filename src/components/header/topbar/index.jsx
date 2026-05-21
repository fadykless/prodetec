'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Container,
  useTheme,
  alpha,
} from '@mui/material';

import { useEffect, useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import { menuList } from '../menuList';
import NavItem from './NavItem';
import { WhatsApp } from '@mui/icons-material';

export default function Topbar({ onSidebarOpen }) {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveLink(window.location.pathname);
    }
  }, []);

  const primaryGradient =
    "linear-gradient(90deg,#ff0f7b,#f89b29,#00c6ff)";

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        borderBottom: `1px solid ${alpha("#000", 0.06)}`,
        backdropFilter: "blur(10px)",
      }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>

          {/* Logo */}
          <Box
            component="a"
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img src="/logo.png" width={140} alt="logo" />
          </Box>

          {/* Mobile menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={onSidebarOpen}>
              <MenuIcon sx={{ color: "#111" }} />
            </IconButton>
          </Box>

          {/* Menu */}
          <Box
            sx={{
              flexGrow: 1,
              //ml: 4,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: 'center',
              gap: 1,
            }}
          >
            {menuList.map((page) =>
              page.items ? (
                <Box key={page.href} sx={{ mx: 1 }}>
                  <NavItem title={page.name} items={page.items} />
                </Box>
              ) : (
                <Button
                  key={page.href}
                  component="a"
                  href={page.href}
                  disableRipple
                  sx={{
                    textTransform: "capitalize",
                    color:
                      activeLink === page.href ? "#111" : "rgba(0,0,0,0.7)",
                    fontWeight: 600,
                    fontSize: 14,
                    position: "relative",
                    px: 1.5,
                    py: 1,

                    transition: "all .3s ease",

                    "&:hover": {
                      color: "#111",
                      background: "transparent",
                    },

                    "&::after":
                      activeLink === page.href
                        ? {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "20%",
                          width: "60%",
                          height: "3px",
                          borderRadius: 10,
                          background: primaryGradient,
                        }
                        : {},
                  }}
                >
                  {page.name}
                </Button>
              )
            )}
          </Box>

          {/* CTA */}
          <Button
            component="a"
            variant='outlined'
            href="tel:+243824504779"
            startIcon={<WhatsApp />}
            sx={{
              borderRadius: 999,
              textTransform: "none",
              fontWeight: 700,
              px: 2.5,
              py: 1,
              //color: "#fff",
              //background: primaryGradient,
              //boxShadow: "0 10px 25px rgba(255,15,123,0.2)",

              display: { xs: "none", md: "flex" },

              "&:hover": {
                opacity: 0.92,
              },
            }}
          >
            Nous contacter
          </Button>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
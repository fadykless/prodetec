'use client';

import { AppBar, Toolbar, Typography, Box, Button, TextField, IconButton, Drawer, useTheme, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import { menuList } from '../menuList';
import NavItem from './NavItem';

export default function Topbar({ onSidebarOpen }) {
  const theme = useTheme()

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : "");
  }, []);


  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white' }} elevation={0}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between', px: 6 }}>
          <Box sx={{ ml: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={() => onSidebarOpen()}
              aria-label="Menu"
              variant={"outlined"}
            >
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>
          </Box>
          <Typography component={'a'} href='/' variant="h6" sx={{ flexGrow: 1, textDecoration: 'none', textAlign: { xs: "center", md: "left" } }}>
            <img src={"/logo.png"} width={150} />
          </Typography>

          <Box sx={{
            ml: 2,
            flexGrow: 1,
            justifyContent: "flex-start",
            display: { xs: "none", md: "flex" },
          }}>
            {menuList.map((page) =>
              page.items ? (
                <Box key={page.href} sx={{ m: 3 }}>
                  <NavItem title={page.name} items={page.items} />
                </Box>
              ) : (
                <Button
                  component="a"
                  key={page.href}
                  href={page.href}
                  sx={{
                    textTransform: 'capitalize',
                    color:
                      activeLink === page.href
                        ? theme.palette.primary.main
                        : 'black',
                    fontSize: 15,
                    m: 1,
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {page.name}
                </Button>
              )
            )}
          </Box>
          <Button
            disableElevation
            variant='outlined' sx={{ borderRadius: 6, textTransform: 'capitalize' }}>Nous contacter</Button>
        </Toolbar>
      </Container>

    </AppBar>
  );
}
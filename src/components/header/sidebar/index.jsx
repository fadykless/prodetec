'use client';

import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Drawer,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";

import NavItem from "./NavItem";
import { menuList } from "../menuList";

const SidebarNav = ({ onClose, open, variant }) => {
  const theme = useTheme();

  const primaryGradient =
    "linear-gradient(90deg,#ff0f7b,#f89b29,#00c6ff)";

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      variant={variant}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: 300,
          background:
            "linear-gradient(135deg,#0f172a 0%, #111827 100%)",
          color: "#fff",
          borderRight: `1px solid ${alpha("#fff", 0.08)}`,
        },
      }}
    >
      <Box sx={{ height: "100%", py: 2 }}>

        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box
            component="a"
            href="/"
            onClick={onClose}
            sx={{
              display: "inline-flex",
              p: 1,
            }}
          >
            <img src="/logo-footer.png" alt="logo" width={140} />
          </Box>
        </Box>

        {/* Divider accent */}
        <Box
          sx={{
            height: "2px",
            width: "70%",
            mx: "auto",
            mb: 3,
            borderRadius: 10,
            background: primaryGradient,
          }}
        />

        {/* Menu */}
        <Box sx={{ px: 2 }}>
          {menuList.map((page) =>
            page.items ? (
              <Box key={page.href} sx={{ mb: 1 }}>
                <NavItem title={page.name} items={page.items} />
              </Box>
            ) : (
              <Button
                key={page.href}
                component="a"
                href={page.href}
                onClick={onClose}
                disableRipple
                sx={{
                  width: "100%",
                  justifyContent: "flex-start",
                  textTransform: "none",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 15,
                  py: 1.2,
                  px: 1.5,
                  borderRadius: 2,
                  transition: "all .3s ease",

                  "&:hover": {
                    color: "#fff",
                    background: alpha("#fff", 0.06),
                    transform: "translateX(6px)",
                  },

                  position: "relative",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 3,
                    height: 0,
                    borderRadius: 10,
                    background: primaryGradient,
                    transition: "all .3s ease",
                  },

                  "&:hover::before": {
                    height: "60%",
                  },
                }}
              >
                {page.name}
              </Button>
            )
          )}
        </Box>

        {/* Footer branding */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            width: "100%",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              color: alpha("#fff", 0.5),
            }}
          >
            Grandeur • Excellence • Innovation
          </Typography>

          <Box
            sx={{
              mt: 1,
              height: "2px",
              width: "50%",
              mx: "auto",
              borderRadius: 10,
              background: primaryGradient,
            }}
          />
        </Box>

      </Box>
    </Drawer>
  );
};

SidebarNav.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string,
};

export default SidebarNav;
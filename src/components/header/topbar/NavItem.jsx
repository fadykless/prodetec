"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NavItem = ({ title, id, items, colorInvert = false }) => {
  const theme = useTheme();
  const pathname = usePathname();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.currentTarget); // important pour MUI
    setOpenedPopoverId(popoverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const hasActiveLink = () => items.find((i) => i.href === pathname);
  const linkColor = colorInvert ? "common.black" : "text.primary";

  return (
    <Box>
      <Box
        aria-describedby={id}
        sx={{ display: 'flex', alignItems: "center", cursor: "pointer" }}
        onClick={(e) => handleClick(e, id)}
      >
        <Typography
          sx={{
            textTransform: "capitalize",
            color: linkColor,
            fontSize: 14,
            fontWeight:
              openedPopoverId === id || hasActiveLink() ? 700 : 400,
          }}
        >
          {title}
        </Typography>

        <ExpandMoreIcon
          sx={{
            ml: 0.5,
            width: 16,
            height: 16,
            transform:
              openedPopoverId === id ? "rotate(180deg)" : "none",
            color: linkColor,
          }}
        />
      </Box>

      <Popover
        elevation={3}
        id={id}
        open={openedPopoverId === id}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          "& .MuiPaper-root": {
            maxWidth: items.length > 12 ? 350 : 250,
            p: 2,
            mt: 2,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 2,
            borderBottomLeftRadius: 2,
            borderTop: `3px solid ${theme.palette.primary.main}`,
          },
        }}
      >
        <Grid container spacing={0.5}>
          {items.map((p, i) => (
            <Grid
              key={i}
              size={{ xs: items.length > 12 ? 6 : 12 }}
            >
              <Button
                component={Link}
                href={p.href}
                fullWidth
                onClick={handleClose}
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "capitalize",
                  color:
                    pathname === p.href
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  backgroundColor:
                    pathname === p.href
                      ? alpha(theme.palette.primary.main, 0.1)
                      : "transparent",
                  fontWeight:
                    pathname === p.href ? 600 : 400,
                }}
              >
                {p.title}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Popover>
    </Box>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  colorInvert: PropTypes.bool,
};

export default NavItem;
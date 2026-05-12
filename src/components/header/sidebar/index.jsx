'use client';
import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NavItem from "./NavItem";
import { menuList } from "../menuList";
import { Drawer, Typography, useTheme } from "@mui/material";

const SidebarNav = ({ onClose, open, variant }) => {
  const theme = useTheme();
  //const currentUser = auth.currentUser?.uid

  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: 280,
          backgroundColor: "paper",
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          padding: 1,
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
            width={1}
            paddingX={2}
            paddingY={1}
          >
            <Typography
              textAlign={"center"}
              component="a"
              sx={{ mr: 0.5 }}
              href={"/"}
            >
              <img src="/logo.png" alt="logo" width={150} />
            </Typography>
          </Box>
          <Box paddingX={2} paddingY={2}>
            {menuList.map((page) =>
              page.items ? (
                <Box key={page.href} sx={{ ml: 1, fontSize: 15 }}>
                  <NavItem title={page.name} items={page.items} />
                </Box>
              ) : (
                <Button
                  component="a"
                  key={page.href}
                  href={page.href}
                  sx={{
                    display: "block",
                    textTransform: 'Capitalize',
                    color: theme.palette.primary.main,
                    fontSize: 15,
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
        </Box>
      </Box>
    </Drawer>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;

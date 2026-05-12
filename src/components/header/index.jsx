import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import SidebarNav from './sidebar';
import Topbar from './topbar';


const Header = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    const [openSidebar, setOpenSidebar] = useState(false);

    const handleSidebarOpen = () => {
        setOpenSidebar(true);
    };

    const handleSidebarClose = () => {
        setOpenSidebar(false);
    };

    const open = isMd ? false : openSidebar;
    return (
        <main>
            <Topbar
                onSidebarOpen={handleSidebarOpen}
            />
            <SidebarNav
                onClose={handleSidebarClose}
                open={open}
                variant="temporary"
            />
        </main>
    )
}

export default Header

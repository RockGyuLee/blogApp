import React from 'react';
import { ThemeProvider } from "styled-components";
import {BrowserRouter as Router } from "react-router-dom";

import DesktopOrLaptop from "./devices/DeskOrLabtop";
import Tablet from "./devices/Tablet";
import Mobile from "./devices/Mobile";

import theme from "./theme.js";
import ScrollToTop from "./ScrollToTop";

import { useMediaQuery } from "react-responsive";

export default function App(){

    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1025 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return(
        <ThemeProvider theme={theme}>
            <Router>
                <ScrollToTop />
                {isDesktopOrLaptop && <DesktopOrLaptop/>}
                {isTablet && <Tablet/>}
                {isMobile && <Mobile/>}
            </Router>
        </ThemeProvider>
    )
}
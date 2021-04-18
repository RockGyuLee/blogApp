import React from 'react';
import { ThemeProvider } from "styled-components";
import theme from "./theme.js";
import {Test1, NavbarWrapper, Container} from "./components/Main"
export default function App(){
    return(
        <ThemeProvider theme={theme}>
            <Container height="10vh">
                Rlay
            </Container>
            <Container height="90vh" css={{backgroundColor : "red"}}>
                Content
            </Container>
        </ThemeProvider>
    )
}
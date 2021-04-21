import React from 'react';
import { ThemeProvider } from "styled-components";
import theme from "./theme.js";
import {Text, Container} from "./components/Main";
import Header from "./Header";
import PageSwitcher from "./router/PageSwitcher";

export default function App(){

    return(
        <ThemeProvider theme={theme}>
            <Header height="8vh"/>
            <PageSwitcher info={{iniPage: 'intro'}}/>
            {/* <Container height="92vh" css={{backgroundColor : "red"}}>
                Content
            </Container> */}
        </ThemeProvider>
    )
}
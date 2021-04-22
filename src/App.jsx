import React from 'react';
import { ThemeProvider } from "styled-components";
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";

import theme from "./theme.js";
import {Text, Container} from "./components/Main";
import Header from "./Header";
import PageSwitcher from "./router/PageSwitcher";

export default function App(){

    return(
        <ThemeProvider theme={theme}>
            <Router>
                <Header height="8vh"/>
                <Container height="92vh">
                    <PageSwitcher info={{iniPage: 'hq'}}/>
                </Container>
            </Router>
        </ThemeProvider>
    )
}
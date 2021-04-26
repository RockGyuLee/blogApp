import React from 'react';
import Header from "../Header";
import {Container} from "../components/Main";
import PageSwitcher from "../router/PageSwitcher";

function DesktopOrLaptop(props){
    return(
        <>
            <Header height="8vh"/>
            <Container height="92vh">
                <PageSwitcher info={{iniPage: 'hq'}} device={"desktop"}/>
            </Container>
        </>
    )
}

export default DesktopOrLaptop;
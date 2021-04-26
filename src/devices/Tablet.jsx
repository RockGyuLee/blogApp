import React from 'react';
import {HeaderTableOrMobile} from "../Header";
import {Container} from "../components/Main";
import PageSwitcher from "../router/PageSwitcher";

function Tablet(props){
    return(
        <>
            <HeaderTableOrMobile height="8vh"/>
            <Container height="92vh">
                <PageSwitcher info={{iniPage: 'hq'}}/>
            </Container>
        </>
    )
}

export default Tablet;
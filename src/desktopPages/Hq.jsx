import React from 'react';
import styled from "styled-components";

import { Container, Text } from "../components/Main";

const Span = styled(Text)`
    margin-top : 20px;
    color : ${({theme }) => theme.colors.black};
`

function HqIntro(props){
    return(
        <Container width="100vw" height="300px">
            <Container height="80px" css={{
                position : 'absolute',
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div>
                    <Span size="xxxl"> Myself </Span>
                </div>
            </Container>
        </Container>
    )
}

function Hq(props){
    return(
        <div>
            <div style={{width : "100%", height:"100%", backgroundColor : "black"}}>
                <img src='./imgs/r.png'/>
            </div>
            <HqIntro/>
        </div>
    )
}

export function TabletHq(props){
    return(
        <div>
            <div style={{width : "100%", height:"100%", backgroundColor : "black"}}>
                <div>테블릿 영역입니다.</div>
            </div>
            <HqIntro/>
        </div>
    )
}

export default Hq
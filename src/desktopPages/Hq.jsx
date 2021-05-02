import React from 'react';
import styled from "styled-components";

import { Container, Text } from "../components/Main";

const Span = styled(Text)`
    color : ${({theme }) => theme.colors.black};
`

function HqIntro(props){
    return(
        <Container width="100vw" height="300px" css={{
            position : 'relative',
            textAlign : 'center'
        }}>
            <div style={{marginTop : "20px"}}>
                <Span size="xxxl"> - Myself -</Span>
                <p>
                    Rlay라는 단어는 Rock + Play의 줄임말입니다.<br></br>
                    코딩하는 그 순간 순간이 놀이라고 생각하고 즐겁게 배우고 있습니다.
                </p>
            </div>
        </Container>
    )
}

function Hq(props){
    return(
        <div style={{overflow : 'scroll'}}>
            <div style={{width : "100%", height:"100%", backgroundColor : "black"}}>
                <img src='./imgs/r.png'/>
            </div>
            <HqIntro/>
        </div>
    )
}

export default Hq
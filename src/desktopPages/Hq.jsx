import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Typed from "react-typed";

import { Container, Text } from "../components/Main";

const Span = styled(Text)`
    color : ${({theme }) => theme.colors.black};
`

function HqIntro(props){

    const strArray =  [
        "코딩하는 순간을 즐기고 있습니다.",
        "다양한 사람, 새로운 기술들을 만나는걸 좋아합니다. :)",
        "완벽한 사람보다는 빈틈있는 사람이며 협업으로 더 나은 오늘과 내일을 보냅니다.",
    ];

    return(
        <Container width="100vw" height="300px" css={{
            position : 'relative',
            textAlign : 'center'
        }}>
            <div style={{marginTop : "20px"}}>
                <Span size="xxxl"> - Myself -</Span>
                <p>
                    Rlay라는 단어는 “락규가 즐거워한다.”를 <br></br>
                    영어이름 + 영단어의 조합 Rock + Play 를 합친 단어입니다.<br></br>
                    <br></br>
                    <Typed 
                        strings = {strArray}
                        startDelay = {500}
                        typeSpeed = {100}
                        backSpeed = {50}
                        loop
                    />
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
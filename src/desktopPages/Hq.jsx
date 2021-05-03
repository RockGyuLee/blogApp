import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Typed from "react-typed";

import { Container, Text } from "../components/Main";

const Span = styled(Text)`
    color : ${({theme }) => theme.colors.black};
`

const Ptag = styled.p`
    font-size : ${({size, theme}) => theme.fontSizes[size]};
    color : ${({color, theme}) => theme.colors[color] || theme.colors['black']}
`

const Inlineli = styled.li`
    display : inline-block;
`

const strArray =  [
    "코딩하는 순간을 즐기고 있습니다.",
    "다양한 사람, 새로운 기술들을 만나는걸 좋아합니다. :)",
    "완벽한 사람보다는 빈틈있는 사람이며 협업으로 더 나은 오늘과 내일을 보냅니다.",
];

const skills = [
    {
        name : "FrontEnd",
        img : "./imgs/front.png",
        contents : "HTML CSS JavaScript JQuery \n React ReactNative SPA 개발 \n AndroidStudio 개발"
    },
    {
        name : "BackEnd",
        img : "./imgs/back.png",
        contents : "SpringBoot NodeJs API  Django구현 \n MySQL DB 스키마 설계 \n"
    },
    {
        name : "Collaboration",
        img : "./imgs/collaboration.png",
        contents : "Git 버전관리 Webpack 모듈 번들러 사용 \n Firebase 플랫폼 사용\n Figma UI/UX 협업"
    }
]

function HqIntro(props){

    return(
        <Container width="1200px" height="500px" css={{
            position : 'relative',
            textAlign : 'center',
            margin : '0 auto'
        }}>
            {/* <div style={{marginTop : "20px"}}>
                <Span size="xxxl"> - Myself -</Span>
                <Ptag size="lg">
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
                </Ptag>
            </div> */}
            <div style={{marginTop : "20px"}}>
                <Span size="xxxl"> - Skills -</Span>
                <Ptag size="lg">
                    개발 파트별로 정리한 기술 스택입니다.<br></br>
                    분야별 기술에 대하여 더 자세한 내용은 소개 페이지에서 확인이 가능합니다.
                </Ptag>
                <ul>
                    {
                        skills.map( s => (
                            <Inlineli css={{width : '33%'}}>
                                <div style={{display : 'block'}}>
                                    <img src={s.img} width={"250px"} height={"250px"}/>
                                    <h3>{s.name}</h3>
                                </div>
                                <Ptag size="lg">
                                {
                                    s.contents.split('\n').map( line => (
                                        <>{line}<br/></>
                                    ))
                                }
                                </Ptag>
                            </Inlineli>
                        ))
                    }
                </ul>
            </div>
        </Container>
    )
}

function Hq(props){
    return(
        <div style={{overflow : 'scroll'}}>
            <div style={{
                position : 'relative', width : "100%", height:"500px", backgroundColor : "black",
                // backgroundImage : "url(/imgs/r.png)",
                // backgroundSize : "contain"
            }}>
                <div style={{float : 'right', margin : '50px 100px', width : '700px'}}>
                    <Ptag size="xl" color="white">
                        Rlay라는 단어는 “락규가 즐거워한다.”를 <br/>
                        영어이름 + 영단어의 조합 Rock + Play 를 합친 단어입니다.<br/>
                        <br/>
                        <Typed 
                            strings = {strArray}
                            startDelay = {500}
                            typeSpeed = {100}
                            backSpeed = {50}
                            loop
                        />
                    </Ptag>
                </div>
                <img src='./imgs/r.png'/>
                
            </div>
            <HqIntro/>
        </div>
    )
}

export default Hq
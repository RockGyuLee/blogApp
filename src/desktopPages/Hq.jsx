import React, {Fragment} from 'react';
import styled from "styled-components";
import Typed from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBuilding, faGamepad} from "@fortawesome/free-solid-svg-icons"

import { Container, Text, Flex } from "../components/Main";

const Span = styled(Text)`
    color : ${({color, theme }) => theme.colors[color] || theme.colors.main};
`

const FontIconMainColor = styled(FontAwesomeIcon)`
    color :  ${({theme }) => theme.colors.main};
`

const Title = styled.h3`
    color : ${({theme }) => theme.colors.main};
`

const ClickDiv = styled.div`
    cursor: pointer;
`

const Ptag = styled.p`
    font-size : ${({size, theme}) => theme.fontSizes[size]};
    color : ${({color, theme}) => theme.colors[color] || theme.colors['black']}
`

const Ul = styled.ul`
    margin-block-start : 2%;
    margin-block-end : 2%;
    margin-inline-start : 7%;
    margin-inline-end : 7%;
`

const Inlineli = styled.li`
    display : inline-block;
`

const Flexx = styled(Flex)`
    justify-content: space-evenly;
`

export const strArray =  [
    "코딩하는 순간을 즐기고 있습니다.",
    "다양한 사람, 새로운 기술들을 만나는걸 좋아합니다. :)",
    "완벽한 사람보다는 빈틈있는 사람이며 협업으로 더 나은 오늘과 내일을 보냅니다.",
];

export const skills = [
    {
        name : "FrontEnd",
        img : "./imgs/front.png",
        contents : "HTML · CSS · JavaScript · JQuery \n React · ReactNative · SPA 개발 \n AndroidStudio 개발",
        intro : [
            {
                name : "Html",
                img : "./imgs/front_html.png",
                text : "웹 페이지를 위한 마크업 언어"
            },
            {
                name : "Css ",
                img : "./imgs/front_css.png",
                text : "Html요소를 디자인하기 위한 언어"
            },
            {
                name : "JavaScript ",
                img : "./imgs/front_js.png",
                text : "웹 페이지를 동적으로 변경해주는 언어"
            },
            {
                name : "React ",
                img : "./imgs/front_react.png",
                text : "컴포넌트 기반으로 된 JavaScript 라이브러리 SPA(Single Page Application) 제작"
            },
            {
                name : "Android Studio ",
                img : "./imgs/front_aS.png",
                text : "안드로이드 전용 어플 제작 개발 환경"
            },
        ]
    },
    {
        name : "BackEnd",
        img : "./imgs/back.png",
        contents : "SpringBoot · NodeJs · Django API구현 \n MySQL DB 스키마 설계 \n",
        intro : [
            {
                name : "Java",
                img : "./imgs/back_java.png",
                text : "객체 지향적 프로그래밍 언어"
            },
            {
                name : "Spring ",
                img : "./imgs/back_spring.png",
                text : "자바 플랫폼을 위한 오픈 소스 프레임워크"
            },
            {
                name : "JavaScript ",
                img : "./imgs/front_js.png",
                text : "웹 페이지를 동적으로 변경해주는 언어"
            },
            {
                name : "React ",
                img : "./imgs/front_react.png",
                text : "컴포넌트 기반으로 된 JavaScript 라이브러리 SPA(Single Page Application) 제작"
            },
            {
                name : "Android Studio ",
                img : "./imgs/front_aS.png",
                text : "안드로이드 전용 어플 제작 개발 환경"
            },
        ]
    },
    {
        name : "Collaboration",
        img : "./imgs/collaboration.png",
        contents : "Git 버전관리 · Webpack 번들러 사용 \n Firebase 플랫폼 사용\n Figma UI/UX 협업",
        intro : [
            
        ]
    }
]

function HqIntro(props){

    return(
        <Container width="auto" height="auto" css={{
            position : 'relative',
            textAlign : 'center',
            margin : '0 auto'
        }}>
            <div style={{marginTop : "20px"}}>
                <Span size="xxxl"> - Skills -</Span>
                <Ptag size="lg">
                    개발 파트별로 정리한 기술 스택입니다.<br></br>
                    분야별 기술에 대하여 더 자세한 내용은 소개 페이지에서 확인이 가능합니다.
                </Ptag>
                <Ul>
                    {
                        skills.map( (s, idx) => (
                            <Inlineli key={idx} css={{width : '33%'}}>
                                <div style={{display : 'block'}}>
                                    <img src={s.img} width={"250px"} height={"250px"}/>
                                    <Title color='main'>{s.name}</Title>
                                </div>
                                <Ptag size="lg">
                                {
                                    s.contents.split('\n').map( (line, idx) => (
                                        <Fragment key={idx}>
                                            {line}<br/>
                                        </Fragment>
                                    ))
                                }
                                </Ptag>
                            </Inlineli>
                        ))
                    }
                </Ul>
            </div>
        </Container>
    )
}

function HqProject(props){
    return (
        <Container width="auto" height="auto" css={{
            position : 'relative',
            margin : '0 auto',
            backgroundColor : '#F2F2F2'
        }}>
            <Flexx>
                <ClickDiv style={{display : 'flex', width : '33%', border : "solid", borderWidth : 'thin', marginTop : '1%', marginBottom : '1%'}}>
                    <div style={{ marginTop : '1%', marginLeft : '1%', marginBottom : '1%', width : '70%'}}>
                        <Span size="xxxl">
                            회사 프로젝트<br/>
                        </Span>
                        <br/>
                        <Span size="lg" color="black">
                            회사에서 진행한 프로젝트입니다.<br/>
                            실제 운용되고 있는 프로그램이며 제품 운용중입니다.
                        </Span>
                        <br/>
                        <br/>
                        <Span size="lg" color="black">
                            더 보기 →
                        </Span>
                    </div>
                    <div style={{ display : 'flex', alignItems : 'center', justifyContent : 'center', margin : '1%', width : '30%', }}>
                        <FontIconMainColor icon = {faBuilding} size={"5x"}/>
                    </div>
                </ClickDiv>
                <ClickDiv style={{display : 'flex', width : '33%', border : "solid", borderWidth : 'thin', marginTop : '1%', marginBottom : '1%'}}>
                    <div style={{ marginTop : '2%', marginLeft : '1%', width : '70%'}}>
                        <Span size="xxxl">
                            Toy 프로젝트<br/>
                        </Span>
                        <br/>
                        <Span size="lg" color="black">
                            다양한 기술들을 접하고 개발한 포트폴리오입니다.<br/>
                            학습용 프로그램, 간단한 서비스들 개발 활동입니다. 
                        </Span>
                        <br/>
                        <br/>
                        <Span size="lg" color="black">
                            더 보기 →
                        </Span>
                    </div>
                    <div style={{ display : 'flex', alignItems : 'center', justifyContent : 'center', margin : '1%', width : '30%', }}>
                        <FontIconMainColor icon = {faGamepad} size={"5x"}/>
                    </div>
                </ClickDiv>
            </Flexx>
        </Container>
    )
}

function Hq(props){
    return(
        <div style={{overflow : 'scroll'}}>
            <div style={{
                position : 'relative', width : "100%", height:"500px", backgroundColor : "black",
            }}>
                <div style={{float : 'right', margin : '5%', width : '600px'}}>
                    <Ptag size="xl" color="white">
                        Rlay라는 단어는 < strong>“락규가 즐거워한다.”</strong>를 <br/>
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
                <img style={{position : 'absolute'}} src='./imgs/r.png'/>
            </div>
            <HqIntro/>
            <HqProject />
        </div>
    )
}

export default Hq
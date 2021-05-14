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
    font-size : ${({size, theme}) => theme.deskTopFontSizes[size]};
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
                text : "웹 페이지를 위한 마크업 언어.\n정적인 놈!"
            },
            {
                name : "Css ",
                img : "./imgs/front_css.png",
                text : "Html요소를 디자인하기 위한 언어!\n다양한 라이브러리가 있다!"
            },
            {
                name : "JavaScript ",
                img : "./imgs/front_js.png",
                text : "웹 페이지를 동적으로 변경해주는 언어!\n다양한 라이브러리들이 존재한다."
            },
            {
                name : "React ",
                img : "./imgs/front_react.png",
                text : "컴포넌트 기반으로 된 JavaScript 라이브러리.\n컴포넌트별로 작성하여 생산성과 유지보수에 용이하다."
            },
            {
                name : "Android Studio",
                img : "./imgs/front_aS.png",
                text : "안드로이드 전용 어플 제작 개발 환경!\n우리 모두 마음속에 어플 하나씩은 있잖아요?"
            },
        ]
    },
    {
        name : "BackEnd",
        img : "./imgs/back.png",
        contents : "SpringBoot · Django API구현 \n MySQL DB 스키마 설계 \n",
        intro : [
            {
                name : "Java",
                img : "./imgs/back_java.png",
                text : "객체 지향적 프로그래밍 언어.\n나에게 코딩의 재미를 알게해준 정말 고마운 언어."
            },
            {
                name : "Spring ",
                img : "./imgs/back_spring.png",
                text : "자바 플랫폼을 위한 오픈 소스 프레임워크. 서버측 렌더링을 담당해준다.\n알면 알수록 신기한 스프링!"
            },
            {
                name : "Django ",
                img : "./imgs/back_django.png",
                text : "Python으로 되어진 웹 프레임워크.\nRestApi를 통해서 데이터를 주고 받아봤는데 개발 속도가 스프링보다 확실히 빠르다!"
            },
            {
                name : "Mysql",
                img : "./imgs/back_mysql.png",
                text : "관계형데이터베이스에 적용되는 언어로 확장성, 보안성, 안정성이 높다.\n쿼리 속도 줄여나가는 재미를 알게되면 그 늪에서 헤어나오지 못한다.."
            }
        ]
    },
    {
        name : "Collaboration",
        img : "./imgs/collaboration.png",
        contents : "Git 버전관리 · Webpack 번들러 사용 \n Firebase 플랫폼 사용\n Figma UI/UX 협업",
        intro : [
            {
                name : "Git",
                img : "./imgs/colla_git.png",
                text : "협업에 무조건 필수 요소 git!!\n여러명과 또는 여러팀과 개발을 하는데 깃을 안쓴다? 이제는 상상도 하기 싫다! git 쵴오!"
            },
            {
                name : "Webpack ",
                img : "./imgs/colla_webpack.png",
                text : "다양한 파일들 어떻게 다 변환할꺼야??\n모르면 js, css만 쓰겠지만 다양한 라이브러리들을 한순간에 변환시켜주는데 안쓸거야? 웹풱!"
            },
            {
                name : "Firebase",
                img : "./imgs/colla_firebase.png",
                text : "인증, 데이터베이스, 푸시 알람, 내가 만든 API이런거 서버 만들고 그래야하는데 귀찮은거 다 Firebase가 해준다니까?\n시간 절약 효과 "
            },
            {
                name : "Figma",
                img : "./imgs/colla_figma.png",
                text : "프론트개발자가 디자인 신경 안쓰는건 옛말!\n이제 서로 피그마를 통해서 같이 만들어 나가면서 이야기하면 능률이 업그뤠이드!"
            }
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
                <Span size="lg"> - Skills -</Span>
                <Ptag size="lmd">
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
                                <Ptag size="md">
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
                        <Span size="lmd">
                            회사 프로젝트<br/>
                        </Span>
                        <br/>
                        <Span size="md" color="black">
                            회사에서 진행한 프로젝트입니다.<br/>
                            실제 운용되고 있는 프로그램이며 제품 운용중입니다.
                        </Span>
                        <br/>
                        <br/>
                        <Span size="sm" color="black">
                            더 보기 →
                        </Span>
                    </div>
                    <div style={{ display : 'flex', alignItems : 'center', justifyContent : 'center', margin : '1%', width : '30%', }}>
                        <FontIconMainColor icon = {faBuilding} size={"5x"}/>
                    </div>
                </ClickDiv>
                <ClickDiv style={{display : 'flex', width : '33%', border : "solid", borderWidth : 'thin', marginTop : '1%', marginBottom : '1%'}}>
                    <div style={{ marginTop : '1%', marginLeft : '1%', marginBottom : '1%', width : '70%'}}>
                        <Span size="lmd">
                            Toy 프로젝트<br/>
                        </Span>
                        <br/>
                        <Span size="md" color="black">
                            다양한 기술들을 접하고 개발한 포트폴리오입니다.
                            학습용 프로그램, 간단한 서비스들 개발 활동입니다. 
                        </Span>
                        <br/>
                        <br/>
                        <Span size="sm" color="black">
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
                    <Ptag size="md" color="white">
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
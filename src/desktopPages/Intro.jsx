import React, {Fragment} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faQuestionCircle, faCode , faHandshake} from "@fortawesome/free-solid-svg-icons"


import {Container, Text, Line} from '../components/Main'

const Span = styled(Text)`
    color : ${({color, theme }) => theme.colors['black'] || theme.colors.main};
`

const FontIconMainColor = styled(FontAwesomeIcon)`
    color :  ${({theme }) => theme.colors.main};
`

const CircleDiv = styled.div`
    display : grid;
    place-items : center;
    background-color : #F2F2F2;
    width : 200px;
    height : 200px;
    border-radius : 90px;
    margin:0 auto;
    font-size : ${({size, theme})=> theme.fontSizes[size]};
    vertical-align:middle;
`

const Ul = styled.ul`
    margin-block-start : 2%;
    margin-block-end : 2%;
    margin-inline-start : 5%;
    margin-inline-end : 5%;
`

const Inlineli = styled.li`
    display : inline-block;
`

const year = new Date().getFullYear();

const myInfo = [
    {
        Icon : <FontIconMainColor icon = {faSeedling} size={"5x"}/>,
        contents : '주니어\n개발자',
        msg : `사회에 나온지  ${year - 2019}년 밖에 안되는 새내기 개발자입니다. 
        내가 꿈꾸는 것을 실현시키는 직업의 매력에 빠져버려서 개발자의 길을 걷게되었습니다.`
    },
    {
        Icon : <FontIconMainColor icon = {faQuestionCircle} size={"5x"}/>,
        contents : '문제 해결 및\n과정',
        msg : `코딩뿐만이 아니라 사회를 살아가다보면 다양한 문제들을 마주하게 됩니다. 
        해당 문제에 최고의 해결방법을 찾으려고 노력합니다. 
        문제를 해결하는 방법에만 몰두하는게 아닌 해결에 도출되기까지의 과정도 중요시하게 생각합니다.`
    },
    {
        Icon : <FontIconMainColor icon = {faCode} size={"5x"}/>,
        contents : 'Dynamic한\n언어',
        msg : `Java로 처음 프로그래밍을 시작하여 객체 지향 프로그래밍에 대해서 알게되었습니다. Java로 기본초석을 다지며 다양한 Toy프로젝트들을 진행했습니다. 
        현재는 JavaScript를 공부하고 있으며 다양한 라이브러리 · FrontEnd에 관심을 많이 가지고 있습니다.`
    },
    {
        Icon : <FontIconMainColor icon = {faHandshake} size={"5x"}/>,
        contents : '서로의 신뢰와\n협업',
        msg : `무엇을 하던지 혼자서 하기란 지치고 매우 힘이 듭니다. 우리 서로를 신뢰하고 믿어줘야 더 좋은 협업, 좋은 제품이 나온다고 생각하고 지내고 있습니다. `
    }
]

// iconComp 아이콘, contents : 내용
function LiCircle({iconComp, contents}){
    return(
        <Inlineli css={{width : '25%'}}>
            <CircleDiv>
                {iconComp}
                <div>
                    {contents.split('\n').map((line, idx) => (
                        <Fragment key={idx}>
                            {line}<br/>
                        </Fragment>
                    ))}
                </div>
            </CircleDiv>
        </Inlineli>
    )
}

function Intro(props){
    return(
        <Container width="auto" height="auto" css={{
            margin : '2% 5%',
            display : 'flex',
            flexDirection : 'column',
        }}>
            <Span size="subTitleSize" css={{marginTop : '1%'}}> 
                다양한 경험을 하고 모든 일에 즐길 줄 아는 사람이 되기 위해서 노력하는<br/>
                개발자 이락규입니다.
            </Span>
            <Line css={{marginTop : '1.5%'}} color="backG"/>      
            <Span size="xxxl" css={{marginTop : '1.5%'}}>#나란 놈이란?</Span>
            <Span size="xl" css={{marginTop : '1%'}}>웹 화면을 통해서 사람들과 이야기하고 싶은 개발자 이락규입니다.</Span>
            <Container width="auto" height="20%" css={{
                position : 'relative',
                textAlign : 'center',
                marginTop : '3%'
            }}>
                <Ul>
                {
                    myInfo.map( (item, idx) => (
                        <LiCircle key={idx} iconComp={item.Icon} contents={item.contents} />
                    ))
                }
                </Ul>
            </Container>
            {
                myInfo.map((item, idx)=> (
                    <Container key={idx} width="100%" height="auto" css={{display : 'flex', marginTop : "3%"}}>
                        <Container width="15%" height="auto">
                            <Span size="xl">
                                {item.contents} :
                            </Span>
                        </Container>
                        <Container width="80%" height="auto">
                            <Span size="xl">
                                {item.msg}
                            </Span>
                        </Container>
                    </Container>
                ))
            }
            <Span size="xxxl" css={{marginTop : '5%'}}> 
                #기술 스택
            </Span>
            <Line css={{marginTop : '1.5%'}} color="backG"/>
        </Container>
    )
}

export default Intro
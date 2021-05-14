import React, {Fragment} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faQuestionCircle, faCode , faHandshake} from "@fortawesome/free-solid-svg-icons"

import {Container, Text, Line, Flex, Atag} from '../components/Main';
import {skills} from "./Hq";


const Span = styled(Text)`
    color : ${({color, theme }) => theme.colors['black'] || theme.colors.main};
`

const FontIconMainColor = styled(FontAwesomeIcon)`
    color :  ${({theme }) => theme.colors.main};
`

const AAtag = styled(Atag)`
    & : hover {
        color : gold;
    }
`

const CircleDiv = styled.div`
    display : grid;
    place-items : center;
    background-color : #F2F2F2;
    width : 150px;
    height : 150px;
    border-radius : 60px;
    margin:0 auto;
    font-size : ${({size, theme})=> theme.deskTopFontSizes[size]};
    vertical-align:middle;
`

const Ul = styled.ul`
    margin-block-end : 2%;
    margin-inline-start : 5%;
    margin-inline-end : 5%;
`

const Inlineli = styled.li`
    display : inline-block;
`

const Title = styled.h3`
    color : ${({theme }) => theme.colors.main};
`

export const year = new Date().getFullYear();

const myInfo = [
    {
        Icon : <FontIconMainColor icon = {faSeedling} size={"4x"}/>,
        contents : '주니어\n개발자',
        msg : `사회에 나온지  ${year - 2019}년 밖에 안되는 새내기 개발자입니다. 
            내가 꿈꾸는 것을 실현시키는 직업의 매력에 빠져서 개발자의 길을 걷게되었습니다.`
    },
    {
        Icon : <FontIconMainColor icon = {faQuestionCircle} size={"4x"}/>,
        contents : '문제 해결 및\n과정',
        msg : `코딩뿐만이 아니라 사회를 살아가다보면 다양한 문제들을 마주하게 됩니다. 
            해당 문제에 최고의 해결방법을 찾으려고 노력합니다. 또한
            문제를 해결하는 방법에만 몰두하는게 아닌 해결에 도출되기까지의 과정도 중요시하게 생각합니다.`
    },
    {
        Icon : <FontIconMainColor icon = {faCode} size={"4x"}/>,
        contents : 'Dynamic한\n언어',
        msg : `Java로 처음 프로그래밍을 시작하여 객체 지향 프로그래밍에 대해서 알게되었습니다. 
            Java로 기본초석을 다지며 다양한 Toy프로젝트들을 진행했습니다. 
            현재는 JavaScript를 공부하고 있으며, 다양한 라이브러리 · FrontEnd에 관심을 많이 가지고 있습니다.`
    },
    {
        Icon : <FontIconMainColor icon = {faHandshake} size={"4x"}/>,
        contents : '서로의 신뢰와\n협업',
        msg : `무엇을 하던지 혼자서 하기란 지치고 매우 힘이 듭니다. 
            서로를 신뢰하고 믿어야 더 좋은 협업이 가능하고 그 결과는 좋은 제품이 나온다고 생각하고 있습니다.`
    }
]

export const rlay = [
    {
        title : "열정",
        text : "내가 하는 일에 열정을 가지고 있습니다."
    },
    {
        title : "도전",
        text : "새로운 환경, 기술에 호의적이며 도전을 두려워하지 않고 열린 마음으로 생각합니다."
    },
    {
        title : "존중",
        text : "나도 최고이며, 상대방도 최고라고 생각합니다."
    }
]

export const blogText = `코딩을 하다보면 다양한 유형의 class나 method를 사용합니다. 
    자주 사용하는 클래스나 메서드는 내용을 잘 알고 있지만 한두번 사용한 메서드는 그때 당시에 알고있다고 넘어가지만 몇일이 지난후에 다시 보면 고개를 갸우뚱하게 됩니다.
    이러한 경험이 잦다보니 모든걸 기억하고 있지 못하니까 내가 경험한것을 기록 하자는 습관을 가지려고 블로그를 시작하게 되었죠!!`

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
            margin : '2% 14%',
            display : 'flex',
            flexDirection : 'column',
            paddingTop : '4%'
        }}>
            <Span size="lg" css={{marginTop : '1%'}}> 
                다양한 경험을 하고 모든 일에 즐길 줄 아는 사람이 되기 위해서 노력하는<br/>
                개발자 이락규입니다.
            </Span>
            <Line css={{marginTop : '1.5%'}} color="backG"/>      
            <Span size="lg" css={{marginTop : '2%'}}>#나의 4가지 Point</Span>
            <Span size="md" css={{marginTop : '1%'}}>나를 표현할 수 있는 핵심 키워드 4가지에 대하여 이야기해봐요!</Span>
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
                        <Container width="18%" height="auto">
                            <Span size="md">
                                {item.contents} :
                            </Span>
                        </Container>
                        <Container width="80%" height="auto">
                            <Span size="md">
                                {item.msg}
                            </Span>
                        </Container>
                    </Container>
                ))
            }
            <Line css={{marginTop : '1.5%'}} color="backG"/>
            <Span size="lg" css={{marginTop : '2%'}}> 
                #기술 스택
            </Span>
            <Span size="xxl" css={{marginTop : '1%'}}>
                실무에서 사용하여 프로젝트를 진행한 기술들과 다양한 Toy프로젝트를 통해서 배워나간 기술들을 나열합니다.<br/>
                또한, 기술들의 설명을 제 느낌으로 간단하게 적었습니다.
            </Span>
            <Flex css={{flexDirection : 'column'}}>
                {
                    skills.map( (skill, idx)=> (
                        <Container key={idx} width="100%" height="auto" css={{display : 'flex', marginBottom : '3%'}}>
                            <Container width="30%" height="auto" css={{
                                display : 'flex',
                                flexDirection : 'column',
                                justifyContent : 'center',
                                alignItems : 'center'
                            }}>
                                <img src={skill.img} width={"200px"} height={"200px"}/>
                                <br/>
                                <Span size="sm" css={{
                                    fontWeight : 'bold'
                                }}>{skill.name}</Span>
                            </Container>
                            <Ul css={{display : 'flex', flexWrap : 'wrap', width : "100%"}}>
                                {
                                    skill.intro.map( (item, iidx) => (
                                        <Inlineli key ={iidx} css={{display : 'flex', width : '50%', marginTop : '2%', marginRigth : '2%'}}>
                                            <div css={{display : 'grid', placeItems : 'center'}}>
                                                <img src={item.img}/>
                                            </div>
                                            <div css={{marginLeft : "5%", paddingRight : "5%"}}>
                                                <Span size="md">{
                                                    item.name
                                                }</Span>
                                                <br/>
                                                <Span size="sm">{
                                                    item.text.split('\n').map( (line , iiidx) => (
                                                        <Fragment key={iiidx}>
                                                            {line}<br/>
                                                        </Fragment>
                                                    ))
                                                }</Span>
                                            </div>
                                        </Inlineli>
                                    ))
                                }
                            </Ul>
                        </Container>
                    ))
                }
            </Flex>
            <Line css={{marginTop : '1.5%'}} color="backG"/>
            <Span size="lg" css={{marginTop : '2%'}}>#그래서 Rlay 너 정체가 뭐야?</Span>
            <Span size="lmd" css={{marginTop : '1%',}}>
                <AAtag target="_blank" href="https://m.blog.naver.com/PostList.nhn?blogId=rmfoszld" title="클릭하면 블로그를 구경하실 수 있어요!">
                    - 기억보다는 기록을 남기려고 블로그에서도 놀고 있어요!
                </AAtag>
            </Span>
            <Span size="md" css={{marginTop : '3%', paddingLeft : "3%", paddingBottom : "3%"}}>
                {blogText}
            </Span>
            <Span size="lmd" css={{marginTop : '1%'}}>
                - 살다보면 저와 생각이 다른 분들도 많이 있죠. 저는 3가지를 중점으로 살아가고 있습니다.
            </Span>
            {
                rlay.map((item, idx)=> (
                    <Container key={idx} width="100%" height="auto" css={{display : 'flex',marginTop : '3%', paddingLeft : "3%"}}>
                        <Container width="5%" height="auto">
                            <Span size="md">
                                {item.title} :
                            </Span>
                        </Container>
                        <Container width="80%" height="auto">
                            <Span size="md">
                                {item.text}
                            </Span>
                        </Container>
                    </Container>
                ))
            }
        </Container>
    )
}

export default Intro
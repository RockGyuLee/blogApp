import React, {useState, Fragment}  from 'react';
import styled from "styled-components";
import {Container, Text, Line, Flex, Atag, Span} from '../components/Main';

const Flexx = styled(Flex)`
    justify-content: center;
    align-items : center;
    flex-direction : column;
    margin-top : 5%;
`

function JumpGame(){
    
    const [isGameStart, setIsGameStart] = useState(false);


    const pressSpace = (e) => {
        console.log("게임 시작",e);

        e.keyCode == 32 && setIsGameStart(true);
    }


    return (
        <Fragment>
            {
                isGameStart ? 
                    <Container width="auto" height="100%" css={{
                        margin : '0% 5%',
                        display : 'flex',
                        flexDirection : 'column',
                        paddingTop : '4%',
                        backgroundColor : 'rgb(255,215,215)'
                    }}
                    tabIndex={0}
                    onKeyDown={(e)=>{console.log(e)}}
                    > </Container>
                : <Container width="auto" height="100%" css={{
                        margin : '0% 5%',
                        display : 'flex',
                        flexDirection : 'column',
                        paddingTop : '4%',
                        backgroundColor : 'rgb(255,98,98)'
                    }}
                    tabIndex={0}
                    onKeyDown={pressSpace}
                    >
                        <Flexx>
                            점프하여 블럭을 올라가는 게임입니다.<br/> 
                            점프는 space바, 움직이는건 키보드 화살표 키로 움직일 수 있습니다.
                        </Flexx>
                    </Container>
            }
        </Fragment>
        
    )
}

export default JumpGame;
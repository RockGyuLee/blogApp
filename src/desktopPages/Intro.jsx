import React from 'react';
import styled from 'styled-components';

import {Container, Text} from '../components/Main'

const Span = styled(Text)`
    color : ${({color, theme }) => theme.colors[color] || theme.colors.main};
`

function Intro(props){
    return(
        <Container width="auto" height="auto" css={{
            position : 'relative',
            textAlign : 'center',
            margin : '2% 25%'
        }}>
            <div style={{marginTop : "20px"}}>
                <Span size="xxxl" color="main"> 
                    즐기려고 노력하며 끊임없이 꿈 꾸며 새로운걸 알아가는 <br/>
                    개발자 이락규입니다.
                </Span>
            </div>
        </Container>
    )
}

export default Intro
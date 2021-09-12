import React  from 'react';

import {Container, Text, Line, Flex, Atag, Span} from '../components/Main';

function Project(){
    return(
        <Container width="auto" height="auto" css={{
            margin : '2% 14%',
            display : 'flex',
            flexDirection : 'column',
            paddingTop : '4%'
        }}>
            <Span size="lg" css={{marginTop : '1%'}}> 
                프로젝트
            </Span>
            <Span size="md" css={{marginTop : '1%'}}> 
                회사
            </Span>
            <Span size="md" css={{marginTop : '1%'}}> 
                토이
            </Span>
        </Container>
    )
}

export default Project;
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
                다양한 경험을 하고 모든 일에 즐길 줄 아는 사람이 되기 위해서 노력하는<br/>
                개발자 이락규입니다.
            </Span>
        </Container>
    )
}

export default Project;
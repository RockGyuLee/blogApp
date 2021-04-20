import React from 'react';
import styled from "styled-components";
import {Text, Container, Flex} from "./components/Main";

const HyperText = styled(Text)`
    
    cursor: pointer;
    &:hover {
        color : gold;
    }
`

function HeaderList({datas}){
    return(
        <div style={{marginTop : "25px"}}>
            {
                datas.map(item => {
                   return(
                        <HyperText css={{marginRight : "60px"}}>{item.displayName}</HyperText>
                   ) 
                })
            }
        </div>
    )
}

function Header(props){

    const categoryList = [
        {
            displayName : "소개",
            path : '',
        },{
            displayName : "프로젝트",
            path : '',
        },{
            displayName : "블로그",
            path : '',
        },{
            displayName : "깃허브",
            path : '',
        }
    ]
    return(
        <Container height={props.height} css={{position : "relative", margin : "0 auto"}}>
            <Flex css={{position : "absolute", top : "50%", transform : "translateY(-50%)"}}>
                <Text size={"titleSize"} css={{margin : "0px 50px"}}>Rlay</Text>
                <HeaderList datas={categoryList} />
            </Flex>
        </Container>
    )
}

export default Header
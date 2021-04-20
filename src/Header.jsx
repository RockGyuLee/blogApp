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
        <Flex css={{position : "absolute", verticalAlign: "middle"}}>
            {
                datas.map(item => {
                   return(
                        <HyperText css={{marginRight : "20px"}}>{item.displayName}</HyperText>
                   ) 
                })
            }
        </Flex>
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
        <Container height={props.height}>
            <Flex>
                <Text size={"titleSize"}>Rlay</Text>
                <Container width="100%" height="50%" margin="10px" >
                    <HeaderList datas={categoryList} />
                </Container>
            </Flex>
        </Container>
    )
}

export default Header
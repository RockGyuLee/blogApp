import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Text, Container, Flex} from "./components/Main";

const categoryList = [
    {
        displayName : "소개",
        path : '/intro',
    },{
        displayName : "프로젝트",
        path : '/project',
    },{
        displayName : "블로그",
        path : '/blog',
    },{
        displayName : "깃허브",
        path : '/github',
    }
]

const MobileContainer = styled(Container)`
    display : flex;
    align-items: center; 
    justify-content: space-between; 
    padding: 0 10px; 
`

const LinkTag = styled(Link)`
    text-decoration : none;
    color : ${({theme}) => theme.colors.black}
`

const Dropdown = styled.div`
    position: relative;
    display: inline-block;
`

const DropdownList = styled.div`
    display : inline-block;
    right : 0px;
    position: absolute;
    border : 3px solid black;
    background-color: #f9f9f9;
    min-width: 50px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    margin-right : 5%;
    margin-top : 5px;
    padding: 12px 16px;
    z-index: 1;
`

const HyperText = styled(Text)`
    cursor: pointer;
    &:hover {
        color : gold;
    }
`

function HeaderList({datas}){

    return(
        <div style={{marginTop : "25px", width : "90vw"}}>
            {
                datas.map((item, idx) => {
                   return(
                    <LinkTag key={idx} to={item.path}>
                        <HyperText 
                        css={{marginRight : "60px"}}
                        >
                            {item.displayName}
                        </HyperText>
                    </LinkTag>
                   ) 
                })
            }
        </div>
    )
}

function HeaderTableOrMobileList({datas}){
    const [isPagelistShow, setIsPagelistShow] = useState(false);
    console.log("is",isPagelistShow);
    return (
        <Dropdown style={{display : 'inline-block',  width : "80%"}}>
            <Flex css={{justifyContent : 'flex-end' , marginRight : '5%'}} onClick={()=> setIsPagelistShow(!isPagelistShow)}>
                { isPagelistShow ?  <FontAwesomeIcon icon={faTimes} size={"lg"}/> : <FontAwesomeIcon icon={faBars} size={"lg"}/> }
            </Flex>
                {
                    isPagelistShow && 
                    <DropdownList>
                        {
                            datas.map((item, idx) => {
                            return(
                                <LinkTag key={idx} to={item.path}>
                                    <HyperText 
                                        css={{marginRight : "60px"}}
                                    >
                                        {item.displayName}
                                    </HyperText>
                                </LinkTag>
                                
                            ) 
                            })
                        }
                    </DropdownList>
                }
        </Dropdown>
        
    )
}

function Header(props){
    return(
        <Container height={props.height} css={{position : "relative", margin : "0 auto"}}>
            <Flex css={{position : "absolute", top : "50%", transform : "translateY(-50%)"}}>
                <LinkTag to={"/"} css={{width : "10vw"}}>
                    <HyperText size={"titleSize"} css={{margin : "0px"}}>Rlay</HyperText>
                </LinkTag>
                <HeaderList datas={categoryList} />
            </Flex>
        </Container>
    )
}

export function HeaderTableOrMobile(props){
    return (
        <MobileContainer height={props.height} css={{position : "relative", margin : "0 auto"}}>
            <div style={{width : "20%"}}>
                <LinkTag to={"/"} >
                    <HyperText size={"titleSize"}>Rlay</HyperText>
                </LinkTag>
                
            </div>
            <HeaderTableOrMobileList datas={categoryList}/>
        </MobileContainer>
    )
}

export default Header
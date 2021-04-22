import React from 'react';
import styled from "styled-components";
import {Link, BrowserRouter as Router,Route, Switch} from "react-router-dom";
import {Text, Container, Flex, Atag} from "./components/Main";

import Hq from "./pages/Hq";
import Intro from "./pages/Intro";

const LinkTag = styled(Link)`
    text-decoration : none;
    color : ${({theme}) => theme.colors.black}
`

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
                // <Router>
                //     <Link to={"/"}>
                //         <HyperText 
                //         css={{marginRight : "60px"}}
                //         >
                //             home
                //         </HyperText>
                //     </Link>
                //     <Link to={"/intro"}>
                //         <HyperText 
                //         css={{marginRight : "60px"}}
                //         >
                //             소개
                //         </HyperText>
                //     </Link>
                //     <Switch>
                //         <Route exact path="/">
                //             <Hq/>
                //         </Route>
                //         <Route path="/intro">
                //             <Intro />
                //         </Route>
                //     </Switch>
                // </Router>
            }
        </div>
    )
}

function Header(props){

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
    return(
        <Container height={props.height} css={{position : "relative", margin : "0 auto"}}>
            <Flex css={{position : "absolute", top : "50%", transform : "translateY(-50%)"}}>
                <LinkTag to={"/"}>
                    <HyperText size={"titleSize"} css={{margin : "0px 50px"}}>Rlay</HyperText>
                </LinkTag>
                <HeaderList datas={categoryList} />
            </Flex>
        </Container>
    )
}

export default Header
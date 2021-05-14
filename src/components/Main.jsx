import React from "react";
import styled from "styled-components";

export const Container = styled.div`
    width :  ${(props)=>props.width || "100vw"};
    height : ${(props)=> props.height || "100vh"};
`

export const Flex = styled.div`
    display : flex;
`


export const Text = styled.span`
    font-size : ${({theme, size})=> theme.deskTopFontSizes[size]};
`

export const Atag = styled.a`
    text-decoration : none;
    color : ${({theme}) => theme.colors.black}
`

export const Line = styled.div`
    border : dashed 1px;
    color : ${({theme, color})=> theme.colors[color]};
`

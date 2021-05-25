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

export const RadiusImg = styled.img`
    border-radius : 5%;
`

export const ClickInlineli = styled.li`
    display : inline-block;
    cursor: pointer;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    position: relative;
    border: 1px solid black;
    
    &:hover {
        border: 1px solid red;
        margin-left : 1%;
        box-shadow : 10px 5px 5px red;
    }
`

export const ClickDiv = styled.div`
    cursor: pointer;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    position: relative;
    border: 1px solid black;
    
    &:hover {
        border: 1px solid red;
        margin-left : 1%;
        box-shadow : 10px 5px 5px red;
    }
`

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 500px;
  color: #fff;
  margin: 15px;
  font-size: 4em;
  flex-direction : column;
  cursor: pointer;
  position : relative;
`;

export const CarouselItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    width: 500px;
    color: #fff;
    margin: 15px;
    font-size: 4em;
    flex-direction : column;
    cursor: pointer;
    position : relative;

    &:hover ${DisplayOver}{
        width: inherit;
        backgroundColor: "rgba(0,0,0,.5)";
    };
    &:hover ${BigTitle}{
        color : gold;
    };
`

export const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
  zIndex: 2,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  padding: "20px 20px 0 20px",
  boxSizing: "border-box",
  opacity : 1,
});

export const BigTitle = styled.h2({
  textTransform: "uppercase",
  display : "grid",
  placeContent : "center",
  fontSize : "18px",
  fontFamily: "Helvetica",
});
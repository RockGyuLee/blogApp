import React from "react";
import styled from "styled-components";

export const Container = styled.div`
    width :  90px;
    height : ${(props)=> props.height};
    background-color: brown;
`
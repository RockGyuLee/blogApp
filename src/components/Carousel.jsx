import React, {useState, Fragment} from "react";
import styled from "styled-components";

import {CarouselItem, Span, DisplayOver, BigTitle} from "./Main";

function CItem({data, opacity}){
    return(
        <Fragment>
            <img src={data.img} height="70%" style={{opacity : opacity}}/>
            <Span size="smd" css={{paddingTop : '10%', opacity : opacity}}>제목 : {data.name}</Span>
            <Span size="smd" css={{marginTop : '1%', opacity : opacity}}> 날짜 : {data.date}</Span>
            <Span size="smd" css={{paddingBottom : '5%', opacity : opacity}}> 스킬 : {data.skill}</Span>
        </Fragment>
    )
}

function CarouselBody({data}){

    const [mouseIn, setMouseIn] = useState(false);

    const changeMouseIn = (evt) => {
        setMouseIn(true);
    };

    const changeMouseOut = (evt) => {
        setMouseIn(false);
    };


    return (
        <CarouselItem onMouseEnter={changeMouseIn} onMouseLeave={changeMouseOut}>
            <CItem data={data} opacity={ mouseIn ? 0.3 : 1 }/>
            {
                mouseIn 
                ? 
                <DisplayOver>
                    <BigTitle>{data.contents}</BigTitle>
                </DisplayOver> 
                : 
                <></>
            }
        </CarouselItem>
    )
}

export default CarouselBody;
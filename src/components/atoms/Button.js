import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { ifProp, prop } from "styled-tools";


const NormalStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    font-size: 16px;
    font-weight: 600;

    background-color: ${prop("color", "lightgray")} ;
    width: ${ifProp({ size: "large" }, "300px", "150px")} ;
    height: ${ifProp({ size: "large" }, "100px", "50px")} ;
    border-radius: ${ifProp({ size: "large" }, "50px", "25px")} ;
    border: 2px solid black;

    margin: 3px;
    transition: 0.5s all;
    
    &:hover{
        color: white;
        background-color: black;
    }
`

export const NormalButton = styled.button`${NormalStyle}`
export const NormalLink = styled(Link)`${NormalStyle}`

export const CounterButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    font-size: 16px;
    font-weight: 600;

    background-color: ${prop("color", "lightgray")} ;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid black;

    margin: 3px;
    transition: 0.5s all;

    &:hover{
        color: white;
        background-color: black;
    }
`


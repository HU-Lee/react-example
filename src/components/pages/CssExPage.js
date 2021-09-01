import React from 'react'
import styled from 'styled-components'
import { NormalLink } from '../atoms/Button'
import { Wrapper } from '../atoms/Container'

const arr = [0,1,2,3,4,5,6,7,8,9]

function CssExPage() {
    return (
        <>
            <h1>CSS</h1>
            <a href="https://github.com/HU-Lee/react-example/blob/main/src/components/pages/CssExPage.js" target="_blank" rel="noreferrer">
                <h3>&#128279; 원본 소스 보기</h3>
            </a>
            <h3>1. Extended Border</h3>
            <Wrapper>
                <ExtendedDiv/>
            </Wrapper>
            <h3>2. Grid</h3>
            <a href="https://studiomeal.com/archives/533" target="_blank" rel="noreferrer">
                <h3>&#128279; 외부 링크 : 이번에야말로 CSS Grid를 익혀보자</h3>
            </a>
            <GridContainer>
                {arr.map(a => (
                    <GridItem key={a}/>
                ))}
            </GridContainer>
            <Wrapper>
                <NormalLink to="/" color="lightblue">Home</NormalLink>
            </Wrapper>
        </>
    )
}

export default CssExPage

const ExtendedDiv = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
    margin-top: 30px;
    margin-bottom:  30px;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: -100px;
        width: calc(100% + 200px);
        height: 100%;
        border-top: 1px solid blue;
        border-bottom: 1px solid blue;
        z-index: -1;
    }

    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: -30px;
        height: calc(100% + 60px);
        width: 100%;
        border-left: 1px solid blue;
        border-right: 1px solid blue;
        z-index: -1;
    }
`

const GridContainer = styled.div`
    max-width: 400px;
    display: grid;
    margin: 0 auto;

    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: minmax(40px, auto);
    gap: 3px;

    div:nth-child(4n+1), div:nth-child(4n+4) {
        grid-column: 3 span;
    }
    div:nth-child(4n+2), div:nth-child(4n+3) {
        grid-column: 2 span;
    }
`
const GridItem = styled.div`
    border: 2px solid black;
    &:hover {
        background-color: purple;
    }
`
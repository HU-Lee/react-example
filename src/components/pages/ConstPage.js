import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { CounterButton, NormalLink } from '../atoms/Button'
import { Wrapper } from '../atoms/Container'

function ConstPage() {

    let count1 = 1

    const Counter1 = (i) => {
        count1 += i
    }

    const [count2, setCount2] = useState(1)

    const count3 = useRef(1)

    const Counter3 = (i) => {
        count3.current += i
    }

    return (
        <>
            <h1>useRef, useState</h1>
            <a href="https://github.com/HU-Lee/react-example/blob/main/src/components/pages/ConstPage.js" target="_blank" rel="noreferrer">
                <h3>&#128279; 원본 소스 보기</h3>
            </a>
            <h4>1. 일반 변수</h4>
            <Wrapper>
                <CounterButton onClick={() => Counter1(-1)}>-1</CounterButton>
                <BigText>{count1}</BigText>
                <CounterButton onClick={() => Counter1(1)}>+1</CounterButton>
            </Wrapper>
            <h4>2. useState</h4>
            <Wrapper>
                <CounterButton onClick={() => setCount2(count2-1)} color="lightgreen">-1</CounterButton>
                <BigText>{count2}</BigText>
                <CounterButton onClick={() => setCount2(count2+1)} color="lightgreen">+1</CounterButton>
            </Wrapper>
            <h4 style={{marginBottom:0}}>3. useRef</h4>
            <h5 style={{margin:5}}>당연히 요소 참조용으로 쓸 수도 있음!</h5>
            <Wrapper>
                <CounterButton onClick={() => Counter3(-1)} color="lightpink">-1</CounterButton>
                <BigText>{count3.current}</BigText>
                <CounterButton onClick={() => Counter3(1)} color="lightpink">+1</CounterButton>
            </Wrapper>
            <h4>useState는 매 번 렌더링</h4>
            <h4>useRef는 렌더링이 되지 않지만 값은 변하는 중</h4>
            <Wrapper>
                <NormalLink to="/" color="lightblue">Home</NormalLink>
            </Wrapper>
        </>
    )
}

export default ConstPage

const BigText = styled.b`
    font-size: 40px;
    margin: 0 30px 0 30px;
`
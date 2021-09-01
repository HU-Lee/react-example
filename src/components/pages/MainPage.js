import React from 'react'
import { NormalButton, NormalLink } from '../atoms/Button'
import { Wrapper } from '../atoms/Container'

function MainPage() {
    return (
        <>
            <h1>Styled-tools 사용 예시</h1>
            <a href="https://www.npmjs.com/package/styled-tools" target="_blank" rel="noreferrer">
                <h3>&#128279; npm - styled-tools</h3>
            </a>
            <a href="https://github.com/HU-Lee/react-example/blob/main/src/components/pages/MainPage.js" target="_blank" rel="noreferrer">
                <h3>&#128279; 원본 소스 보기</h3>
            </a>
            <Wrapper>
                <NormalButton size="large">큰 버튼</NormalButton>
                <NormalButton>작은 버튼</NormalButton>
                <NormalButton color="red">빨간 버튼</NormalButton>
            </Wrapper>
            <h2>기타 페이지</h2>
            <Wrapper>
                <NormalLink to="/intl" color="lightblue">React Intl</NormalLink>
                <NormalLink to="/css" color="lightblue">CSS</NormalLink>
                <NormalLink to="/const" color="lightblue">useRef, useState</NormalLink>
                <NormalLink to="/delay" color="lightblue">지연 초기화, useEffect</NormalLink>
            </Wrapper>
        </>
    )
}

export default MainPage

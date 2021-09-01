import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { NormalLink } from '../atoms/Button'
import { Wrapper } from '../atoms/Container'

function DelayPage() {

    const [word, setWord] = useState(() => {
        setTimeout(() => {
            setWord("3초가 되어 데이터가 왔습니다.")
        }, 3000)
    })

    const [Data, setData] = useState("데이터가 5초 뒤에 옵니다.")

    const getAsyncData = async () => {
        return new Promise(resolve => {
            setTimeout(() => {
              resolve('useEffect에서 데이터가 왔습니다!');
            }, 5000);
        });
    } 

    useEffect(() => {
        async function fetchMyData() {
            let response = await getAsyncData()
            setData(response)
        }
        fetchMyData()
    }, [])

    return (
        <>
            <h1>지연 초기화, useEffect</h1>
            <a href="" target="_blank" rel="noreferrer">
                <h3>&#128279; 원본 소스 보기</h3>
            </a>
            <br/>
            <h3>1. 지연 초기화</h3>
            <h2 style={{color:"green"}}>{word || "문자 로딩중"}</h2>
            <br/>
            <br/>
            <h3>2. useEffect 비동기 로드</h3>
            <h2 style={{color:"green"}}>{Data}</h2>
            <h4 style={{marginBottom:0}}>&#10003; cleanup Function</h4>
            <h4 style={{margin:2}}>unmount 됐을 때, 그리고 useEffect 실행 바로 직전에 실행</h4>
            <Wrapper>
                <NormalLink to="/" color="lightblue">Home</NormalLink>
            </Wrapper>
        </>
    )
}

export default DelayPage

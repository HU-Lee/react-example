import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { CounterButton, NormalLink } from '../atoms/Button'
import { Wrapper } from '../atoms/Container'

function IntlPage({lang, changeFunc}) {

    const { formatMessage } = useIntl()
    const name = formatMessage({id: "name"})
    const hobby = formatMessage({id: "hobby"})


    return (
        <>
            <h1>React-Intl</h1>
            <a href="https://www.npmjs.com/package/react-intl" target="_blank" rel="noreferrer">
                <h3>&#128279; npm - react-intl</h3>
            </a>
            <a href="https://github.com/HU-Lee/react-example/blob/main/src/components/pages/IntlPage.js" target="_blank" rel="noreferrer">
                <h3>&#128279; 원본 소스 보기</h3>
            </a>
            <Wrapper>
                <CounterButton onClick={() => changeFunc("ko")}>KO</CounterButton>
                <CounterButton onClick={() => changeFunc("en")}>EN</CounterButton>
            </Wrapper>
            <h3>1.기본</h3>
            <FormattedMessage id="name" tagName="h2"/>
            <br/>
            <h3>2.포맷</h3>
            <FormattedMessage id="sentence" tagName="h2"
                values={{
                    name: name,
                    hobby: hobby,
                    url: (
                        <>
                            <br/>
                            <a href="https://www.naver.com" target="_blank" rel="noreferrer">
                                &#128279; WOW!!!
                            </a>
                        </>
                    )
                }}
            />
            <br/>
            <h3>3. String 사용하기</h3>
            <h2><b style={{color:'red'}}>{name}</b> &#10084; {hobby}</h2>
            <Wrapper>
                <NormalLink to="/" color="lightblue">Home</NormalLink>
            </Wrapper>
        </>
    )
}

export default IntlPage

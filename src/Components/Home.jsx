import React from 'react'
import styled from 'styled-components'
const Header = styled.header`
    position: absolute;
    height: 100vh;
    width: 100%;
    display: grid;
    place-content: center;
    
    `
const Heading = styled.h1`
    font-family: 'Poiret One', cursive;
    font-weight: 100;
    color: #fff;
    text-align: center;
    font-size: clamp(2rem, 8vw, 8rem);
    position: relative;
    &::after {
        content: "Full-Stack Web Developer";
        position: absolute;
        font-size: clamp(.5rem, 1vw, 1rem);
        display: block;
        padding-top: 5px;
        border-top: 2px solid #1800f1;
        right: 0;
        font-family: 'Sawarabi Gothic', sans-serif;
}
`

export default function Home() {
  return (
    <Header>
        <Heading>Dominik Vyroubal</Heading>
    </Header>
  )
}

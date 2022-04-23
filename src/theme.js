import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  width: 100%;
  z-index: 10;
`;
export const Div = styled.div`
  width: 100%;
`
export const Paragraph = styled.p`
  color: #fff;
  z-index: 10;
  margin-top: 1rem;
  font-family: 'Roboto', sans-serif;
  color: #000;
  font-size: 1.2rem;
`
export const ClipContainer = styled.div`
  width: 100%;
  clip-path: polygon(0 100%, 100% 16%, 100% 0, 0 0);
  background-color: #000;
  height: 10rem;
`
export const TextContainer = styled.section`
  width: 50%;
  margin: 10rem auto;
  background-color: #fff;
`
export const Span = styled.span`
  color: #1800f1;
  font-weight: 700;
`
export const Heading2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  font-weight: 900;
  width: fit-content;  
  position: relative;
  z-index: 0;
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    height: 55%;
    width: 100%;
    left: 5px;
    top: 12px;
    background-color: #411bfd;
  }
`
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  padding-bottom: 5rem;
  margin-top: 9rem;
  z-index: 20;
`;
const Informations = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  margin-top: 3rem;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;
  max-width: 50rem;
`;
const Contact = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  position: relative;
`;
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 1rem;
`;
const Link = styled.a`
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.4rem;
`;
const IconContainer = styled.div`
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;

`;
const WaveContainer = styled.div`
  height: 10rem;
  z-index: -1;
  position: relative;
  & > svg {
    position: absolute;
  }
`;

export default function FooterPart() {
  return (
    <>
      <WaveContainer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1800f1"
            fill-opacity="1"
            d="M0,64L48,96C96,128,192,192,288,218.7C384,245,480,235,576,208C672,181,768,139,864,149.3C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill-opacity="1"
            d="M0,256L48,266.7C96,277,192,299,288,298.7C384,299,480,277,576,229.3C672,181,768,107,864,112C960,117,1056,203,1152,202.7C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </WaveContainer>
      <Footer>
        <FooterContainer>
          <Contact>Let`s contact me!</Contact>
          <Informations>
            <Container>
              <Link href="https://github.com/Werfmon">
                <IconContainer>
                  <FontAwesomeIcon size="3x" icon={faGithub} />
                </IconContainer>
                GitHub
              </Link>
              <Link href="mailto:d.vyroubal.w@gmail.com">
                <IconContainer>
                  <FontAwesomeIcon size="3x" icon={faEnvelope} />
                </IconContainer>
                E-mail
              </Link>
              <Link href="https://www.instagram.com/dominik56_/">
                <IconContainer>
                  <FontAwesomeIcon size="3x" icon={faInstagram} />
                </IconContainer>
                Instagram
              </Link>
            </Container>
          </Informations>
        </FooterContainer>
      </Footer>
    </>
  );
}

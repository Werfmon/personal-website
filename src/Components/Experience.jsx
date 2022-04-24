import React from "react";
import styled from "styled-components";
const ExperienceSection = styled.section`
  background-color: #000;
  width: 100%;
  padding-block: 5rem;
`;
const ClipExperienceSection = styled.div`
  clip-path: polygon(0 0, 100% 69%, 100% 100%, 0% 100%);
  background-color: #000;
  width: 100%;
  height: 15rem;
`;

const ExperienceContainer = styled.div`
  box-sizing: border-box;
  height: 30rem;
  width: 20rem;
  background: linear-gradient(140deg, #1414158b 0%, #0d0f15 10%, #0e0e0e 90%, #151515 100%);
  box-shadow: 3px 3px 10px #0c0c0c;
  padding: 2rem;
  border-radius: 10px;
`;
const HeadingExperience = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  font-weight: 900;
  margin: 0 auto;
  position: relative;
  margin-bottom: 10rem;
  z-index: 0;
  color: #fff;
  width: fit-content;
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    height: 55%;
    width: 100%;
    left: 12px;
    top: 20px;
    background-color: #4d06e6;
  }
`;
const ExperienceBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  gap: 5rem;
  margin: 0 auto;
  justify-content: center;
`;
const ExperienceBox = styled.div`
  width: 90%;
  margin-block: 2rem;
  border: 2px #ffffff solid;
  background-color: #18171d;
  margin-left: -60px;
  border-radius: 10px;
`;
const ContainerHeading = styled.h3`
  color: #fff;
  font-family: "Roboto", sans-serif;
`;
const ExperienceText = styled.p`
  color: #fff;
  padding: 10px;
  font-family: "Roboto", sans-serif;
`;
const ProgressBar = styled.div`
  width: 10rem;
  height: .7rem;
  border-radius: 10px;
  position: relative;
  &::after{
    content: '';
    position: absolute;
    height: 100%;
    width: calc(100% * ${props => props.length});
    background-color: #1800f1;
    border-radius: 10px;
  }
`;
const ProgessBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 1rem;
`;
const ProgessBarText = styled.h4`
  color: #fff;
  font-family: "Roboto", sans-serif;
  margin-right: 10px;
  font-weight: 100;
`
export default function Experience() {
  return (
    <>
      <ClipExperienceSection></ClipExperienceSection>

      <ExperienceSection>
        <HeadingExperience>Experience</HeadingExperience>
        <ExperienceBoxContainer>
          <ExperienceContainer>
            <ContainerHeading>Web development</ContainerHeading>
            <ExperienceBox>
              <ExperienceText>
                On FE a I have experience with React.js, Next.js
                and other else, on backend I worked with PHP, Express.js
              </ExperienceText>
            </ExperienceBox>
            <ProgessBarContainer>
              <ProgessBarText>HTML</ProgessBarText>
              <ProgressBar length=".8"></ProgressBar>
            </ProgessBarContainer>
            <ProgessBarContainer>
              <ProgessBarText>CSS</ProgessBarText>
              <ProgressBar length=".8"></ProgressBar>
            </ProgessBarContainer>
            <ProgessBarContainer>
              <ProgessBarText>JavaScript</ProgessBarText>
              <ProgressBar length=".9"></ProgressBar>
            </ProgessBarContainer>
            <ProgessBarContainer>
              <ProgessBarText>React</ProgessBarText>
              <ProgressBar length=".8"></ProgressBar>
            </ProgessBarContainer>
            <ProgessBarContainer>
              <ProgessBarText>PHP</ProgessBarText>
              <ProgressBar length=".6"></ProgressBar>
            </ProgessBarContainer>
            <ProgessBarContainer>
              <ProgessBarText>SQL</ProgessBarText>
              <ProgressBar length=".7"></ProgressBar>
            </ProgessBarContainer>
          </ExperienceContainer>
          <ExperienceContainer>
            <ContainerHeading>Networking</ContainerHeading>
            <ExperienceBox>
              <ExperienceText>
                I am still learning configuration LAN techniques like NAT, Routing, addresses and other staff
              </ExperienceText>
            </ExperienceBox>
            <ProgessBarContainer>
              <ProgessBarText>Theory</ProgessBarText>
              <ProgressBar length=".4"></ProgressBar>
            </ProgessBarContainer>
            <ProgessBarContainer>
              <ProgessBarText>Building</ProgessBarText>
              <ProgressBar length=".5"></ProgressBar>
            </ProgessBarContainer>
            <ProgessBarContainer>
              <ProgessBarText>CISCO IOS</ProgessBarText>
              <ProgressBar length=".5"></ProgressBar>
            </ProgessBarContainer>
            <ProgessBarContainer>
              <ProgessBarText>Security</ProgessBarText>
              <ProgressBar length=".3"></ProgressBar>
            </ProgessBarContainer>
          </ExperienceContainer>
          <ExperienceContainer>
            <ContainerHeading>Other</ContainerHeading>
            <ExperienceBox>
              <ExperienceText>
                Okey, i also have some knowlange with libraries and tools 
              </ExperienceText>
            </ExperienceBox>
            <ProgessBarContainer>
              <ProgessBarText>Arduino</ProgessBarText>
              <ProgressBar length=".5"></ProgressBar>
            </ProgessBarContainer>
            <ProgessBarContainer>
              <ProgessBarText>Doctrine</ProgessBarText>
              <ProgressBar length=".3"></ProgressBar>
            </ProgessBarContainer>
            <ProgessBarContainer>
              <ProgessBarText>JS libraries</ProgessBarText>
              <ProgressBar length=".7"></ProgressBar>
            </ProgessBarContainer>
            <ProgessBarContainer>
              <ProgessBarText>Linux</ProgessBarText>
              <ProgressBar length=".6"></ProgressBar>
            </ProgessBarContainer>
            <ProgessBarContainer>
              <ProgessBarText>Nmap</ProgessBarText>
              <ProgressBar length=".6"></ProgressBar>
            </ProgessBarContainer>
            <ProgessBarContainer>
              <ProgessBarText>Git</ProgessBarText>
              <ProgressBar length=".8"></ProgressBar>
            </ProgessBarContainer>
          </ExperienceContainer>
        </ExperienceBoxContainer>
      </ExperienceSection>
    </>
  );
}

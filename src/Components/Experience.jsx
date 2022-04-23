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
  background: linear-gradient(to right bottom, #000, #0c0c0c);
  padding: 2rem;
  border: 2px solid #f8f8f8;
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
    background-color: #411bfd;
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
  border: 3px #1800f1 solid;
  margin-left: -60px;
  background-color: #040404;
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
  border: 2px solid #b9b9b9;
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
                On FE a i have experience with React.js, Next.js
                and other else, on backend i worked with PHP, Express.js
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
          </ExperienceContainer>
          <ExperienceContainer>
            <ContainerHeading>Other</ContainerHeading>
          </ExperienceContainer>
        </ExperienceBoxContainer>
      </ExperienceSection>
    </>
  );
}

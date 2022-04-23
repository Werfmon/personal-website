import React from "react";
import { Paragraph, ClipContainer, TextContainer, Span, Heading2 } from "../theme";

export default function About() {
  return (
    <>

    <ClipContainer>
     </ClipContainer>
      {/* <Paragraph>
      Okey, takže jmenuju se Dominik "werfmon" Vyroubal, jsem studentem střední
      průmyslové školy v Ostravě, již třetím rokem pronikám čím dál více do
      světa technologií. Začínal jsem programovat v C, později v Jave, za rok
      2021 jsem vyměnil hodně jazyků týkajících se ať už mikrokontrolerů,
      webového či mobilního vývoje. Aktuálně se věnuju Ethickému hackování a
      sítím na straně CISCA a snažím se o certifikaci CCNA7 :). Hlavním
      favoritem je u mě stále webový vývoj, rychle a dynamicky se rozvíjí, je to
      něco co má stále větší potenciál. 
    </Paragraph> */}
    <TextContainer>
      <Heading2>About me</Heading2>
      <Paragraph>So, my name is Dominik <Span>"werfmon"</Span> Vyroubal</Paragraph>
      <Paragraph>
        I am a student of Technology High School in Ostrava already the third
        year of study I am still entrying into world of technologies.
      </Paragraph>
      <Paragraph>
        I started with C language, later with Java, in year 2021 I tryed many
        languages concerning microcontrollers, web development, mobile
        development.
      </Paragraph>
      <Paragraph>
        Already I am interested into Ethical hacking and CISCO Networking
        certification (CCNA7).
      </Paragraph>
      <Paragraph>
        My main priority is still web development, its evolving fast and
        dynamically, its something that has more and more potential.
      </Paragraph>
    </TextContainer>
    </>
  );
}

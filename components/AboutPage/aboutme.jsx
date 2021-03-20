import React from "react";
import {
  AboutContainer,
  TextDiv,
  AboutDiv,
  Text,
  Title,
} from "./aboutme.styled";

export const Aboutme = () => {
  return (
    <AboutContainer>
      <AboutDiv>
        <Title>about me</Title>
      </AboutDiv>
      <TextDiv>
        <Text>Hi, I'm Vinh Thong👋!</Text>
      </TextDiv>
      <TextDiv>
        {/* WHO AM I? */}

        <Text>
          I am a 20 year Full-Stack Developer based in Berlin, Germany.
        </Text>
        <Text>Currently I'm doing my Bachelor in engineering and</Text>
        <Text>computational science in Berlin.</Text>
      </TextDiv>
      {/* WHAT I DO */}
      <TextDiv>
        <Text>
          I passionately create high performant websites built with NextJS.
        </Text>
        <Text></Text>
      </TextDiv>
      {/* WHY I DO IT */}
      <TextDiv>
        <Text>I love it</Text>
      </TextDiv>
    </AboutContainer>
  );
};

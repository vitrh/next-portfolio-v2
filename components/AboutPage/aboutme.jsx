import React from "react";
import {
  AboutContainer,
  TextDiv,
  AboutDiv,
  Text,
  Title,
} from "./aboutme.styled";
import { IconDiv, SMIcons } from "../LandingPage/Hero.Styled";

export const Aboutme = () => {
  return (
    <AboutContainer>
      <AboutDiv>
        <Title>about me</Title>
      </AboutDiv>
      <TextDiv>
        <Text>Hi, I'm Vinh Thong Trinh👋!</Text>
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
        <Text>
          I am a self-taught web developer & love to discover new things.
        </Text>
      </TextDiv>
      {/* WHY I DO IT */}
      <TextDiv>
        <Text>You want to know more about me?</Text>
        <Text>Connect with me on Instagram or write me an E-Mail!</Text>
      </TextDiv>
      <TextDiv>
        {" "}
        <SMIcons
          href="https://www.instagram.com/vnhtrnh/"
          style={{
            backgroundImage: "url(instagram.svg)",
          }}
        />
      </TextDiv>
    </AboutContainer>
  );
};

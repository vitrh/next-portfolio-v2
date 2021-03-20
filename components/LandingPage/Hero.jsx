import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  BottomLeft,
  BottomLeftDiv,
  BottomLeftText,
  BottomRight,
  HeroContainer,
  HeroDivBot,
  HeroDivTop,
  IconDiv,
  SMIcons,
} from "./Hero.Styled";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroDivTop id="slogan">
        Creating high perfomance unique websites is what I do.
      </HeroDivTop>
      <HeroDivBot>
        <BottomLeftDiv>
          <BottomLeft>
            <BottomLeftText>Vinh Thong Trinh</BottomLeftText>
            <IconDiv>
              <SMIcons
                href="https://www.instagram.com/vnhtrnh/"
                style={{
                  backgroundImage: "url(instagram.svg)",
                }}
              />
              <SMIcons
                href="https://github.com/vitrh"
                style={{
                  backgroundImage: "url(Github.svg)",
                }}
              />
              <SMIcons
                href="https://www.linkedin.com/in/vinh-thong-trinh-556b63202/"
                style={{
                  backgroundImage: "url(LinkedIn.svg)",
                }}
              />
            </IconDiv>
          </BottomLeft>
        </BottomLeftDiv>
        <BottomRight
          style={{
            backgroundImage: "url(linie.svg)",
          }}
        />
      </HeroDivBot>
    </HeroContainer>
  );
};

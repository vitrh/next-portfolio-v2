import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  BottomLeft,
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
        <BottomLeft>
          <BottomLeftText>Vinh Thong Trinh</BottomLeftText>
          <IconDiv>
            <SMIcons
              style={{
                backgroundImage: "url(instagram.svg)",
              }}
            />
            <SMIcons
              style={{
                backgroundImage: "url(Github.svg)",
              }}
            />
            <SMIcons
              style={{
                backgroundImage: "url(LinkedIn.svg)",
              }}
            />
          </IconDiv>
        </BottomLeft>
        <BottomRight
          style={{
            backgroundImage: "url(linie.svg)",
          }}
        />
      </HeroDivBot>
    </HeroContainer>
  );
};

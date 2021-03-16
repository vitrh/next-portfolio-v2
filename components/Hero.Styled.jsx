import styled, { keyframes } from "styled-components";
import * as color from "../theme/GlobalColor";
import * as typeface from "../theme/GlobalFont";
import { media } from "../theme/MediaQueries";

export const HeroContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100vh;

  position: relative;

  @media (min-width: ${media.tablet}) {
    max-width: ${media.tablet};
  }
  @media (min-width: ${media.laptopS}) {
    max-width: ${media.laptopS};
  }
  @media (min-width: ${media.laptopM}) {
    max-width: ${media.laptopM};
  }
  @media (min-width: ${media.laptopL}) {
    max-width: ${media.laptopL};
  }

  @media (max-width: ${media.tablet}) {
    max-width: 100%;
  }
`;

export const HeroDivTop = styled.p`
  display: flex;
  color: ${color.$white};

  position: relative;

  margin: 0 auto;
  border-right: 2px solid rgba(255, 255, 255, 0.75);

  margin-top: 4rem;
  margin-bottom: 7rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);

  max-width: 1560px;
  animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 1s steps(44) infinite normal;

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 78%;
    }
  }
  @keyframes blinkTextCursor {
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }

  font-family: ${typeface.poppins};
  font-weight: ${typeface.$regular};
  font-size: ${typeface.$mqrFont1};

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqrFont2};
    @keyframes typewriter {
      from {
        width: 0;
      }
      to {
        width: 85%;
      }
    }
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqrFont3};
    @keyframes typewriter {
      from {
        width: 0;
      }
      to {
        width: 84%;
      }
    }
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqrFont4};
    @keyframes typewriter {
      from {
        width: 0;
      }
      to {
        width: 88%;
      }
    }
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqrFont5};
    @keyframes typewriter {
      from {
        width: 0;
      }
      to {
        width: 60%;
      }
    }
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqrFont6};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqrFont7};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqrFont8};
  }
`;

export const HeroDivBot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;

  max-width: 1100px;
  width: 100%;
  overflow: hidden;
`;

export const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  flex: 0.5;
`;

export const BottomRight = styled.div`
  flex: 0.5;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 50rem;
  height: 27rem;
`;

export const BottomLeftText = styled.p`
  display: flex;

  color: ${color.$white};
  padding-bottom: 1rem;
  font-family: ${typeface.poppins};
  font-weight: ${typeface.$regular};
  font-size: ${typeface.$paragraph};
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export const SMIcons = styled.a`
  display: flex;
  justify-content: space-between;

  background-repeat: no-repeat;
  width: 2rem;
  height: 2rem;
`;

import styled, { keyframes } from "styled-components";
import * as color from "../../theme/GlobalColor";
import * as typeface from "../../theme/GlobalFont";
import { media } from "../../theme/MediaQueries";

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
    min-height: 100vh;
    margin-bottom: 5rem;
    max-width: ${media.tablet};
  }
  @media (min-width: ${media.laptopS}) {
    margin-bottom: 5rem;
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
    height: 100vh;
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
        max-width: 0;
      }
      to {
        max-width: 100%;
      }
    }
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqrFont3};
    @keyframes typewriter {
      from {
        max-width: 0;
      }
      to {
        max-width: 100%;
      }
    }
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqrFont33};
    @keyframes typewriter {
      from {
        max-width: 0;
      }
      to {
        max-width: 100%;
      }
    }
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqrFont4};

    @keyframes typewriter {
      from {
        max-width: 0;
      }
      to {
        max-width: 100%;
      }
    }
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqrFont7};
    @keyframes typewriter {
      from {
        max-width: 0;
      }
      to {
        max-width: 100%;
      }
    }
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqrFont7};
    @keyframes typewriter {
      from {
        max-width: 0;
      }
      to {
        max-width: 100%;
      }
    }
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqrFont7};
    margin-top: 0;
    @keyframes typewriter {
      from {
        max-width: 0;
      }
      to {
        max-width: 100%;
      }
    }
  }
  @media (max-width: ${media.mobileS}) {
    font-size: ${typeface.$mqrFont8};
    margin-bottom: 3rem;
    margin-top: 3rem;
    @keyframes typewriter {
      from {
        max-width: 0;
      }
      to {
        max-width: 100%;
      }
    }
  }
`;

export const HeroDivBot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;

  max-width: 1100px;
  width: 100%;
  overflow: hidden;

  @media (max-width: ${media.laptopL}) {
    max-width: 980px;
    padding-left: 0;
  }
  @media (max-width: ${media.laptopM}) {
    max-width: ${media.laptopM};
    max-width: 840px;
  }
  @media (max-width: ${media.laptopS}) {
    max-width: ${media.laptopS};
    flex-direction: column;
  }
  @media (max-width: ${media.tablet}) {
    max-width: ${media.tablet};
  }
  @media (max-width: 550px) {
    max-width: 550px;
  }
  @media (max-width: ${media.mobileL}) {
    max-width: ${media.mobileL};
  }
  @media (max-width: ${media.mobileM}) {
    max-width: ${media.mobileM};
  }
  @media (max-width: ${media.mobileS}) {
    max-width: ${media.mobileS};
  }
`;

export const BottomLeftDiv = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  @media (max-width: ${media.laptopS}) {
    height: 10vh;
    order: 2;
  }
`;

export const BottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const BottomRight = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: visible;
  width: 32rem;
  height: 25rem;
  @media (max-width: ${media.laptopS}) {
    order: 1;
    justify-content: flex-end;
    width: 20rem;
    height: 16rem;
    margin-bottom: 4rem;
  }
`;

export const BottomLeftText = styled.p`
  display: flex;
  align-items: center;
  color: ${color.$white};
  padding-bottom: 1rem;
  font-family: ${typeface.poppins};
  font-weight: ${typeface.$regular};
  font-size: ${typeface.$paragraph};
  @media (max-width: ${media.laptopS}) {
    justify-content: flex-start;
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqrFont4};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqrFont5};
  }
  @media (max-width: ${media.mobileM}) {
  }
  @media (max-width: ${media.mobileS}) {
  }
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;
export const SMIcons = styled.a`
  display: flex;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 1.5rem;
  height: 1.5rem;
`;

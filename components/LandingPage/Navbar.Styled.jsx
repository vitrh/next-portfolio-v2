import styled, { keyframes } from "styled-components";
import * as color from "../../theme/GlobalColor";
import * as typeface from "../../theme/GlobalFont";
import { media } from "../../theme/MediaQueries";

export const NavContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 1000;

  width: 100%;
`;

export const NavDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  max-width: 1560px;
  margin: 0 auto;
  width: 100%;
  position: relative;

  padding-top: 1rem;
  @media (max-width: ${media.tablet}) {
    padding-top: 1rem;
  }
`;

export const HamburgerMenu = styled.a`
  height: 2px;
  width: 2rem;

  border: ${({ isOpen }) =>
    isOpen ? `1px solid ${color.$black}` : `1px solid ${color.$white};`};

  background-color: ${({ isOpen }) =>
    isOpen ? `${color.$black}` : `${color.$white};`};
  border-radius: 5px;
  &:first-child {
    margin-bottom: 0.5rem;
  }

  transition: all 1s ease-in-out;
`;
export const HamburgerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 101;
  cursor: pointer;
  margin-right: 2rem;

  ${HamburgerMenu} {
    &:first-child {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translate(3px, 8px)" : ""};
    }
    &:last-child {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translate(0px, -3px)" : ""};
    }
  }
`;

export const Name = styled.h1`
  z-index: 101;
  position: relative;
  font-family: ${typeface.oswald};
  font-size: ${typeface.$md2Font3};
  font-weight: ${typeface.$regular};
  transition: all 1s ease-in-out;
  color: ${({ isOpen }) => (isOpen ? `${color.$black}` : `${color.$white};`)};
  cursor: pointer;
  margin-left: 2rem;

  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqmd6font};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqmd7font};
    margin-left: 2rem;
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqmd8font};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqmd9font};
  }

  &:before,
  &:after {
    display: block;
    content: attr(data-glitch);

    @media (min-width: 550px) and (max-width: ${media.tablet}) {
    }
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
  }
  &:after {
    color: #f0f;
    z-index: -2;
  }
  &:before {
    color: #0ff;
    z-index: -1;
  }
  &:hover {
    &:before {
      animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both 5;
    }
    &:after {
      animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both 5;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;

  background-color: ${color.$white};
  overflow: hidden;
  transition: all 1s ease-in-out;
  height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
  width: 100vw;

  top: 0;
`;

export const ItemDiv = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-width: 80vw;
  text-decoration: none;
  color: inherit;
  margin-left: 4rem;
  :visited {
    text-decoration: none;
    color: black;
  }
  &:first-child {
    margin-top: 10.3125rem;
  }
`;

export const Items = styled.h1`
  font-size: ${typeface.$menuItems};
  font-weight: ${typeface.$semiBold};
  position: relative;

  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqmd1font};
    width: 60vw;
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqmd2font};
    width: 70vw;
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqmd3font};
    width: 80vw;
  }
  @media (min-width: 550px) and (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqmd4font};
    padding-top: 1rem;
    width: 90vw;
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqmd5font};
    margin-left: -2rem;
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqmd6font};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqmd7font};
  }
  @media (max-width: ${media.mobileS}) {
    font-size: ${typeface.$mqmd7font};
  }

  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-4px, 5px);
    }
    40% {
      transform: translate(-5px, -5px);
    }
    60% {
      transform: translate(5px, 5px);
    }
    80% {
      transform: translate(5px, -5px);
    }
    to {
      transform: translate(0);
    }
  }
  &:before,
  &:after {
    display: block;
    content: attr(data-glitch);

    @media (min-width: 550px) and (max-width: ${media.tablet}) {
      padding-top: 1rem;
    }
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
  }
 
  }
`;

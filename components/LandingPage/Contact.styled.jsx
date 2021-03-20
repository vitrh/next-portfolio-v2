import styled, { keyframes } from "styled-components";
import * as color from "../../theme/GlobalColor";
import * as typeface from "../../theme/GlobalFont";
import { media } from "../../theme/MediaQueries";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  @media (min-width: ${media.tablet}) {
    min-height: 50vh;
    max-width: ${media.tablet};
    margin-top: 10rem;
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

export const WorkArrowDiv = styled.div`
  display: flex;

  svg {
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    transform: ${({ open }) => (open ? "rotate(0)" : "rotate(180deg)")};
    transition: all 250ms ease-in-out;
    @media (max-width: ${media.laptopS}) {
      cursor: pointer;
    }
  }
  &:hover {
    svg {
      color: blue;
    }
  }
`;

export const Text = styled.div`
  font-family: ${typeface.poppins};
  font-weight: ${typeface.$semiBold};
  font-size: ${typeface.$mqtFont1};

  margin-top: 10rem;
  margin-bottom: 5rem;

  color: ${color.$white};
  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$mqtFont2};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$mqtFont3};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$mqtFont4};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqtFont4};
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$mqtFont5};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqtFont6};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$mqtFont7};
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.a`
  display: block;
  position: relative;
  padding: 1.5em 3em;
  appearance: none;
  border: 1px solid ${color.$black};
  background: ${color.$white};
  color: ${color.$black};
  text-transform: uppercase;
  letter-spacing: 0.25em;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 2px;
  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$contactFont1};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$contactFont2};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$contactFont3};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$contactFont4};
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$contactFont5};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$contactFont6};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${typeface.$contactFont7};
  }

  font-size: ${typeface.$contactFont1};

  transition: 0.5s ease-in-out;
  &:hover {
    background: rgba(100, 0, 0, 0.03);
    color: ${color.$white};
    border: 1px solid ${color.$white};
  }
`;

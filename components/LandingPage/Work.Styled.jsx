import styled, { keyframes } from "styled-components";
import * as color from "../../theme/GlobalColor";
import * as typeface from "../../theme/GlobalFont";
import { media } from "../../theme/MediaQueries";

export const WorkContainer = styled.div`
  display: flex;
  position: relative;

  flex-direction: row;

  justify-content: center;
  margin: 0 auto;

  width: 100%;

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

    flex-direction: column;
  }
  @media (max-width: 550px) {
    margin-bottom: 3rem;
  }
`;

export const WorkLine = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: ${media.laptopL}) {
    margin-top: 5rem;
  }
  @media (max-width: ${media.laptopM}) {
  }
  @media (max-width: ${media.laptopS}) {
  }
  @media (max-width: ${media.tablet}) {
    width: 100%;
    height: 10rem;
  }
  @media (max-width: 550px) {
  }
  @media (max-width: ${media.mobileL}) {
  }
  @media (max-width: ${media.mobileM}) {
  }
  @media (max-width: ${media.mobileS}) {
  }
`;

export const Line = styled.span`
  border: 1px solid ${color.$white};
  border-radius: 5px;

  width: 0;
  height: 20rem;

  &:first-child {
    margin-bottom: 2rem;
    @media (max-width: ${media.tablet}) {
      transform: rotate(90deg);
    }
    @media (max-width: ${media.laptopL}) {
      height: 18rem;
    }
  }
  &:last-child {
    margin-top: 2rem;
    @media (max-width: ${media.tablet}) {
      transform: rotate(90deg);
    }
    @media (max-width: ${media.laptopL}) {
      height: 18rem;
    }
  }
`;

export const LineText = styled.p`
  transform: rotate(-90deg);
  font-size: 20px;
  font-family: ${typeface.monserrat};
  font-weight: ${typeface.$regular};
  color: ${color.$white};
  @media (max-width: ${media.tablet}) {
    transform: rotate(0);
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

export const ProjectDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  justify-content: space-between;
  width: 100%;
  height: 100vh;

  &:last-child {
    align-items: center;
  }
  @media (max-width: 550px) {
  }
`;

export const ProjectDiv = styled.div`
  display: flex;
  flex-direction: row;

  padding: 2rem;
  width: 100%;
  height: 25rem;
  border-radius: 10px;
  background: linear-gradient(
    86.42deg,
    #094183 0%,
    #408fc8 52.6%,
    #6feeff 100%
  );

  @media (max-width: ${media.laptopL}) {
    max-width: 980px;
    margin-bottom: 5rem;
  }
  @media (max-width: ${media.laptopM}) {
    max-width: 100%;
  }
  @media (max-width: ${media.laptopS}) {
    max-width: 80%;
  }
  @media (max-width: ${media.tablet}) {
    margin-bottom: 2rem;
    max-width: 80%;
  }
  @media (max-width: 550px) {
    max-width: 80%;
    height: 20rem;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  @media (max-width: ${media.mobileL}) {
    max-width: 80%;
  }
  @media (max-width: ${media.mobileM}) {
    max-width: 80%;
  }
  @media (max-width: ${media.mobileS}) {
    max-width: 80%;
  }
`;

export const ProjectTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  @media (max-width: 550px) {
    width: 100%;
    padding-left: 0;
    padding-botton: 1rem;
  }

  &:first-child {
    padding-left: 2rem;
    @media (max-width: 550px) {
      width: 100%;
      height: 50%;
      padding-left: 0;
      padding-bottom: 1rem;
    }
  }
  &:last-child {
    padding-left: 2rem;
    @media (max-width: 550px) {
      width: 100%;
      height: 50%;
      padding-left: 0;
      padding-top: 1rem;
    }
  }
`;

export const ProjectText = styled.p`
  display: flex;
  justify-content: flex-start;

  font-family: ${typeface.poppins};
  font-weight: ${typeface.$regular};
  font-size: ${typeface.$smfont};
  color: ${color.$white};

  &:first-child {
    margin-bottom: 2rem;
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$mqrFont4};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$mqrFont6};
  }
  @media (max-width: ${media.mobileM}) {
  }
  @media (max-width: ${media.mobileS}) {
  }
`;

export const ProjectImage = styled.div`
  display: flex;
  background: linear-gradient(180deg, #c4c4c4 0%, rgba(196, 196, 196, 0) 100%);
  border-radius: 5px;
  height: 100%;
  width: 50%;
  justify-content: flex-end;
  @media (max-width: 550px) {
    width: 100%;
    height: 50%;
  }
`;

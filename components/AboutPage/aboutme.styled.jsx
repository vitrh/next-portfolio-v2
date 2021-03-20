import * as color from "../../theme/GlobalColor";
import * as typeface from "../../theme/GlobalFont";
import { media } from "../../theme/MediaQueries";
import styled, { keyframes } from "styled-components";

const Heading = keyframes`
  0% { top: -3.125em; }
  100% { top: 3em;}
`;
export const AboutContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const AboutDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  cursor: default;
  margin-bottom: 10rem;
  position: relative;
  top: 0;
  animation: ${Heading};
  animation-duration: 3s;
  animation-fill-mode: forwards;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-family: ${typeface.poppins};
  font-weight: ${typeface.$medium};
  font-size: ${typeface.$mqtFont1};
  color: ${color.$white};
`;

export const Text = styled.p`
  font-family: ${typeface.poppins};
  font-weight: ${typeface.$regular};
  font-size: ${typeface.$mqrFont5};
  color: ${color.$white};
`;

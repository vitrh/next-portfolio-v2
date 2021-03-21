import styled, { keyframes } from "styled-components";
import * as color from "../../theme/GlobalColor";
import * as typeface from "../../theme/GlobalFont";
import { media } from "../../theme/MediaQueries";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  justify-content: flex-end;

  max-width: 100%;

  position: relative;
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;

  width: 80vw;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const LinkDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterTitle = styled.h1`
  font-family: ${typeface.poppins};
  font-weight: ${typeface.$medium};
  font-size: ${typeface.$mqrFont5};
  color: ${color.$white};
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
  margin-bottom: 2rem;
`;

export const LinkName = styled.a`
  font-family: ${typeface.poppins};
  font-weight: ${typeface.$light};
  font-size: ${typeface.$mqrFont6};
  color: ${color.$white};

  margin-bottom: 1.5rem;
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
  &:hover {
    transition: all 500ms ease-in-out;
    color: ${color.$lightBlue};
  }
`;

export const FooterLine = styled.div`
  position: relative;
  border: 1px solid ${color.$white};
  border-radius: 5px;

  width: 80%;
  height: 0;
`;

export const CopyMeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 550px) {
    align-items: flex-start;
  }
`;

export const CopyrightDiv = styled.div`
  font-family: ${typeface.poppins};
  font-weight: ${typeface.$light};
  font-size: ${typeface.$mqrFont7};
  color: ${color.$gray};

  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
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
  font-size: ${typeface.$contactFont3};
  @media (max-width: ${media.laptopL}) {
    font-size: ${typeface.$contactFont3};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${typeface.$contactFont4};
  }
  @media (max-width: ${media.laptopS}) {
    font-size: ${typeface.$contactFont5};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${typeface.$contactFont6};
  }
  @media (max-width: 550px) {
    font-size: ${typeface.$contactFont7};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${typeface.$contactFont8};
  }

  transition: 0.5s ease-in-out;
  &:hover {
    background: rgba(100, 0, 0, 0.03);
    color: ${color.$white};
    border: 1px solid ${color.$white};
  }
`;

const clickAnimation = keyframes`
  0%{ 
    display: block;
    opacity: 1;
  }
  100%{
    display: none;
    opacity: 0;
  }
`;

export const Copied = styled.div`
  display: block;
  position: fixed;

  right: 0;
  bottom: 0;
  padding: 6px 20px;

  background: linear-gradient(
    86.42deg,
    #094183 0%,
    #408fc8 52.6%,
    #6feeff 100%
  );
  color: white;
  text-align: center;
  font-weight: ${typeface.$regular};
  transition: all 500ms ease;
  visibility: visible;
  white-space: pre-wrap;
  line-height: 2;
  border-radius: 2px;
  box-shadow: 0 0 5px rgb(0 0 0 / 30%);

  overflow: hidden;
  contain: content;
  display: none;
  opacity: 0;
`;

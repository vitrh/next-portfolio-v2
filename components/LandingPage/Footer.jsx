import React, { useState } from "react";
import Link from "next/link";
import {
  FooterContainer,
  FooterDiv,
  FooterLine,
  LinkDiv,
  FooterTitle,
  LinkName,
  CopyrightDiv,
  CopyMeDiv,
  Button,
  Copied,
} from "./Footer.styled";

export const Footer = () => {
  const [click, setClick] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);

      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <FooterContainer>
      <FooterLine />

      <FooterDiv>
        <LinkDiv>
          <FooterTitle>Navigation</FooterTitle>
          <Link href="/">
            <LinkName>Home</LinkName>
          </Link>
          <LinkName href="/about">About</LinkName>
          <LinkName>Work</LinkName>
        </LinkDiv>

        <LinkDiv>
          <FooterTitle>Social Media</FooterTitle>
          <LinkName href="https://www.instagram.com/vnhtrnh/">
            Instagram
          </LinkName>
          <LinkName href="https://www.linkedin.com/in/vinh-thong-trinh-556b63202/">
            LinkedIn
          </LinkName>
          <LinkName href="https://github.com/vitrh">Github</LinkName>
        </LinkDiv>

        <LinkDiv>
          <FooterTitle>Legals</FooterTitle>
          <Link href="/">
            <LinkName>Impressum</LinkName>
          </Link>
          <LinkName>Datenschutzerklärung</LinkName>
        </LinkDiv>
        <LinkDiv>
          <CopyMeDiv>
            <FooterTitle>vinhthong.trinh@hotmail.com</FooterTitle>
            <Button
              onClick={() => copyToClipBoard("vinhthong.trinh@hotmail.com")}
            >
              Copy E-Mail
            </Button>
            <Copied click={click}>E-Mail Copied!</Copied>
          </CopyMeDiv>
        </LinkDiv>
      </FooterDiv>

      <FooterLine />

      <CopyrightDiv>
        © Vinh Thong Trinh | 2021 | Built with Next.js
      </CopyrightDiv>
    </FooterContainer>
  );
};

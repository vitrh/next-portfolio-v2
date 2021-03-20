import React, { useState, useRef } from "react";
import {
  ContactContainer,
  WorkArrowDiv,
  Text,
  ButtonDiv,
  Button,
} from "./Contact.styled";

export const Contact = () => {
  const [open, setOpen] = useState(false);
  const openAccordion = () => {
    setOpen(!open);
  };

  return (
    <ContactContainer id="contact">
      {/* dieser arrow später nach oben und nach unten, hovereffect mäßig */}
      <WorkArrowDiv open={open}>
        <svg
          onClick={openAccordion}
          width="35"
          height="30"
          viewBox="0 0 57 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="27"
            y="28.2843"
            width="40"
            height="2"
            rx="1"
            transform="rotate(-45 27 28.2843)"
            fill="white"
          />
          <rect
            x="1.41406"
            y="0.00012207"
            width="40"
            height="2"
            rx="1"
            transform="rotate(45 1.41406 0.00012207)"
            fill="white"
          />
        </svg>
      </WorkArrowDiv>
      <Text>Ready for your own project?</Text>
      <ButtonDiv>
        <Button href="mailto:vinhthong.trinh@hotmail.com">Contact Me</Button>
      </ButtonDiv>
    </ContactContainer>
  );
};

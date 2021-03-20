import React, { useState } from "react";
import {
  Line,
  WorkLine,
  LineText,
  WorkContainer,
  ProjectDivContainer,
  ProjectDiv,
  ProjectText,
  ProjectImage,
  ProjectTextDiv,
} from "./Work.Styled";

export const Work = () => {
  const [open, setOpen] = useState(false);
  const openAccordion = () => {
    setOpen(!open);
  };

  return (
    <WorkContainer id="work">
      <WorkLine>
        <Line />
        <LineText>Projects</LineText>
        <Line />
      </WorkLine>

      <ProjectDivContainer open={open}>
        <ProjectDiv>
          <ProjectTextDiv>
            <ProjectText>Project 01</ProjectText>
            <ProjectText>In Work..</ProjectText>
          </ProjectTextDiv>
          <ProjectImage />
        </ProjectDiv>
        <ProjectDiv>
          <ProjectImage />
          <ProjectTextDiv>
            <ProjectText>Project 02</ProjectText>
            <ProjectText>Coming soon..</ProjectText>
          </ProjectTextDiv>
        </ProjectDiv>
      </ProjectDivContainer>
    </WorkContainer>
  );
};

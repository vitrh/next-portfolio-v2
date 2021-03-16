import styled, { keyframes } from "styled-components";
import * as color from "../theme/GlobalColor";
import * as typeface from "../theme/GlobalFont";
import { media } from "../theme/MediaQueries";

export const WorkContainer = styled.div`
  display: flex;
  position: relative;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: blue;
`;

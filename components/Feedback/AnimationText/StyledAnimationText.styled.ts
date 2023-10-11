import styled from "styled-components";

const StyledAnimationText =
  styled.p <
  { textpos: string } >
  `
  position: absolute;
  bottom: 12vw;
  left: ${(props) => (props.textpos === "left" ? "-12vw" : "12vw")};
  border: 1px solid black;
  font-size: 1.1vw;
  width: 12vw;
  text-align: center;
  padding: 0.5vw 2vw;
`;

export default StyledAnimationText;

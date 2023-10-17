import styled from "styled-components";

const StyledAnimationGlobalContainer = styled.div<{
  position: string;
}>`
  position: absolute;
  width: 100%;
  left: 0;
  top: ${(props) => (props.position === "top" ? "20%" : "50%")};
  height: 50%;
`;

export default StyledAnimationGlobalContainer;

import styled from "styled-components";

const StyledAnimationContainer = styled.div<{
  left: string;
  top: string;
  sizing: number;
  rotate: "left" | "right";
}>`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  transform: ${(props) => `scale(${props.sizing})`};
  opacity: ${(props) => props.sizing};
  transition: transform 300ms ease, opacity 300ms ease;

  p {
    transition: rotate 300ms ease;
    rotate: ${(props) =>
      props.rotate === "left"
        ? `${props.sizing * 45 + 315}deg`
        : `${-(props.sizing * 45 + 315)}deg`};
  }

  img {
    transition: rotate 300ms ease;

    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    rotate: ${(props) =>
      props.rotate === "left"
        ? `${-(props.sizing * 45 + 315)}deg`
        : `${props.sizing * 45 + 315}deg`};
  }
`;

export default StyledAnimationContainer;

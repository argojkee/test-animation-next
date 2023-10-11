import StyledAnimationText from "./StyledAnimationText.styled";
import { FC } from "react";

interface AnimationTextProps {
  text: string;
  textpos: string;
}

const AnimationText: FC<AnimationTextProps> = ({ text, textpos }) => {
  return (
    <StyledAnimationText textpos={textpos} className="animation-text">
      {text}
    </StyledAnimationText>
  );
};

export default AnimationText;

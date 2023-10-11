import { useInView } from "react-intersection-observer";
import AnimationText from "../AnimationText/AnimationText";
import AnimationPicture from "../AnimationPicture/AnimationPicture";
import StyledAnimationContainer from "./StyledAnimationContainer.styled";
import { FC } from "react";
import { CatElementInfo } from "../FeedbackContainer/FeedbackContainer";

interface AnimationContainerProps extends CatElementInfo {
  className: string;
}

const AnimationContainer: FC<AnimationContainerProps> = ({
  top,
  left,
  text,
  textpos,
  cat,
  className,
  rotate,
}) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  });

  return (
    <StyledAnimationContainer
      className={className}
      rotate={rotate}
      sizing={inView ? Number(entry?.intersectionRatio.toFixed(2)) : 0}
      top={top}
      left={left}
      ref={ref}
    >
      <AnimationText text={text} textpos={textpos} />
      <AnimationPicture cat={cat} />
    </StyledAnimationContainer>
  );
};

export default AnimationContainer;

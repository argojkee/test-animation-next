import AnimationContainer from "../Feedback/AnimationContainer/AnimationContainer";
import StyledAnimationGlobalContainer from "./StyledAnimationGlobalContainer.styled";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { CatElementInfo } from "../Feedback/FeedbackContainer/FeedbackContainer";
import { FC } from "react";

interface AnimationGlobalContainerProps {
  position: string;
  cats: CatElementInfo[];
}

const AnimationGlobalContainer: FC<AnimationGlobalContainerProps> = ({
  position,
  cats,
}) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: [
      0.5, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
      0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
    ],
  });

  const [size, setSize] = useState(0);

  useEffect(() => {
    console.log(entry?.intersectionRatio);
    if (inView) {
      if (entry?.boundingClientRect.bottom) {
        setSize(
          entry?.boundingClientRect.bottom < window.innerHeight
            ? 1
            : Number(entry?.intersectionRatio)
        );
      }
    }
  }, [entry?.boundingClientRect.bottom, entry?.intersectionRatio, inView]);

  return (
    <StyledAnimationGlobalContainer position={position} ref={ref}>
      {cats.map(({ cat, textpos, text, top, left, rotate }, index) => (
        <AnimationContainer
          className="animation-container"
          key={index}
          rotate={rotate}
          cat={cat}
          text={text}
          textpos={textpos}
          top={top}
          left={left}
          sizing={size}
        />
      ))}
    </StyledAnimationGlobalContainer>
  );
};

export default AnimationGlobalContainer;

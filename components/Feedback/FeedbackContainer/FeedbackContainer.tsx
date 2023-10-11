import Container from "@/components/Container/Container";
import BannerFeedback from "../BannerFeedback/BannerFeedback";
import AnimationContainer from "../AnimationContainer/AnimationContainer";
import { nanoid } from "nanoid";
import { StaticImageData } from "next/image";
import { FC } from "react";

import cat1 from "../../../images/feedback/cat1.jpg";
import cat2 from "../../../images/feedback/cat2.jpeg";
import cat3 from "../../../images/feedback/cat3.jpg";
import cat4 from "../../../images/feedback/cat4.jpg";

export interface CatElementInfo {
  cat: StaticImageData;
  textpos: string;
  text: string;
  top: string;
  left: string;
  rotate: "left" | "right";
}

const cats: CatElementInfo[] = [
  {
    cat: cat1,
    textpos: "right",
    text: "I'm happy",
    top: "15vw",
    left: "6vw",
    rotate: "left",
  },
  {
    cat: cat4,
    textpos: "left",
    text: "Thank you",
    top: "19vw",
    left: "84vw",
    rotate: "right",
  },
  {
    cat: cat3,
    textpos: "left",
    text: "I miss you.",
    top: "44vw",
    left: "15vw",
    rotate: "left",
  },
  {
    cat: cat2,
    textpos: "right",
    text: "I'm waiting",
    top: "50vw",
    left: "71vw",
    rotate: "right",
  },
];

const FeedbackContainer: FC = () => {
  return (
    <section>
      <Container>
        <BannerFeedback />
        {cats.map(({ cat, textpos, text, top, left, rotate }) => (
          <AnimationContainer
            className="animation-container"
            key={nanoid()}
            rotate={rotate}
            cat={cat}
            text={text}
            textpos={textpos}
            top={top}
            left={left}
          />
        ))}
      </Container>
    </section>
  );
};

export default FeedbackContainer;

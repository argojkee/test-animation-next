import Container from "@/components/Container/Container";
import BannerFeedback from "../BannerFeedback/BannerFeedback";
import { StaticImageData } from "next/image";
import { FC } from "react";
import AnimationGlobalContainer from "@/components/AnimationGlobalContainer/AnimationGlobalContainer";

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

const catsTop: CatElementInfo[] = [
  {
    cat: cat1,
    textpos: "right",
    text: "I'm happy",
    top: "0",
    left: "6vw",
    rotate: "left",
  },
  {
    cat: cat4,
    textpos: "left",
    text: "Thank you",
    top: "10vw",
    left: "84vw",
    rotate: "right",
  },
];

const catsBottom: CatElementInfo[] = [
  {
    cat: cat3,
    textpos: "left",
    text: "I miss you.",
    top: "14vw",
    left: "15vw",
    rotate: "left",
  },
  {
    cat: cat2,
    textpos: "right",
    text: "I'm waiting",
    top: "18vw",
    left: "71vw",
    rotate: "right",
  },
];

const FeedbackContainer: FC = () => {
  return (
    <section className="feedback-section">
      <Container>
        <BannerFeedback />

        <AnimationGlobalContainer position="top" cats={catsTop} />
        <AnimationGlobalContainer position="bottom" cats={catsBottom} />
      </Container>
    </section>
  );
};

export default FeedbackContainer;

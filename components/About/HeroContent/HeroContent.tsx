import StyledHeroContent from "./StyledHeroContent.styled";
import { FC } from "react";
import Image from "next/image";
import logoCat from "../../../images/about/hero-content/logo.jpeg";

const HeroContent: FC = () => {
  return (
    <StyledHeroContent>
      <Image className="img-logo" src={logoCat} alt="logotype" />
      <h1>Hello, I am a Savecat</h1>
      <p>
        A fund to support homeless kittens. We help to find caring families for
        the cutest creatures on Earth.
      </p>
    </StyledHeroContent>
  );
};

export default HeroContent;

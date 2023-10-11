import Container from "@/components/Container/Container";
import StyledAboutContainer from "./StyledAboutContainer.styled";
import ImageList from "../ImageList/ImageList";
import HeroContent from "../HeroContent/HeroContent";
import { FC } from "react";
import topBlockCats from "@/data/topListcats";
import bottomBlockCats from "@/data/bottomListCats";

const AboutContainer: FC = () => {
  return (
    <StyledAboutContainer>
      <Container>
        <ImageList items={topBlockCats} position="top" />
        <HeroContent />
        <ImageList items={bottomBlockCats} position="bottom" />
      </Container>
    </StyledAboutContainer>
  );
};

export default AboutContainer;

import StyledBannerFeedback from "./StyledBannerFeedback.styled";
import Image from "next/image";
import MarketLinksList from "../MarketLinksList/MarketLinksList";
import { FC } from "react";
import catLogo from "../../../images/about/hero-content/logo.jpeg";

const BannerFeedback: FC = () => {
  return (
    <StyledBannerFeedback>
      <div className="title-container">
        <Image src={catLogo} alt="logotype" />
        <p>Only for people with a gold heart.</p>
      </div>
      <h2>Think about the future. Improve karma.</h2>
      <p>
        If you take the kitten home right now, you will receive as a gift
        everything you need to keep him for the first half of the year. Do good
        and it will be returned.
      </p>
      <MarketLinksList />
    </StyledBannerFeedback>
  );
};

export default BannerFeedback;

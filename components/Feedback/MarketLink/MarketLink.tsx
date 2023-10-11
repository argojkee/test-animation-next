import StyledMarketLink from "./StyledMarketLink.styled";
import { FC, SVGProps } from "react";

export interface MarketLinkProps {
  Logo: FC<LogoProps>;
  text: string;
  title: string;
  link: string;
}

interface LogoProps extends SVGProps<SVGSVGElement> {
  size: string;
}

const MarketLink: FC<MarketLinkProps> = ({ Logo, text, title, link }) => {
  return (
    <StyledMarketLink href={link} target="_blank">
      <Logo size="2vw" />
      <span>
        <p>{text}</p>
        <p>{title}</p>
      </span>
    </StyledMarketLink>
  );
};

export default MarketLink;

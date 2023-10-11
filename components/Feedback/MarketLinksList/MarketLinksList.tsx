import { marketPlaces } from "@/data/marketPlaces";

import MarketLink from "../MarketLink/MarketLink";
import { FC } from "react";

const MarketLinksList: FC = () => {
  return (
    <ul>
      {marketPlaces.map(({ text, Logo, title, link }, index) => (
        <li key={index}>
          <MarketLink text={text} Logo={Logo} title={title} link={link} />
        </li>
      ))}
    </ul>
  );
};

export default MarketLinksList;

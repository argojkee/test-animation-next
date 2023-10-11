import { AiOutlineApple } from "react-icons/ai";
import { PiGooglePlayLogo } from "react-icons/pi";
import { MarketLinkProps } from "@/components/Feedback/MarketLink/MarketLink";

export const marketPlaces: MarketLinkProps[] = [
  {
    Logo: AiOutlineApple,
    text: "Download on the",
    title: "App Store",
    link: "https://apps.apple.com/us/app/ensuria/id1523665255",
  },
  {
    Logo: PiGooglePlayLogo,
    text: "GET IT ON",
    title: "Google Play",
    link: "https://play.google.com/store/apps/details?id=com.ensuria.app",
  },
];

import AboutContainer from "@/components/About/AboutContainer/AboutContainer";
import FeedBackContainer from "../components/Feedback/FeedbackContainer/FeedbackContainer";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <AboutContainer />
      <FeedBackContainer />
    </>
  );
};

export default Home;

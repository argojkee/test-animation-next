import StyledContainer from "./StyledContainer.styled";
import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode[];
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

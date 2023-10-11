import styled from "styled-components";

const StyledMarketLink = styled.a`
  display: flex;
  align-items: center;
  column-gap: 1vw;
  color: white;
  background-color: #2c2a2d;
  padding: 1vw 2vw;
  border-radius: 2vw;
  height: 4vw;
  min-width: 11vw;
  transition: opacity 300ms ease;
  &:hover,
  &:focus {
    opacity: 0.8;
  }

  p {
    font-size: 1.5vw;
  }
`;

export default StyledMarketLink;

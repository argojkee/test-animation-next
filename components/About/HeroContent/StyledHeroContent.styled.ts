import styled from "styled-components";

const StyledHeroContent = styled.div`
  max-width: 50%;
  margin: -1vh auto 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3.3vw;
    line-height: 1.1;
  }

  p {
    font-size: 1.66vw;
    text-align: center;
    color: #7f7d84;
  }

  .img-logo {
    width: 4vw;
    height: 10vh;
  }
`;

export default StyledHeroContent;

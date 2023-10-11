import styled from "styled-components";

const StyledBannerFeedback = styled.div`
  padding-top: 13vw;
  padding-bottom: 23vw;
  max-width: 47vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 1vw;

  .title-container {
    display: flex;
    align-items: center;
    column-gap: 0.5vw;
  }

  .title-container p {
    font-size: 1.25vw;
    line-height: 1.1;
    font-weight: 500;
  }

  h2 {
    font-size: 4vw;
    line-height: 0.9;
    font-weight: 500;
    text-align: center;
  }

  img {
    width: 2.8vw;
    height: 2.8vw;
  }

  & > p {
    font-size: 1.667vw;
    line-height: 1.3;
    margin-bottom: 3.75vw;
    text-align: center;
    color: #7f7d84;
  }

  ul {
    display: flex;
    list-style: none;
    padding-left: 0;
    column-gap: 2vw;
  }
`;

export default StyledBannerFeedback;
